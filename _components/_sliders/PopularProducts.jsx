import Link from 'next/link'
import Slider from "react-slick";
import { productService } from '../../_services/product.service'
import { FaArrowRight } from 'react-icons/fa'
import { LeftArrowSlider, RightArrowSlider } from '../_buttons'
import CustomRightArrow from '../CustomRightArrow'
import { ProductCard } from '../_cards';
import { cardSliderConfig } from '../../_helpers/config'

function PopularProducts() {

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

  

    return (
        <section className=" mg-top product-panel">
            <div className="section-title bottom-bordered customized">
                <div style={{display:"flex", alignItems:"center", justifyContent:""}}>
                    <h2 style={{}}>Popular Products</h2> 
                    <Link href="/brands/" as={`/brands/`}>
                        <a style={{display:"flex", alignItems:"center"}} className="h2link">VIEW ALL&nbsp;&nbsp;<span><FaArrowRight /></span></a>
                    </Link> 
                    
                </div>
           </div>
            <Slider {...cardSliderConfig}>
                {
                    items && items.map((item, index) =>  
                        <ProductCard center={true} key={index} item={item} />
                    )
                }
            </Slider>
        </section>
    )
}
export { PopularProducts }