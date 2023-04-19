import Image from 'next/image'
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer'


export default function Experiences() {
  return (
    <>
      <Navbar />
      <section className="py-5">
        <div className="container py-5">
            <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2 className="fw-bold">Jumper experiences</h2>
                <p className="text-muted">first time jumpers talking about the unique experiences they had</p>
            </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{"max-width":"900px"}}>
            <div className="col mb-4">
                <div><a href="#"><img className="rounded img-fluid shadow w-100 fit-cover" src="assets/img/image-9-copyright-370x240.jpg" style={{"height":"250px"}} /></a>
                <div className="py-4"><span className="badge bg-primary mb-2">Mark more</span>
                    <h4 className="fw-bold">Reliable and Highly Efficient Dropzone</h4>
                    <p className="text-muted">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div><a href="#"><img className="rounded img-fluid shadow w-100 fit-cover" src="assets/img/image-16-copyright-370x240.jpg" style={{"height":"250px"}} /></a>
                <div className="py-4"><span className="badge bg-primary mb-2">utchiha madara</span>
                    <h4 className="fw-bold">Reliable and Highly Efficient Dropzone</h4>
                    <p className="text-muted">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div><a href="#"><img className="rounded img-fluid shadow w-100 fit-cover" src="assets/img/image-9-copyright-370x240.jpg" style={{"height":"250px"}} /></a>
                <div className="py-4"><span className="badge bg-primary mb-2">johan liebert</span>
                    <h4 className="fw-bold">Reliable and Highly Efficient Dropzone</h4>
                    <p className="text-muted">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div><a href="#"><img className="rounded img-fluid shadow w-100 fit-cover" src="assets/img/image-16-copyright-370x240.jpg" style={{"height":"250px"}} /></a>
                <div className="py-4"><span className="badge bg-primary mb-2">Anna liebert</span>
                    <h4 className="fw-bold">Reliable and Highly Efficient Dropzone</h4>
                    <p className="text-muted">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      <Footer />
    </>
  )
}
