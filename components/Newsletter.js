const SecondSection = () => { 
    return (
        <section className="py-5">
        <div className="container">
            <div className="border rounded border-white d-flex flex-column justify-content-between align-items-center flex-lg-row bg-primary-gradient p-4 p-lg-5">
            <div className="text-center text-lg-start py-3 py-lg-1">
                <h2 className="fw-bold mb-2">Subscribe to our newsletter</h2>
                <p className="mb-0">leave us your email address and we will send you our latest offers and discounts</p>
            </div>
            <form className="d-flex justify-content-center flex-wrap flex-lg-nowrap" method="post">
                <div className="my-2"><input className="border rounded-pill shadow-sm form-control" type="email" name="email" placeholder="Your Email" /></div>
                <div className="my-2"><button className="btn btn-primary shadow ms-2" type="submit">Subscribe </button></div>
            </form>
            </div>
        </div>
        </section>
    )
}

export default SecondSection;