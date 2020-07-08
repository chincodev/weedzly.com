import Link from 'next/link'
import { Layout, Breadcumb, ProductCard, Paginator, FilterTool } from '../../_components'
import { BrandCard } from '../../_components/_cards'
import { brandService } from '../../_services/brand.service'
import { withRouter } from 'next/router'
import Router from 'next/router'
import queryString from 'query-string'
import { HomeTop } from '../../_components/_banners'

export default function Products(props) {


    const itemsInitialValue = [];
    const [items, setItems] = React.useState(itemsInitialValue)

    const fetchedInitialValue = false;
    const [fetched, setFetched] = React.useState(fetchedInitialValue)

    const pageInfoInitialState = {
        count:'',
        currentPage:'',
        pageSize:18,
        from:'',
        to:''
    }
    const [pageInfo, setPageInfo] = React.useState(pageInfoInitialState)

    const fetchItems = async () => {
        await brandService.getAll(window.location.search||"?size="+pageInfo.pageSize)
            .then( res => {
                const parsed = queryString.parse(window.location.search);
                setPageInfo({...pageInfo, ...{count:res.totalCount[0].count, currentPage:parseInt(parsed.page,10)||0,from:res.from,to:res.to}})
                setItems(res.totalData);
                setFetched(true);
            })
    }
    const fetchPage = async (page, size) => {
        var query = "?";
        (page) ? (query += `page=${page}&`) : "";
        (size) ? (query += `size=${size}`) : "";
        if(query.length === 1){query="?"}
        Router.replace('/brands'+query)
        setPageInfo({...pageInfo, ...{currentPage:page}});
        await Router.replace('/brands'+query)
        fetchItems();
    }

    React.useEffect(() => {
        fetchItems();
    }, [])

    if(!fetched) return <h1>LOADING..</h1>
    return (
        <Layout>
           
            <Breadcumb
                links={[
                    { label: "Home", link:`/` },
                    { label: "brands", link:`/brands` },
                ]}

            /> 
            <HomeTop />
            <div className="container">
                <h1></h1>
                <div className="row row-sm">
                    <div className="col-12">
                        <div   div className="page-header">
                            <h1>All Brands</h1>
                        </div>
                    </div>
                </div>
                <div className="row row-sm">
                    
                    <div className="col-lg-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sem interdum elit iaculis tempor. Pellentesque nisl arcu, ultrices in euismod ac, sodales ut nibh. Aenean vitae orci ut nisi sollicitudin pharetra eu nec augue. Suspendisse posuere leo velit, nec egestas leo pulvinar a. Duis finibus nulla sit amet diam fringilla, vitae porta ex cursus. Cras luctus diam nibh, in dictum orci euismod at. Maecenas sollicitudin rhoncus commodo. Fusce dapibus interdum leo in cursus. Fusce facilisis egestas velit sed consequat. Praesent tempus dui in quam aliquet, id luctus justo fringilla. Mauris sit amet nunc tortor. Ut nec quam est. Nam nec nisi felis. Integer aliquam quam vel libero gravida, sed suscipit augue posuere. Pellentesque dapibus tristique enim sit amet elementum. Sed a ipsum eget elit aliquam tincidunt.


                    </div>
                    <div className="col-lg-10">
                        
                        <div className="row row-sm offmargin">
                        {
                            items && items.map(item =>  
                                <BrandCard cardSize={"col-6 col-md-3 col-xl-2"} key={item._id} item={item} />
                            )
                        }
                        </div>
                    </div>
                    {/* <div className="col-lg-12">
                        <div className="row row-sm product-intro divide-line up-effect">
                            {
                                items && items.map(item => 
                                    
                                    <StrainCard key={item._id} product={item} />
                                )
                            }
                        </div>
                    </div> */}
                </div>
                <Paginator pageInfo={pageInfo} fetchPage={fetchPage}/>
            </div>
            
        </Layout>
    )
}
