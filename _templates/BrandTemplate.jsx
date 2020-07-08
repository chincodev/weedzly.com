import React, { useEffect } from 'react'
import { Layout, Breadcumb, FilterTool } from '../_components'
import { ProductCard } from '../_components/_cards' 
import { productService } from '../_services/product.service'
import { Breadcrumbs, BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

function BrandTemplate(props) {

    const itemsInitialValue = [];
    const [items, setItems] = React.useState(itemsInitialValue)

    const categoriesInitialValue = [];
    const [categories, setCategories] = React.useState(categoriesInitialValue)

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

    function fetch() {
        productService.getAll(window.location.search||"?size="+pageInfo.pageSize+"&brand="+props.item._id)
            .then( res => {
                setItems(res.payload.totalData);
                setCategories(res.payload2);
                setFetched(true)
            } )
    }

    useEffect(() => {
        fetch()
    }, [])

    if(!fetched) return <h1>loading</h1>
    return (
        <Layout>
            <Breadcumb
                links={[
                    { label: "Home", link:`/` },
                    { label: "brands", link:`/brands` },
                    { label: props.item.name, link:`/brands/${props.item.slug}/products` },
                ]}

            /> 
            
            <div className="product-single-row brand-template-header">
                <div className="single-row-entire" style={{backgroundImage: `url('${props.item.picture}')`}}></div>
                <div className="blur">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-md-6 col-xl-5">
                                <h5></h5>
                                <h1>{props.item.name}</h1>
                                <p>{(props.item.description!==props.item.name)?props.item.description:""}</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className="container">
                <div className="product-single-tabs">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="brand-tab-products" data-toggle="tab" href="#brand-products-content" role="tab" aria-controls="brand-products-content" aria-selected="true">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="product-tab-retailers" data-toggle="tab" href="#brand-retailers-content" role="tab" aria-controls="brand-products-content" aria-selected="false">Tags</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="brand-products-content" role="tabpanel" aria-labelledby="brand-tab-products">
                            <div className="row row-sm">
                                <FilterTool categories={categories} url={"?size="+pageInfo.pageSize+"&brand="+props.item._id} />
                                <div className="col-lg-10">
                                    <div className="row row-sm">
                                    {
                                        items && items.map(item =>
                                            <ProductCard cardSize={"col-6 col-md-4 col-xl-3"} key={item._id} item={item} />
                                        )
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="brand-retailers-content" role="tabpanel" aria-labelledby="brand-tab-retailers">
                            <h1>asd2</h1>
                        </div>
                    </div>
                </div>
            </div>
       </Layout>
    )
}
export { BrandTemplate }