import Image from 'next/image'
const SecondSection = () => { 
    return (
        <section className="py-5">
        <div className="container text-center py-5">
            <section className="py-4 py-xl-5" style={{"padding-top":"35px"}}>
            <div className="container">
                <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
                <div className="row g-0">
                    <div className="col-md-6" style={{"padding-top":"0px"}}>
                    <div className="text-white p-4 p-md-5">
                        <h2 className="fw-bold text-white mb-3" style={{"-webkit-text-align":"left","text-align":"left"}}>You Made A First Jump And You Liked It?</h2>
                        <p className="mb-4" style={{"padding":"0px","padding-top":"93px","-webkit-text-align":"left","text-align":"left","font-size":"19px"}}>The solo skydiving training is also known as PFF (Progressive Free Fall), AFF (Accerelated Free Fall) or simply SOLO skydiving training. This learning method makes you discover the world of freefall. If you have successfully completed a tandem skydiving jump or a DAI (Instructor Assisted Deployment) jump, you are eligible for this training program.</p>
                        <div className="my-3" />
                    </div>
                    </div>
                    <div className="col-md-6 order-first order-md-last" style={{"min-height":"250px"}}><Image alt="not here"  className="w-100 h-100 fit-cover" src="assets/img/home1_tabs_bg-copyright.png" /></div>
                </div>
                </div>
            </div>
            </section>
        </div>
        </section>
    )
}

export default SecondSection;