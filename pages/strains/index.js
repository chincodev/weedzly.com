import Link from 'next/link'
import { Layout, Breadcumb, StrainCard, Paginator, InstagramBox } from '../../_components'
import { strainService } from '../../_services/strain.service'
import { withRouter } from 'next/router'
import Router from 'next/router'
import queryString from 'query-string'

export default function Strains(props) {


    const itemsInitialValue = [];
    const [items, setItems] = React.useState(itemsInitialValue)

    const fetchedInitialValue = false;
    const [fetched, setFetched] = React.useState(fetchedInitialValue)

    const pageInfoInitialState = {
        count:'',
        currentPage:'',
        pageSize:15,
        from:'',
        to:''
    }
    const [pageInfo, setPageInfo] = React.useState(pageInfoInitialState)

    const fetchItems = async () => {
        await strainService.getAll(window.location.search||"?size="+pageInfo.pageSize)
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
        Router.replace('/strains'+query)
        setPageInfo({...pageInfo, ...{currentPage:page}});
        await Router.replace('/strains'+query)
        fetchItems();
    }

    React.useEffect(() => {
        fetchItems();
    }, [])
    if(!fetched) return <h1>LOADING..</h1>
    return (
        <Layout>
            <Breadcumb current={"Strains"} />
            <div className="container">
                <div className="row row-sm">
                    <div className="col-lg-12">
                        <div className="row row-sm product-intro divide-line up-effect">
                            {
                                items && items.map(item => 
                                    
                                    <StrainCard key={item._id} strain={item} />
                                )
                            }
                        </div>
                    </div>
                </div>
                <Paginator pageInfo={pageInfo} fetchPage={fetchPage}/>
            </div>
            
        </Layout>
    )
}
