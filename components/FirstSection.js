const FirstSection = () => { 
    return (
        <section className="py-5">
        <div className="container py-4 py-xl-5">
            <div className="row row-cols-1 row-cols-md-2">
            <div className="col"><img className="rounded w-100 h-100 fit-cover" style={{"min-height":"300px"}} src="assets/img/image-17-copyright.jpg" /></div>
            <div className="col d-flex flex-column justify-content-center p-4">
                <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
                <div>
                    <h4 style={{"margin":"0px","margin-bottom":"21px"}}><strong><span style={{"color":"rgb(25, 21, 21)","background-color":"rgb(255, 255, 255)"}}>Skydiving In Va Since 2025!</span></strong></h4>
                    <p style={{"width":"438px","height":"151.969px","font-size":"16px","font-family":"Inter, sans-serif"}}><span style={{"color":"rgb(126, 126, 126)","background-color":"rgb(255, 255, 255)"}}>skyadvis the largest, the most trusted tandem skydiving center. We are the #1 choice for tandem skydiving. We pride ourselves on providing world-class tandem skydiving, training, and sport skydiving to guests from all over the East Coast.</span></p><button className="btn btn-primary" type="button">Contact us</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default FirstSection;