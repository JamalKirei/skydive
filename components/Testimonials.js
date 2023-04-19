const Testimonials = () => { 
    return (
<section className="py-5 mt-5">
  <div className="container py-5">
    <div className="row mb-5">
      <div className="col-md-8 col-xl-6 text-center mx-auto">
        <p className="fw-bold text-success mb-2">Testimonials</p>
        <h2 className="fw-bold"><strong><span style={{"color":"rgb(25, 21, 21)","background-color":"rgb(255, 255, 255)"}}>Comments FromOur Clients</span></strong></h2>
        <p className="text-muted" />
      </div>
    </div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
      <div className="col mb-4">
        <div className="d-flex flex-column align-items-center align-items-sm-start">
          <p className="bg-light border rounded border-light p-4">i came to skyadv centre because i dreamed of solo skydiving</p>
          <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="assets/img/team/avatar2.jpg" />
            <div>
              <p className="fw-bold text-primary mb-0">Client</p>
              <p className="text-muted mb-0">Rabat</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-4">
        <div className="d-flex flex-column align-items-center align-items-sm-start">
          <p className="bg-light border rounded border-light p-4">i have nothing to do with sport and all these extreme activities, but i wanted to understand it.</p>
          <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="assets/img/image-9-copyright-370x240.jpg" />
            <div>
              <p className="fw-bold text-primary mb-0">Client</p>
              <p className="text-muted mb-0">Merakech</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-4">
        <div className="d-flex flex-column align-items-center align-items-sm-start">
          <p className="bg-light border rounded border-light p-4">if you want to get the amazing experience of free flight, sky adv is the place where to go</p>
          <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="assets/img/image-16-copyright-370x240.jpg" />
            <div>
              <p className="fw-bold text-primary mb-0">Client</p>
              <p className="text-muted mb-0">Agadir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Testimonials;