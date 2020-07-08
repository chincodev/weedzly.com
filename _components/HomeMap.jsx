import Pins from './Pins'
import MapGL, { Popup, GeolocateControl } from 'react-map-gl';
import { dispensaryService } from '../_services/dispensary.service'


function HomeMap() {

    const itemsInitialState = '';
    const [ items, setItems ] = React.useState(itemsInitialState)

    const [state, setState] = React.useState({
        viewport: {
            width: '100%',
            height: '400px',
            latitude: 37.785164,
            longitude: -100,
            zoom: 3.5,
            bearing: 0,
            pitch: 0
        },
        popupInfo: null,
        interactionState: {},
        settings: {
            dragPan: false,
            dragRotate: false,
            scrollZoom: false,
            touchZoom: false,
            touchRotate: false,
            keyboard: false,
            doubleClickZoom: false,
            minZoom: 0,
            maxZoom: 20,
            minPitch: 0,
            maxPitch: 85
        }
    })

    const fetchDispensaries = async () => {
        await dispensaryService.getAll()
            .then( async items => setItems(items))
        }

        
    const _onClickMarker = city => {
        setState({...state, popupInfo: city});
    };

    function _renderPopup() {
        const {popupInfo} = state;

        return (
            popupInfo && (
                <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={parseFloat(popupInfo.longitude)}
                    latitude={parseFloat(popupInfo.latitude)}
                    onClose={() => setState({...state, popupInfo: null})}
                >
                <h1>{popupInfo.name}</h1>
                </Popup>
            )
         );
    }

    function onMouseLeaving () {
        setState({...state, popupInfo: null})
    }


    React.useEffect(() => {
        fetchDispensaries();

    }, [])

    if(!items) return <h1>LOADING</h1>
        return (
            <div className="container">
                <div className="home-banner mb-3" style={{backgroundColor: "#f2f2f2"}}>
                    <div className="banner-left" style={{width:"33.33%"}}>
                        <div className="slider-styled">
                            <span>FIND</span>
                            <h2>DISPENSARIES</h2>
                            <p>Near You</p>
                        </div>
                    </div>
                    <div className="banner-right" style={{width:"66.66667%"}}>
                        <MapGL
                            mapStyle="mapbox://styles/mapbox/light-v10"
                            mapboxApiAccessToken="pk.eyJ1IjoiYW50aG9ueTk1MiIsImEiOiJjazl2enJuMWswNHJhM21vNHBpZGF3eXp0In0.zIyPl0plESkg395zI-WVsg"
                            onViewportChange={(viewport) => setState({viewport})}
                            {...state.settings}
                            {...state.viewport}

                        >
                            <GeolocateControl
                                positionOptions={{enableHighAccuracy: true}}
                                trackUserLocation={true}
                            /> 
                            <Pins data={items} onClick={_onClickMarker} onMouseLeaving={onMouseLeaving} />
                            { _renderPopup() } 
                        </MapGL>
                    </div>
                </div>
            </div>   
        )

}
export { HomeMap }

    