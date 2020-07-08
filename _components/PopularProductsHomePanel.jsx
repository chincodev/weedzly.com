import Link from 'next/link'
import Slider from "react-slick";
import { productService } from '../_services/product.service'
import { ProductCard } from './'
import { FaArrowRight } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import CustomRightArrow from './CustomRightArrow'


function PopularProductsHomePanel() {

    const itemsInitialValue = [];
    const [items, setItems] = React.useState(itemsInitialValue)

    const fetchedInitialValue = false;
    const [fetched, setFetched] = React.useState(fetchedInitialValue)

    const NextCustomArrow = ({className, to, onClick}) => (
        <button type="button" onClick={onClick} className={`btn-custom slider-trigger next-custom-button ${className}`} aria-label={to}>
           <MdKeyboardArrowRight />
        </button>
      )
    const PrevCustomArrow = ({className, to, onClick}) => (
        <button type="button" onClick={onClick} className={`btn-custom slider-trigger prev-custom-button ${className}`} aria-label={to}>
           <MdKeyboardArrowLeft />
        </button>
    )

    const fetchItems = async () => {
        await productService.getAll("?size=15")
            .then( res => {
                setItems(res.totalData);
                setFetched(true);
            })
    }

    React.useEffect(() => {
        fetchItems();
    }, [])

    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 1,
        prevArrow: <PrevCustomArrow/>,
        nextArrow: <NextCustomArrow/>,
        // autoplay: true,
        autoplaySpeed: 5000
    };

    return (

    
        <section className="product-panel">
            <div className="section-title bottom-bordered customized">
                <div style={{display:"flex", alignItems:"center", justifyContent:""}}>
                    <h2 style={{}}>Popular Products</h2> 
                    <a href="#" style={{display:"flex", alignItems:"center"}} className="h2link">VIEW ALL&nbsp;&nbsp;<span><FaArrowRight /></span></a>
                </div>
           </div>
            <Slider {...settings}>
                {
                    items && items.map((item, index) =>  
                        <ProductCard center={true} key={index} item={item} />
                    )
                }
            </Slider>
        </section>
    )
}
export { PopularProductsHomePanel }