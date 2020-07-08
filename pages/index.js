import { Layout, HomeMap } from '../_components'
import { PopularProducts, FeaturedBrands, FeaturedCategories } from '../_components/_sliders'
import { FullWidth, HomeBottom, HomeTop } from '../_components/_banners'
import { Product, Brand, Strain} from '../_components/_cards'

export default function Home() {

        return (
            <>
                <Layout> 
                    <div className="home main">
                        <HomeTop />
                        <div className="container"><PopularProducts /></div>
                        {/* <div className="container"><FeaturedCategories /></div> */}
                         <HomeMap />
                        <div className="container"><FeaturedBrands /></div>
                        {/* <div className="container"><HomeBottom /></div> */}
                    </div>
                </Layout>
            </>
    )
}
