import React from 'react'

const InstagramBox = () => {
    return (
        <>
            <div className="instagram-box">
                <div className="instagram-follow">
                    <div className="container">
                        <i className="fab fa-instagram"></i>
                        <div className="brand">
                            <h3>Follow Us on Instagram</h3>
                            <p>@portoecommerce</p>
                        </div>
                    </div>
                </div>
                <div className="instagram-carousel owl-carousel owl-theme text-center owl-loaded owl-drag" data-toggle="owl" data-owl-options="{
                    'loop' : true,
                    'nav': false,
                    'dots': false,
                    'margin' : 0,
                    'autoHeight': true,
                    'autoplay': true,
                    'autoplayTimeout': 5000,
                    'responsive': {
                      '0': {
                        'items': 1
                      },
                      '500': {
                        'items': 2
                      },
                      '600': {
                        'items': 3
                      },
                      '950': {
                        'items': 4
                      },
                      '1200': {
                        'items' : 5
                      },
                      '1500': {
                        'items': 6
                      }
                    }
                }" />
                <div className="owl-stage-outer owl-height" style={{height: "155.391px"}}>
                    <div className="owl-stage" style={{transform: "translate3d(-1087px, 0px, 0px)", transition: "all 0.25s ease 0s", width: "2176px"}}>
                        <div className="owl-item cloned" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram3.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item cloned" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram4.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item cloned" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram5.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item cloned" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram6.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram1.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram2.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram3.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item active" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram4.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item active" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram5.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item active" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram6.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item cloned active" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram1.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item cloned" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram2.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item cloned" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram3.jpg" alt="instagram image" />
                        </div>
                        <div className="owl-item cloned" style={{width: "155.402px"}}>
                            <img src="/static/images/instagram/instagram4.jpg" alt="instagram image" />
                        </div>
                    </div>
                </div>
                <div className="owl-nav disabled">
                    <button type="button" role="presentation" className="owl-prev">
                        <i className="icon-left-open-big"></i>
                    </button>
                    <button type="button" role="presentation" className="owl-next">
                        <i className="icon-right-open-big"></i>
                    </button>
                </div>
                <div className="owl-dots disabled">
                </div>
            </div>
        </>
    )}

    export { InstagramBox }
