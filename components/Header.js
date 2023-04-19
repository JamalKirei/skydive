import Image from 'next/image'
const Header = () => { 
    return (
        <header className="bg-primary-gradient">
            <div className="container pt-4 pt-xl-5">
                <div className="row pt-5">
                <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
                    <div className="text-center">
                    <p className="fw-bold text-success mb-2">Feel the thrill of free Flight</p>
                    <h1 className="fw-bold">Enjoy the unforgettable emotions</h1>
                    </div>
                </div>
                <div className="col-12 col-lg-10 mx-auto">
                    <div className="position-relative" style={{"display":"flex","-webkit-flex-wrap":"wrap","-ms-flex-wrap":"wrap","flex-wrap":"wrap","-webkit-box-pack":"end","-webkit-justify-content":"flex-end","-ms-flex-pack":"end","justify-content":"flex-end"}}>
                    <div style={{"position":"relative","-webkit-flex":"0 0 45%","-ms-flex":"0 0 45%","flex":"0 0 45%","-webkit-transform":"translate3d(-15%, 35%, 0)","-ms-transform":"translate3d(-15%, 35%, 0)","transform":"translate3d(-15%, 35%, 0)"}}><Image alt="not here"  className="img-fluid" data-bss-parallax data-bss-parallax-speed="0.8" src="assets/img/products/about_video_bg-copyright.png" /></div>
                    <div style={{"position":"relative","-webkit-flex":"0 0 45%","-ms-flex":"0 0 45%","flex":"0 0 45%","-webkit-transform":"translate3d(-5%, 20%, 0)","-ms-transform":"translate3d(-5%, 20%, 0)","transform":"translate3d(-5%, 20%, 0)"}}><Image alt="not here"  className="img-fluid" data-bss-parallax data-bss-parallax-speed="0.4" src="assets/img/products/image-25-copyright.jpg" /></div>
                    <div style={{"position":"relative","-webkit-flex":"0 0 60%","-ms-flex":"0 0 60%","flex":"0 0 60%","-webkit-transform":"translate3d(0, 0%, 0)","-ms-transform":"translate3d(0, 0%, 0)","transform":"translate3d(0, 0%, 0)"}}><Image alt="not here"  className="img-fluid" data-bss-parallax data-bss-parallax-speed="0.25" src="assets/img/products/image-28-copyright.jpg" /></div>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header;