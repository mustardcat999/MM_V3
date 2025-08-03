import React from 'react'
import defaultLogo from '/assets/images/MarksmasterLogo.png';

function Footer() {
  return (
    <div>
            <footer className="bg-gradient-dark-gray position-relative">
            <div className="position-absolute left-minus-100px top-25px">
                <img src="images/demo-elearning-bg-05.png" alt="" className="w-80"/>
            </div>
            <div
  className="background-position-center-top h-100 w-100 position-absolute left-0px top-0"
  style={{ backgroundImage: "url('images/vertical-line-bg-small.svg')" }}
></div>
            <div className="container overlap-section">
                <div className="row g-0 justify-content-center align-items-center text-center bg-base-color border-radius-6px ps-5 pe-5 pt-3 pb-3 mb-8 sm-p-25px background-position-left-bottom background-no-repeat contain-background position-relative" style={{backgroundImage: "url('images/demo-elearning-bg-06.png')"}}>
                    <div className="col-lg-auto lg-mb-20px">
                        <h6 className="alt-font fw-600 text-dark-gray m-0 ls-minus-1px d-inline-block me-30px lg-me-0">Contact us now for all your assignment</h6>
                    </div>
                    <div className="col-auto">
                        <a href="Marksmaster-contact.html" className="btn btn-extra-large btn-dark-gray btn-rounded btn-box-shadow btn-switch-text d-inline-block me-20px align-middle xs-m-0">
                            <span>
                                <span className="btn-double-text" data-text="Get started now">Get started now</span>
                                <span><i className="feather icon-feather-thumbs-up"></i></span>
                            </span>
                        </a>
                        <span className="d-block d-sm-inline-block text-dark-gray fs-19 fw-600 left-icon d-inline-block align-middle xs-mt-10px ls-minus-05px"><a href="tel:12345678910"><i className="feather icon-feather-phone-call"></i>+91 XXXXX XXXXX</a></span>
                    </div>
                </div>
            </div>
            <div className="container footer-dark text-center text-sm-start position-relative"> 
                <div className="row mb-5 sm-mb-7 xs-mb-30px">
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column last-paragraph-no-margin md-mb-40px xs-mb-30px">
                        <a href="index.html" className="footer-logo mb-15px margin-adjust-negativeOneREM d-inline-block">
                            <img src={defaultLogo} data-at2x={defaultLogo} alt=""/>
                        </a>
                        <p className="lh-28">We are providing high-quality courses for about ten years.</p>
                        <div className="elements-social social-text-style-01 mt-9 xs-mt-15px">
                            <ul className="small-icon light fw-500">
                                <li><a className="facebook" href="https://www.facebook.com/" target="_blank">Fb.</a></li>
                                <li><a className="instagram" href="http://www.instagram.com" target="_blank">Ig.</a></li> 
                                <li><a className="twitter" href="http://www.twitter.com" target="_blank">Tw.</a></li> 
                                <li><a className="behance" href="http://www.behance.com/" target="_blank">Be.</a></li> 
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 ps-4 last-paragraph-no-margin md-mb-40px xs-mb-30px"> 
                        <span className="fw-500 fs-18 d-block text-white mb-10px">Popular courses</span>
                        <ul>
                            <li><a href="Marksmaster-courses.html">Business finance</a></li>
                            <li><a href="Marksmaster-courses.html">Advanced design</a></li>
                            <li><a href="Marksmaster-courses.html">Web development</a></li>
                            <li><a href="Marksmaster-courses.html">Data visualization</a></li>
                        </ul> 
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 last-paragraph-no-margin xs-mb-30px"> 
                        <span className="fw-500 fs-18 d-block text-white mb-10px">Need help?</span>
                        <span className="lh-26 d-block">Call us directly?</span>
                        <span className="text-white d-block mb-10px"><a href="tel:12345678910">+91 XXXXX XXXXX </a><span className="bg-base-color fw-700 text-dark-gray lh-22 text-uppercase border-radius-30px ps-10px pe-10px fs-11 ms-5px d-inline-block align-middle">Free</span></span>
                        <span className="lh-26 d-block">Need support?</span>
                        <a href="mailto:help@domain.com" className="text-white text-decoration-line-bottom">help@domain.com</a>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-6 text-md-center text-lg-start">
                        <span className="fs-18 fw-500 d-block text-white mb-20px">Request a call now!</span> 
                        <div className="d-inline-block w-100 newsletter-style-02 position-relative mb-15px">
                            <form action="email-templates/subscribe-newsletter.php" method="post" className="position-relative w-100">
                                <input className="input-small bg-dark-gray border-color-transparent-white-light w-100 fs-14 form-control required" type="number" name="email" placeholder="Enter your number"/>
                                <input type="hidden" name="redirect" value=""/>
                                <button type="submit" aria-label="submit" className="btn pe-20px text-white fs-13 fw-500 lg-ps-15px lg-pe-15px submit">Submit <i className="feather icon-feather-arrow-right submit"></i></button>
                                <div className="form-results border-radius-4px pt-5px pb-5px ps-15px pe-15px fs-14 lh-22 mt-10px w-100 text-center position-absolute d-none"></div>
                            </form>
                        </div>
                        <div className="d-flex align-items-center justify-content-center justify-content-md-center justify-content-sm-start justify-content-lg-start fs-14">
                            <div className="d-inline-block"><i className="line-icon-Handshake me-10px align-middle icon-very-medium"></i>Trusted By</div> 
                        </div>
                        <div className="d-flex align-items-center justify-content-between justify-content-md-between justify-content-sm-start justify-content-lg-between gap-2 fs-14">
                            <img className='h-50px' width={70} src="/assets/images/Razorpay.jpeg" alt=""/>
                            <img className='h-50px' width={70} src="/assets/images/UPI.jpeg" alt="" />
                            <img className='h-50px bg-white p-2' width={70} src="/assets/images/remitly-seeklogo.png" alt="" />

                        </div>
                    </div>
                </div> 
                <div className="row align-items-center footer-bottom border-top border-color-transparent-white-light pt-30px g-0">
                    <div className="col-xl-7 ps-0 text-center text-xl-start lg-mb-10px"> 
                        <ul className="footer-navbar fs-16 lh-normal"> 
                            <li className="nav-item active"><a href="index.html" className="nav-link ps-0">Home</a></li>
                            <li className="nav-item"><a href="Marksmaster-about.html" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="Marksmaster-courses.html" className="nav-link">Subjects</a></li>
                            <li className="nav-item"><a href="Marksmaster-testimonial.html" className="nav-link">Testimonial</a></li>
                            <li className="nav-item"><a href="Marksmaster-contact.html" className="nav-link">Contact</a></li>
                        </ul>
                    </div> 

                    <div className="col-xl-5 last-paragraph-no-margin text-center text-xl-end">
                        <p className="fs-16">&copy; Copyrighted by <a href="https://www.marksmaster.com/" target="_blank" className="text-white text-decoration-line-bottom">Marksmaster</a></p>
                    </div>
                </div>
            </div> 
        </footer>
    </div>
  )
}

export default Footer


{/* <div className="d-flex align-items-center justify-content-center justify-content-md-center justify-content-sm-start justify-content-lg-start fs-14">
<div className="d-inline-block me-10px"><img height={60} width={70} src="/assets/images/Razorpay.jpeg" alt=""/></div> 
<div className="d-inline-block"><img height={60} width={70} src="/assets/images/UPI.jpeg" alt="" /></div>

</div> */}