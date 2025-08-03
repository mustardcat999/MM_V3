import React from 'react';
import "./css/homepage.css";

function First() {
  return (
    <section className="p-0 overflow-hidden bg-dark-gray full-screen ipad-top-space-margin md-h-auto position-relative md-pb-70px sm-pb-40px cover-background" style={{ backgroundImage: "url('images/gradient.png')" }}>
      <div className="background-position-center-top h-100 w-100 position-absolute left-0px top-0" style={{ backgroundImage: "url('images/vertical-line-bg-small.svg')" }}></div>
      <div id="particles-style-01" className="h-100 position-absolute left-0px top-0 w-100" data-particle="true" data-particle-options='{"particles": {"number": {"value": 6,"density": {"enable": true,"value_area": 2000}},"color": {"value": ["#d5d52b", "#d5d52b", "#d5d52b", "#d5d52b", "#d5d52b"]},"shape": {"type": "circle","stroke":{"width":0,"color":"#000000"}},"opacity": {"value": 1,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}},"size": {"value": 8,"random": true,"anim": {"enable": false,"sync": true}},"line_linked":{"enable":false,"distance":0,"color":"#ffffff","opacity":1,"width":1},"move": {"enable": true,"speed":1,"direction": "right","random": false,"straight": false}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true}},"retina_detect": false}'></div>
      <div className="position-absolute left-minus-80px top-25" data-bottom-top="transform: translateY(-80px)" data-top-bottom="transform: translateY(80px)">
        <img src="images/demo-elearning-01.png" alt="" />
      </div>
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-xl-5 col-lg-6 col-md-12 text-white text-center text-lg-start position-relative z-index-1 d-flex flex-column justify-content-center h-100 md-mt-50px md-mb-20px xs-mb-10px" data-anime='{ "el": "childs", "opacity": [0, 1], "rotateY": [90, 0], "rotateZ": [-10, 0], "translateY": [80, 0], "translateZ": [50, 0], "staggervalue": 200, "duration": 600, "delay": 100, "easing": "easeOutCirc" }'>
            <span className="alt-font fs-75 lh-65 sm-fs-60 fw-500 mb-25px ls-minus-2px">Best online platform for education.</span>
            <div className="mb-30px w-80 md-w-60 sm-w-100 d-block mx-auto mx-lg-0 overflow-hidden">
              <span className="fs-18 fw-300 opacity-5 d-inline-block">Online courses from the world's leading experts. Join 17 million learners today.</span>
            </div>
            <div className="overflow-hidden">
              <a href="Marksmaster-contact.html" className="btn btn-extra-large btn-base-color btn-rounded btn-switch-text fw-600 d-inline-block me-25px sm-me-10px align-middle left-icon">
                <span>
                  <span><i className="feather icon-feather-thumbs-up"></i></span>
                  <span className="btn-double-text ls-minus-05px" data-text="Get started">Get started</span>
                </span>
              </a>
              <a href="https://www.youtube.com/watch?v=cfXHhfNy7tU" className="btn btn-link btn-hover-animation-switch btn-extra-large text-white popup-youtube btn-icon-left">
                <span>
                  <span className="btn-text">How it works</span>
                  <span className="btn-icon"><i className="feather icon-feather-youtube"></i></span>
                  <span className="btn-icon"><i className="feather icon-feather-youtube"></i></span>
                </span>
              </a>
            </div>
            <div className="row row-cols-4 justify-content-center counter-style-04 w-100 md-w-auto position-absolute lg-position-relative bottom-15px lg-bottom-0px lg-mt-50px">
              <div className="col text-center text-lg-start">
                <h5 className="vertical-counter d-inline-flex alt-font text-white fw-600 mb-10px" data-text="+" data-to="26"></h5>
                <div className="divider-style-03 divider-style-03-01 border-2 border-color-base-color mb-5px w-80 xs-w-90 md-mx-auto"></div>
                <span className="fw-300 fs-16 text-white opacity-5">Tutors</span>
              </div>
              <div className="col text-center text-lg-start">
                <h5 className="vertical-counter d-inline-flex alt-font text-white fw-600 mb-10px" data-text="+" data-to="53"></h5>
                <div className="divider-style-03 divider-style-03-01 border-2 border-color-base-color mb-5px w-80 xs-w-90 md-mx-auto"></div>
                <span className="fw-300 fs-16 text-white opacity-5">Students</span>
              </div>
              <div className="col text-center text-lg-start">
                <h5 className="vertical-counter d-inline-flex alt-font text-white fw-600 mb-10px" data-text="+" data-to="28"></h5>
                <div className="divider-style-03 divider-style-03-01 border-2 border-color-base-color mb-5px w-80 xs-w-90 md-mx-auto"></div>
                <span className="fw-300 fs-16 text-white opacity-5">Courses</span>
              </div>
              <div className="col text-center text-lg-start">
                <h5 className="vertical-counter d-inline-flex alt-font text-white fw-600 mb-10px" data-text="+" data-to="20"></h5>
                <div className="divider-style-03 divider-style-03-01 border-2 border-color-base-color mb-5px w-80 xs-w-90 md-mx-auto"></div>
                <span className="fw-300 fs-16 text-white opacity-5">Universities</span>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 pt-30px lg-pt-0">
            <div className="position-relative outside-box-right-10 md-outside-box-right-0">
              <div className="text-center w-100">
                      {/* Google Fonts */}
                      {/* <link
                        href="//fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700"
                        rel="stylesheet"
                        type="text/css"
                      />
                      <link
                        href="//fonts.googleapis.com/css?family=Roboto:100,300,400,700,900"
                        rel="stylesheet"
                        type="text/css"
                      /> */}
                      <div className="distribution-map">
                        <img src="/assets/images/Map.png" alt="Map" />
                        <button className="map-point" style={{ top: "15%", left: "35%" }}>
                          <div className="content">
                            <div className="centered-y">
                              <h2>A Place</h2>
                              <p>
                                You can put plenty of details in here. In the original, I listed
                                contact information and linked phone numbers and email addresses.
                              </p>
                            </div>
                          </div>
                        </button>

                        <button className="map-point" style={{ top: "35%", left: "50%" }}>
                          <div className="content">
                            <div className="centered-y">
                              <h2>Another Place</h2>
                              <p>Lorem ipsum something something</p>
                            </div>
                          </div>
                        </button>

                        <button className="map-point" style={{ top: "76%", left: "82.5%" }}>
                          <div className="content">
                            <div className="centered-y">
                              <h2>Marauder Town</h2>
                              <p>I solemnly swear that I am up to no good</p>
                            </div>
                          </div>
                        </button>

                        <button className="map-point" style={{ top: "45%", left: "16%" }}>
                          <div className="content">
                            <div className="centered-y">
                              <h2>Logan's Mum</h2>
                              <p>I&rsquo;m a marshmallow</p>
                            </div>
                          </div>
                        </button>

                        <button className="map-point" style={{ top: "60%", left: "53%" }}>
                          <div className="content">
                            <div className="centered-y">
                              <h2>Toto</h2>
                              <p>I bless the rains</p>
                            </div>
                          </div>
                        </button>

                        <button className="map-point" style={{ top: "25%", left: "70%" }}>
                          <div className="content">
                            <div className="centered-y">
                              <h2>With Love</h2>
                              <p>&mdash; 007</p>
                            </div>
                          </div>
                        </button>
                      </div>              
                      </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 pt-30px lg-pt-0">
            <div className="position-relative outside-box-right-10 md-outside-box-right-0 atropos" data-atropos>
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner text-center w-100">
                    <div data-atropos-offset="-1" className="position-absolute left-0px right-50px">

                    </div>
                    <img data-atropos-offset="1" className="position-relative z-index-9 animation-float" src="images/demo-elearning-hero-banner-02.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;