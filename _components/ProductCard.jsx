import React from 'react'
import Link from 'next/link'

const ProductCard = (props) => {
    return (
        <div className={props.cardSize}>
            <div style={{border: "1px solid rgb(241, 241, 241)"}} className={`product-default inner-quickview inner-icon ${(props.center)?"center-details":""}`}>
                <div className="figure-container" >
                    <Link  key={props.item._id} href="[slug]" as={`${props.item.slug}`}>
                        <a>
                            <div style={{width:"100%", height:"100%", background:`url('${props.item.picture}') no-repeat center`, backgroundSize: "cover"}}></div>
                        </a>
                    </Link> 
                    {/* <Link href="products/[slug]" as={`/products/${props.item.slug}`}>
                        <a type="button" style={{cursor:"pointer"}} className="btn-quickview" title="Quick View">Quick View</a>
                    </Link>  */}
                </div>
                <div style={{padding:"1em"}} className="product-details">
                    <div className="category-wrap">
                        <div className="category-list">
                            <a href="category.html" className="product-category">category</a>
                        </div>
                        {/* <a href="#" className="btn-icon-wish"><i className="icon-heart"></i></a> */}
                    </div>
                    <h2 className="product-title">
                    {console.log(props)}
                        <Link key={props.item._id} href="brands/[brand]/products/[slug]" as={`brands/${props.item.brand.slug}/products/${props.item.slug}`}>
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

export { ProductCard }