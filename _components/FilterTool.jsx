import React, { useEffect, useState } from 'react'
import { categoryService } from "../_services/category.service"
import { SidebarWidget } from "./"

function FilterTool(props) {


    return(
        <aside className="sidebar-shop col-lg-2 order-lg-first">
            {console.log(props)}
            <div className="pin-wrapper">
                <div className="sidebar-wrapper sticky-active sticky-absolute" style={{borderBottom: "0px none rgb(118, 127, 132)"}}>
                    { props.brands?<SidebarWidget model={"brand"}/>:""}
                    { props.categories?<SidebarWidget model={"categories"} url={props.url} items={props.categories}/>:""}
                    { props.strains?<SidebarWidget model={"strain"}/>:""}
                </div>
            </div>
        </aside>
    )
}

export { FilterTool }
                    
                   