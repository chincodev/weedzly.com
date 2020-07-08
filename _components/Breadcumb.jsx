import React from 'react'
import Link from 'next/link'

const Breadcumb = (props) => {
    return (
        
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <div className="container">
                <ol className="breadcrumb">
                    {
                        props.links && props.links.map( (link, i) => 
                            <li key={i} className="breadcrumb-item">
                                <Link href={link.link} >
                                    <a>{link.label}</a>
                                </Link>
                            </li>
                        )
                    }
                </ol>
            </div>
        </nav>
    )
}

export { Breadcumb }