import React from 'react'
import ReactPaginate from 'react-paginate';

const Paginator = (props) => {

    const handlePageClick = (data) => {
        let selected = data.selected
        props.fetchPage(selected,props.pageInfo.pageSize)
    }

    return (
        <nav className="toolbox toolbox-pagination">
            
            <div className="toolbox-item toolbox-show">
            <label>{`Showing  
                ${
                    (props.pageInfo.from===0)?1:props.pageInfo.from
                }
                –
                ${
                    (props.pageInfo.count)<(props.pageInfo.from + props.pageInfo.pageSize)  ? props.pageInfo.count : (props.pageInfo.from + props.pageInfo.pageSize) 
                } 
                 of ${props.pageInfo.count} results`}
            </label> 
            </div> 
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={props.pageInfo.count/props.pageInfo.pageSize}
                marginPagesDisplayed={2}
                forcePage={props.pageInfo.currentPage}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                disabledClassName={'disabled'}
            />
        </nav>
    )
}

export { Paginator }

