import React from 'react';

function FooterMiddle () {



    return (
        <div className="footer-middle">
            <div className="container">
                <div className="row row-sm">
                    <div className="col-md-6 col-lg-3">
                        <img style={{maxWidth:"200px"}} src="/static/images/logo-white.png" />
                        {/* <p>GET WEED</p> */}
                        <div className="social-link">
                            <h3 className="link-title">QUESTIONS?</h3>
                            <a href="#">1-888-123-456</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget">
                            <h3 className="widget-title">Account</h3>
                            <div className="widget-content row row-sm">
                                <ul className="col-xl-6">
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="#">Track Your Order</a></li>
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Shipping Guide</a></li>
                                </ul>
                                <ul className="col-xl-6">
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Product Support</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget">
                            <h3 className="widget-title">About</h3>
                            <div className="widget-content row row-sm">
                                <ul className="col-xl-6">
                                    <li><a href="about.html">About Porto</a></li>
                                    <li><a href="#">Our Guarantees</a></li>
                                    <li><a href="#">Terms And Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                                <ul className="col-xl-6">
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">Intellectual Property Claims</a></li>
                                    <li><a href="#">Site Map</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="widget">
                            <h3 className="widget-title">Features</h3>
                            <div className="widget-content">
                                <ul>
                                    <li><a href="#">Powerful Admin Panel</a></li>
                                    <li><a href="#">Mobile &amp; Retina Optimized</a></li>
                                    <li><a href="#">Super Fast Magento Theme</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export { FooterMiddle }