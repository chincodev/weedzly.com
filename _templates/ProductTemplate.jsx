import { Layout } from '../_components/Layout'
import React, { useEffect } from 'react'
import {Breadcumb} from '../_components/'
import { productOrderService, productService } from '../_services'
import Slider from "react-slick";
import { toast, ToastContainer } from 'react-toastify';

function ProductTemplate(props){
    const scopedPictureInitialState = props.item.picture[0];
    const retailersInitialState = []
    const [scopedPicture, setScopedPicture] = React.useState(scopedPictureInitialState)
    const [ retailers, setRetailers ] = React.useState(retailersInitialState)
    const [ scopedRetailer, setScopedRetailer ] = React.useState({})
    const [ scopedPackage, setScopedPackage ] = React.useState(false)
    const [ amount, setAmount ] = React.useState(1)

    const getRetailersInfo = () => {
        
        productService.getRetailers(props.item._id).then(x => {
            setRetailers(x);
            if(x.length>0){
                setScopedRetailer(x[0])
            }
        })
    }


    const placeOrder = () => {
        const payload = {

            _package : scopedPackage._id,
            quantity : amount
        }
        productOrderService.create(payload)
            .then(res => {
                toast.success("Order placed under number: "+res.payload.number,  {
                    position: "top-center",
                    autoClose: true,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: true,
                    
                });
            })
            .catch(error => {
                toast.error(error, {
                    position: "top-center",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }

    const scopeRetailer = (item) =>{
        setScopedPackage(false)
        setScopedRetailer(item)
    }


    useEffect(() => {
        getRetailersInfo();
    }, [])

    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={props.item.picture[0]} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      

    return(
        <>
            <Layout>

            <Breadcumb
                links={[
                    { label: "Home", link:`/` },
                    { label: "brands", link:`/brands` },
                    { label: props.item.brand.name, link:`/brands/${props.item.brand.slug}/products` },
                    { label: props.item.name, link:`/brands/${props.item.brand.slug}/products/${props.item.slug}` },
                ]}
            /> 
            <div className="container">
                <div className="row row-sm">
                    <div className="col-lg-12 col-xl-12">
                        <div className="product-single-container product-single-default">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 product-single-gallery">
                                    {/* <img src={scopedPicture}></img>
                                    <div className="prod-thumbnail row owl-dots" id="carousel-custom-dots"></div> */}
                                    <Slider {...settings}>
                                        {
                                            props.item.picture && props.item.picture.map( (picture, index) => 
                                                <div key={index}>
                                                    <img src={picture} />
                                                </div>
                                            )
                                        }
                                    </Slider>
                                </div>

                                <div className="col-lg-8 col-md-6">
                                    <div className="product-single-details">
                                        <p className="category-name">{props.item.category.name} | {props.item.brand.name}</p>
                                        <h1 className="product-title">{props.item.name}</h1>
                                        {/* <h4 >by {props.item.brand.name}</h4> */}
                                        {/* <br></br> */}
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{width:"100%"}}></span>
                                            </div>

                                            <a href="#" className="rating-link">( 6 Reviews )</a>
                                        </div>

                                        <div className="retailers-box">
                                            <ul>
                                                {
                                                    retailers.map( x => 
                                                        <li className={`${(scopedRetailer._id === x._id)?"active":""}`} onClick={()=>{scopeRetailer(x)}}>
                                                            <p className="retailersList">
                                                                <strong>Pick up</strong> at 
                                                                <span style={{color:"#ae47d0"}}><strong>{" "+x.dispensary.name}</strong></span>
                                                            </p>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>

                                        <div className="price-box">
                                            <span className="product-price"></span>
                                        </div>

                                        {/* <div className="product-desc">
                                            <p> <a href="#">(read more)</a></p>
                                        </div> */}

                                        <div className="product-filters-container">
                                            <div className="product-single-filter">
                                                <label>Available weights:</label><p></p>
                                                <ul className="config-size-list">
                                                {
                                                       scopedRetailer.packages && scopedRetailer.packages.map( (x, i) => 
                                                       
                                                           <li key={i} onClick={()=>{setScopedPackage(x);setAmount(1)}} className={(scopedPackage._id===x._id)?("active"):""}><a href="#">{(x.type=="each"?"Each":x.value+""+x.type)}</a></li>
                                                       )
                                                }
                                                </ul>
                                            </div>
                                        </div>
         
                                        
                                            {
                                                scopedPackage ? (<>
                                                    <label><strong>Amount</strong></label>

                                                    <div className="product-action product-all-icons">
                                                    <div style={{marginRight:"1em"}} class="input-group  bootstrap-touchspin bootstrap-touchspin-injected"><input readOnly class="vertical-quantity form-control" type="number" value={amount}/><span class="input-group-btn-vertical"><button onClick={()=>{setAmount(amount+1)}}  class="btn btn-outline bootstrap-touchspin-up icon-up-dir" type="button"></button><button onClick={(amount>1)?()=>{setAmount(amount-1)}:""}  class="btn btn-outline bootstrap-touchspin-down icon-down-dir" type="button"></button></span></div>
                                                    <button type="button"  onClick={()=>{placeOrder()}} className="paction add-cart" title="Add to Cart">Place order</button>
                                                    </div>
                                                </>):""
                                            }
                                            
                                            
                                        

                                        {/* <div className="product-single-share">
                                            <label>Share:</label>
                                            
                                            <div className="addthis_inline_share_toolbox"></div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-single-tabs">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active show" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">Description</a>
                                </li>
                             
                                <li className="nav-item">
                                    <a className="nav-link" id="product-tab-reviews" data-toggle="tab" href="#product-reviews-content" role="tab" aria-controls="product-reviews-content" aria-selected="false">Reviews</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                                    <div className="product-desc-content">
                                        <p>{props.item.description}</p>
                                    </div>
                                </div>

                                

                                <div className="tab-pane fade" id="product-reviews-content" role="tabpanel" aria-labelledby="product-tab-reviews">
                                    <div className="product-reviews-content">
                                        <div className="collateral-box">
                                            <ul>
                                                <li>Be the first to review this product</li>
                                            </ul>
                                        </div>

                                        <div className="add-product-review">
                                            <h3 className="text-uppercase heading-text-color font-weight-semibold">WRITE YOUR OWN REVIEW</h3>
                                            <p>How do you rate this product? *</p>

                                            <form action="#">

                                                <div className="form-group">
                                                    <label>Nickname <span className="required">*</span></label>
                                                    <input type="text" className="form-control form-control-sm" required="" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Summary of Your Review <span className="required">*</span></label>
                                                    <input type="text" className="form-control form-control-sm" required="" />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label>Review <span className="required">*</span></label>
                                                    <textarea cols="5" rows="6" className="form-control form-control-sm"></textarea>
                                                </div>

                                                <input type="submit" className="btn btn-primary" value="Submit Review" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-overlay"></div>
                    <div className="sidebar-toggle"><i className="icon-right-open"></i></div>
                </div>
            </div>
            </Layout>
        </>
    )
}
export { ProductTemplate }