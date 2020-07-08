import React from 'react'
import Link from 'next/link'

const StrainCard = (props) => {
    return (
        <div className="col-6 col-md-4 col-xl-3">
            <div className="product-default inner-quickview inner-icon">
                <figure>
                    <Link key={props.strain._id}  href="strains/[slug]" as={`/strains/${props.strain.slug}`}>
                        <a href="product.html">
                            <img src="/static/images/products/grey/product-1.jpg" /> 
                        </a>
                    </Link>
                    <Link key={props.strain._id}  href="strains/[slug]" as={`/strains/${props.strain.slug}`}>
                        <a type="button" style={{cursor:"pointer"}} className="btn-quickview" title="Quick View">Quick View</a>
                    </Link>
                </figure>
                <div className="product-details">
                    <h2 className="product-title" style={{textAlign:"center"}}>
                        <Link key={props.strain._id}  href="strains/[slug]" as={`/strains/${props.strain.slug}`}>
                           <a>{props.strain.name}</a>
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export { StrainCard }