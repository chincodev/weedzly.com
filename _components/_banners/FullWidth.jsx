import React from 'react'

function FullWidth() {
    return (
        <div className="category-banner">
            <div className="container">
                <div className="content-left">
                    <span>EXTRA</span>
                    <h2>20% OFF</h2>
                    <h4 className="cross-txt">BIKES</h4>
                </div>
                <div className="content-center">
                    <img src="assets/images/banners/category_banner.png" />
                </div>
                <div className="content-right">
                    <p>Sumer Sale</p>
                    <button className="btn">Shop All Sale</button>
                </div>
            </div>
        </div>
    )
}