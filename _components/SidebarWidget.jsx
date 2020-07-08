import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { categoryService, brandService, strainService } from "../_services"
import { useRouter } from 'next/router'

const SidebarWidget = (props) => {

    const router = useRouter()

    const fireFilter = (link) => {
        console.log(link)
        router.push(link, undefined, { shallow: true })
    }
    // var _thisService=""
    // if(props.model==="category") { _thisService = categoryService; }
    // if(props.model==="brand") { _thisService = brandService; }
    // if(props.model==="strain") { _thisService = strainService; }

    // const itemsInitialState = []
    // const fetchedInitialState = false
    // const [items, setItems] = useState(itemsInitialState)
    // const [fetched, setFetched] = useState(fetchedInitialState)

    // const fetch = () => {
    //     _thisService.buildAll()
    //         .then( res => {
    //             setItems(res)
    //             setFetched(true)
    //         })
    // }

    // useEffect(() => {
    //     fetch()
    // }, [])

    // if(!fetched) return <></>
    return (

        <div className="widget">
            <h3 className="widget-title">
                <a data-toggle="collapse" href={`#widget-body-${(props.model==="brand")?"1":(props.model==="category")?"2":"3"}`} role="button" aria-expanded="true" aria-controls="widget-body-1" className="">{props.model}</a>
            </h3>
            <div className="collapse show" id={`widget-body-${(props.model==="brand")?"1":(props.model==="category")?"2":"3"}`}>
                <div className="widget-body">
                    <ul className="cat-list">
                        <li className={(`${props.url}`===window.location.search||!window.location.search)?"active":""}>
                            <Link href={`${props.url}`} as={props.url}>
                                <a >{
                                    "All"
                                }</a>
                            </Link>
                        </li>
                        <ul className="cat-list">
                        {
                            props.items && props.items.map( item => 
                                <li onClick={() => {fireFilter(`${window.location.pathname}${props.url}&category=${item.category._id}`)}} key={item.category._id} className={(`${props.url}&category=${item.category._id}`==window.location.search)?"active":""} >
                                    {/* <Link href={`${props.url}&category=${item.category._id}`} as={`${props.url}&category=${item.category._id}`}>
                                        <a >{item.category.name+" ("+item.count+")"}</a>
                                    </Link> */}
                                    {item.category.name+" ("+item.count+")"}
                                </li>
                            )
                        }
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { SidebarWidget }

