import React from 'react'
import Link from 'next/link'
import { accountService } from '../_services'

const Header = () => {

    const userInitialValue = false
    const [ user, setUser ] = React.useState(userInitialValue)

    React.useEffect(() => {
        const user = accountService.userValue()
        if (user) {
            setUser(user)
        }
    }, []);



    return (
        <header className="header">
      
            {/* <div className="header-top">
                <div className="container">
                    <div className="header-left header-dropdowns">
                        <div className="header-dropdown">
                            <a href="#">USD</a>
                            <div className="header-menu">
                                <ul>
                                    <li><a href="#">EUR</a></li>
                                    <li><a href="#">USD</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown">
                            <a href="#">ENGLISH</a>
                            <div className="header-menu">
                                <ul>
                                    <li><a href="#">ENGLISH</a></li>
                                    <li><a href="#">FRENCH</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <ul>
                            <li><a href="#">default welcome msg</a></li>
                            <li><a href="my-account.html">my account</a></li>
                            <li><a href="#">daily deal</a></li>
                            <li><a href="#">my wishlist</a></li>
                            <li><a href="blog.html">blog</a></li>
                            <li><a href="contact.html">contact</a></li>
                            <li><a href="login.html">log in</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler" type="button">
                            <i className="icon-menu"></i>
                        </button>
                        <Link href="/">
                            <a className="logo">
                                <img src="/static/images/logo.png" alt="Porto Logo" />
                            </a>
                        </Link>
                       
                        <nav className="main-nav">
                            <ul className="menu">
                                {/* <li>
                                    <Link href="/"><a>Home</a></Link>
                                </li> */}
                                <li>
                                    <Link href="/dispensaries"><a>Dispensaries</a></Link>
                                </li>
                                <li>
                                    <Link href="/brands"><a>Brands</a></Link>
                                </li>
                                <li>
                                    <Link href="/strains"><a>Strains</a></Link>
                                </li>
                                {/* <li>
                                    <a href="category.html">Categories</a>
                                    <div className="megamenu">
                                        <div className="row row-sm">
                                            <div className="col-lg-4">
                                                <a href="#" className="nolink">VARIATION 1</a>
                                                <ul className="submenu">
                                                    <li><a href="category.html">Fullwidth Banner</a></li>
                                                    <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                                                    <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                                                    <li><a href="category.html">Left Sidebar</a></li>
                                                    <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                                    <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                                                    <li><a href="category-horizontal-filter1.html">Horizontal Filter1</a></li>
                                                    <li><a href="category-horizontal-filter2.html">Horizontal Filter2</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" className="nolink">VARIATION 2</a>
                                                <ul className="submenu">
                                                    <li><a href="#">Product List Item Types</a></li>
                                                    <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll</a></li>
                                                    <li><a href="category-3col.html">3 Columns Products</a></li>
                                                    <li><a href="category.html">4 Columns Products</a></li>
                                                    <li><a href="category-5col.html">5 Columns Products</a></li>
                                                    <li><a href="category-6col.html">6 Columns Products</a></li>
                                                    <li><a href="category-7col.html">7 Columns Products</a></li>
                                                    <li><a href="category-8col.html">8 Columns Products</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4 image-container">
                                                <img src="/static/images/menu-banner-2.jpg" align="Menu banner" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="">
                                    <a href="product.html">Products</a>
                                    <div className="megamenu">
                                        <div className="row row-sm">
                                            <div className="col-lg-4">
                                                <a href="#" className="nolink">Variations</a>
                                                <ul className="submenu">
                                                    <li><a href="product.html">Horizontal Thumbnails</a></li>
                                                    <li><a href="product-full-width.html">Vertical Thumbnails</a></li>
                                                    <li><a href="product.html">Inner Zoom</a></li>
                                                    <li><a href="product-addcart-sticky.html">Addtocart Sticky</a></li>
                                                    <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                                                    <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                                                    <li><a href="product-simple.html">Simple Product</a></li>
                                                    <li><a href="product-sidebar-left.html">With Left Sidebar</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" className="nolink">Product Layout Types</a>
                                                <ul className="submenu">
                                                    <li><a href="product.html">Default Layout</a></li>
                                                    <li><a href="product-extended-layout.html">Extended Layout</a></li>
                                                    <li><a href="product-full-width.html">Full Width Layout</a></li>
                                                    <li><a href="product-grid-layout.html">Grid Images Layout</a></li>
                                                    <li><a href="product-sticky-both.html">Sticky Both Side Info</a></li>
                                                    <li><a href="product-sticky-info.html">Sticky Right Side Info</a></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4 image-container">
                                                <img src="/static/images/menu-banner-1.jpg" alt="Menu banner" className="product-promo" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="sf-with-ul">
                                    <a href="#">Pages</a>
                                    <ul>
                                        <li><a href="cart.html">Shopping Cart</a></li>
                                        <li><a href="#">Checkout</a>
                                            <ul>
                                                <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                                <li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
                                                <li><a href="checkout-review.html">Checkout Review</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Dashboard</a>
                                            <ul>
                                                <li><a href="dashboard.html">Dashboard</a></li>
                                                <li><a href="my-account.html">My Account</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="#">Blog</a>
                                            <ul>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="single.html">Blog Post</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="#" className="login-link">Login</a></li>
                                        <li><a href="forgot-password.html">Forgot Password</a></li>
                                    </ul>
                                </li> */}
                                {/* <li><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!</a></li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="header-search">
                            <a href="#" className="search-toggle" role="button"><i className="icon-search-3"></i></a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper">
                                    <input type="search" className="form-control" name="q" id="q" placeholder="I'm searching for..." required="" />
                                    {/* <div className="select-custom">
                                        <select id="cat" name="cat">
                                            <option value="">All Categories</option>
                                            <option value="4">Fashion</option>
                                            <option value="12">- Women</option>
                                            <option value="13">- Men</option>
                                            <option value="66">- Jewellery</option>
                                            <option value="67">- Kids Fashion</option>
                                            <option value="5">Electronics</option>
                                            <option value="21">- Smart TVs</option>
                                            <option value="22">- Cameras</option>
                                            <option value="63">- Games</option>
                                            <option value="7">Home &amp; Garden</option>
                                            <option value="11">Motors</option>
                                            <option value="31">- Cars and Trucks</option>
                                            <option value="32">- Motorcycles &amp; Powersports</option>
                                            <option value="33">- Parts &amp; Accessories</option>
                                            <option value="34">- Boats</option>
                                            <option value="57">- Auto Tools &amp; Supplies</option>
                                        </select>
                                    </div> */}
                                    <button className="btn" type="submit"><i className="icon-search-3"></i></button>
                                </div>
                            </form>
                        </div>
                        {
                            (!user)?(
                                <>
                                    <Link href="/login" as="login">LOGIN</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link  href="/signup" as="signup">SIGN UP</Link>
                                </>
                            ):(
                                <div className="dropdown cart-dropdown">
                                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                        <i className="user-icon"></i>
                                    </a>
                                    <div className="dropdown-menu" >
                                        <div className="dropdownmenu-wrapper">
                                            <h4 className="dropdown-item">
                                                <Link href="/profile/update" as="update">
                                                    <h4>My orders</h4>
                                                </Link>
                                            </h4>
                                            <h4 className="dropdown-item">
                                                <Link href="/profile/update" as="update">
                                                    <h4>Update Profile</h4>
                                                </Link>
                                            </h4>
                                            <div class="dropdown-divider"></div>
                                            <h4 className="dropdown-item">
                                                <a onClick={accountService.logout}>
                                                    <h4>Logout</h4>
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                              
                                </div>
                            )
                        }
                        
                        {/* <div className="dropdown cart-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="minicart-icon"></i>
                                <span className="cart-count">2</span>
                            </a>

                            <div className="dropdown-menu" >
                                <div className="dropdownmenu-wrapper">
                                    <div className="dropdown-cart-header">
                                        <span>2 Items</span>

                                        <a href="cart.html">View Cart</a>
                                    </div>
                                    <div className="dropdown-cart-products">
                                        <div className="product">
                                            <div className="product-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">Woman Ring</a>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>
                                                    x $99.00
                                                </span>
                                            </div>

                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="/static/images/products/cart/product-1.jpg" alt="product" />
                                                </a>
                                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-retweet"></i></a>
                                            </figure>
                                        </div>

                                        <div className="product">
                                            <div className="product-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">Woman Necklace</a>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>
                                                    x $35.00
                                                </span>
                                            </div>

                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="/static/images/products/cart/product-2.jpg" alt="product" />
                                                </a>
                                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-retweet"></i></a>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="dropdown-cart-total">
                                        <span>Total</span>

                                        <span className="cart-total-price">$134.00</span>
                                    </div>

                                    <div className="dropdown-cart-action">
                                        <a href="checkout-shipping.html" className="btn btn-block">Checkout</a>
                                    </div>
                                </div>
                            </div> 
                    </div>  */}
                    </div> 
                </div>
            </div>

            {/* <div className="header-bottom">
                <div className="col-lg-4">
                    <div className="service-widget">
                        <i className="service-icon icon-shipping"></i>
                        <div className="service-content">
                            <h3 className="service-title">free shipping & return</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="service-widget">
                        <i className="service-icon icon-money"></i>
                        <div className="service-content">
                            <h3 className="service-title">money back guarantee</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="service-widget">
                        <i className="service-icon icon-support"></i>
                        <div className="service-content">
                            <h3 className="service-title">online support 24/7</h3>
                        </div>
                    </div>
                </div>
            </div> */}
        </header>
    )
}
export { Header };