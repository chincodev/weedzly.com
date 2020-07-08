import Link from 'next/link'
import Slider from "react-slick";
import { productService } from '../_services/product.service'
import { ProductCard } from './'

function PopularProductsHomePanel() {

    const itemsInitialValue = [];
    const [items, setItems] = React.useState(itemsInitialValue)

    const fetchedInitialValue = false;
    const [fetched, setFetched] = React.useState(fetchedInitialValue)


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
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
        // autoplay: true,
        autoplaySpeed: 5000
    };

    return (

    
        <section className="product-panel">
            <div className="section-title bottom-bordered" style={{display:"flex", justifyContent:"space-between"}}>
                <h2>Most Popular Products</h2>
                <button className="btn custom-black">VIEW ALL</button>
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