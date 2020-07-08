import Slider from "react-slick";

function HomeTop() {

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dotsClass: "slidesDot",
        customPaging: function(i) {
            return (
              <div className="slidesDotNutton"></div>
            );
          }
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
            </>
      )
};

export { HomeTop }
