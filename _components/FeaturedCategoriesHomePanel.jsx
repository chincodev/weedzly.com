import Slider from "react-slick";
import Link from "next/link"

function FeaturedCategoriesHomePanel() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows:false
    };

    return (
        <section className="category-panel">
            {/* <div className="section-title bottom-bordered" style={{display:"flex", justifyContent:"space-between"}}>
                <h2>Most Popular Products</h2>
                <button className="btn custom-black">VIEW ALL</button>
            </div> */}
            <Slider {...settings}>
                <Link key={"topicals"} href="categories/[slug]" as={`/categories/topicals`}>
                    <a className="featured-category" style={{display:"flex !important"}}>
                        <i className="icon-category-saddle font-lg"></i>
                        <span>Topicals</span>
                    </a>
                </Link>
                <Link key={"flower"} href="categories/[slug]" as={`/categories/flower`}>
                    <a className="featured-category" style={{display:"flex !important"}}>
                        <i className="icon-category-pedals font-lg"></i>
                        <span>Flower</span>
                    </a>
                </Link>
                <Link key={"cartridges"} href="categories/[slug]" as={`/categories/cartridges`}>
                    <a className="featured-category" style={{display:"flex !important"}}>
                        <i className="icon-category-frames font-lg"></i>
                        <span>Cartridges</span>
                    </a>
                </Link>
                <Link key={"edibles"} href="categories/[slug]" as={`/categories/edibles`}>
                    <a className="featured-category" style={{display:"flex !important"}}>
                        <i className="icon-category-chains font-lg"></i>
                        <span>Edibles</span>
                    </a>
                </Link>
                <Link key={"cbd"} href="categories/[slug]" as={`/categories/cbd`}>
                    <a className="slider-item">
                        <div className="featured-category" style={{display:"flex !important"}}>
                            <i className="icon-category-tools font-lg"></i>
                            <span>CBD</span>
                        </div>
                    </a>
                </Link>
            </Slider>
            <br></br>
            <br></br>
        </section>
    )
}
export { FeaturedCategoriesHomePanel }