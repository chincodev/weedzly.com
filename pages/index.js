import { Layout, HomeTopBanner, HomeMap, PopularProductsHomePanel, FeaturedBrandsHomePanel, FeaturedCategoriesHomePanel, HomeBottomBanners } from '../_components'

export default function Home() {

        return (
            <>
                <Layout> 
                    <div className="home main">
                        <HomeTopBanner />
                        <br></br>
                        <div className="container"><PopularProductsHomePanel /></div>
                        <br></br>
                        <div className="container"><FeaturedCategoriesHomePanel /></div>
                        <br></br><br></br>
                         <HomeMap />
                        <br></br> 
                        <div className="container"><FeaturedBrandsHomePanel /></div>
                        <br></br>
                        <div className="container"><HomeBottomBanners /></div>
                    </div>
                    {/* <div className="grid">
                        {
                            items.map(({name, slug, address, _id}) =>
                                <Link key={_id} href="dispensaries/[slug]" as={`/dispensaries/${slug}`}>
                                    <a  className="card">
                                        <>
                                            <h3>{name} &rarr;</h3>
                                            <p>{address}</p>
                                        </>
                                    </a>
                                </Link>
                            )
                        }
                    </div> */}
                    
                </Layout>
            </>
    )
}
