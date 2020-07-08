import Link from 'next/link'
import Slider from "react-slick";
import { brandService } from '../../_services/brand.service'
import { BrandCard } from '../_cards'
import { FaArrowRight } from 'react-icons/fa'
import { LeftArrowSlider, RightArrowSlider } from '../_buttons'
import { cardSliderConfig } from '../../_helpers/config'

function FeaturedBrands() {

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



    if(!fetched) <h1>LOADING</h1>
    return (
      <section className="product-panel mg-top">
      <div className="section-title bottom-bordered customized">
          <div style={{display:"flex", alignItems:"center", justifyContent:""}}>
              <h2 style={{}}>Featured Brands</h2> 
              <Link href="/brands/" as={`/brands/`}>
                  <a style={{display:"flex", alignItems:"center"}} className="h2link">VIEW ALL&nbsp;&nbsp;<span><FaArrowRight /></span></a>
              </Link> 
              
          </div>
     </div>
      <Slider {...cardSliderConfig}>
          {
              items && items.map((item, index) =>  
                  <BrandCard center={true} key={index} item={item} />
              )
          }
      </Slider>
  </section>
    )
}
export { FeaturedBrands }