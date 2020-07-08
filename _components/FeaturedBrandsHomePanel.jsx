import Link from 'next/link'
import Slider from "react-slick";
import { brandService } from '../_services/brand.service'
import { BrandCard } from '.'

function FeaturedBrandsHomePanel() {

    const itemsInitialValue = [];
    const [items, setItems] = React.useState(itemsInitialValue)

    const fetchedInitialValue = false;
    const [fetched, setFetched] = React.useState(fetchedInitialValue)


    const fetchItems = async () => {
        await brandService.getAll("?size=15")
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
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    if(!fetched) <h1>LOADING</h1>
    return (
        <section className="product-panel">
            <div className="section-title bottom-bordered" style={{display:"flex", justifyContent:"space-between"}}>
                <h2>FEATURED BRANDS</h2>
                <button className="btn custom-black">VIEW ALL</button>
            </div>
            <Slider {...settings}>
                {
                    items && items.map((item, index) =>  
                        <BrandCard center={true} key={index} item={item} />
                    )
                } 
            </Slider>
        </section>
    )
}
export { FeaturedBrandsHomePanel }