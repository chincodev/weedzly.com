import Slider from "react-slick";

function HomeTopBanner() {

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 5000
      };

      return(
            <>
                <Slider {...settings}>
                    {/* <div>
                        <img src={"/static/images/banner1.jpg"} />
                    </div> */}
                    <div>
                        <img src={"/static/images/banner2.jpg"} />
                    </div>
                    <div>
                        <img src={"/static/images/banner3.jpg"} />
                    </div>
                </Slider>
                <br></br>
                <br></br>
            </>
      )
};

export { HomeTopBanner }
