function HomeBottom () {

    return(

   
        <div className="row row-sm mb-5 home-banner4">
            <div className="col-6">
                <div className="row row-sm home-banner4-white">
                    <div className="col-md-4">
                        <span>Sumer Sale</span>
                        <h3>20% OFF</h3>
                    </div>
                    <div className="col-md-4">
                        <div className="banner-image" style={{backgroundImage: "url('/static/images/banners/banner4.jpg');"}}>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button className="btn">shop all sale</button>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row row-sm home-banner4-primary ">
                    <div className="col-md-4">
                        <span>Flash Sale</span>
                        <h3>30% OFF</h3>
                    </div>
                    <div className="col-md-4">
                        <div className="banner-image" style={{backgroundImage: "url('/static/images/banners/banner5.jpg')"}}>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button className="btn">shop all sale</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export { HomeBottom }