import React from 'react'
import Link from 'next/link'

const BrandCard = (props) => {
    return (
        <div className={props.cardSize}>
            <div style={{padding: "1em", border:"1px solid #f1f1f1"}} className={`product-default inner-quickview inner-icon ${(props.center)?"center-details":""}`}>
                <div className="figure-container" >
                    
                        
                    <Link key={props.item._id} href="brands/[slug]" as={`/brands/${props.item.slug}`}>
                        <a >
                            <div style={{width:"100%", height:"100%", background:`url('${props.item.picture}')`, backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat"}}></div>
                        </a>
                    </Link> 
                    {/* <Link href="products/[slug]" as={`/products/${props.item.slug}`}>
                        <a type="button" style={{cursor:"pointer"}} className="btn-quickview" title="Quick View">Quick View</a>
                    </Link>  */}
                </div>
                <br></br>
                <div className="product-details">
                    <h2 className="product-title">
                        <Link key={props.item._id} href="brands/[slug]" as={`/brands/${props.item.slug}`}>
                           <a>{props.item.name}</a>
                        </Link>
                    </h2>
                    {/* <div className="ratings-container">
                        <div className="product-ratings">
                            <span className="ratings" style={{width:"100%"}}></span>
                            <span className="tooltiptext tooltip-top"></span>
                        </div>
                    </div> */}
                    {/* <div className="price-box">
                        <span className="product-price">$49.00</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export { BrandCard }