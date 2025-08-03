import React from 'react'

function Second() {
  return (
    <section
      id="down-section"
      className="background-position-left-top background-no-repeat position-relative"
      style={{ backgroundImage: "url('images/demo-elearning-02.png')" }}
    >
      
      <div
        className="position-absolute right-0px top-30px"
        data-bottom-top="transform: translateY(80px)"
        data-top-bottom="transform: translateY(-80px)"
      >
        <img src="images/demo-elearning-04.png" alt="" />
      </div>
      <div className="container">
        <div
          className="text-center position-absolute top-minus-393px left-0px right-0px z-index-1 d-none d-md-inline-block"
          data-anime='{ "opacity": [0, 1], "translate": [0, 0], "staggervalue": 100, "easing": "easeOutQuad" }'
        >
          <a href="#down-section" className="d-block section-link">
            <div className="d-flex justify-content-center align-items-center mx-auto box-shadow-medium-bottom rounded-circle h-70px w-70px text-dark-gray bg-white">
              <i className="bi bi-mouse icon-very-medium lh-0px"></i>
            </div>
          </a>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-5 col-md-10 position-relative md-mb-40px sm-mb-25px"
            data-anime='{ "opacity": [0,1], "duration": 600, "delay":100, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="icon-with-text-style-08 mb-20px">
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon feature-box-icon-rounded w-55px h-55px rounded-circle bg-base-color me-15px">
                  <i className="bi bi-award d-inline-block icon-extra-medium text-dark-gray"></i>
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="d-inline-block alt-font fs-19 fw-500 ls-minus-05px text-dark-gray">
                    Guaranteed and certified
                  </span>
                </div>
              </div>
            </div>
            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mx-auto">
              Online learning wherever and whenever.
            </h2>
            <a
              href="Marksmaster-about.html"
              className="btn btn-large btn-base-color btn-box-shadow btn-rounded btn-switch-text"
            >
              <span>
                <span className="btn-double-text" data-text="Learn more">
                  Learn more
                </span>
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </span>
            </a>
            <div className="d-flex gap-2 mt-4">
              <div className='d-flex flex-column'>
              <img className='h-50px'  width={'87px'} src="/assets/images/justdial.png" alt="" />
              <div className="review-star-icon float-start">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              </div>
              <div className='d-flex flex-column'>
              <img className='h-50px'  width={'87px'} src="/assets/images/teacheron-transparent-small.png" alt="" />
              <div className="review-star-icon float-start">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              </div>
            </div>
            <div className="d-flex align-items-center fw-500 text-dark-gray w-100 position-absolute md-position-relative bottom-0 left-minus-5px md-mt-15px">
              <img height={'47px'} width={'87px'} src="/assets/images/MMName.png" alt="" />
              <span className="d-inline-block position-relative lh-24 padding-left-4">
                Assignment help from{' '}
                <a
                  href="Marksmaster-courses.html"
                  className="fw-600 text-decoration-line-bottom text-dark-gray"
                >
                  experts.
                </a>
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-10 offset-xl-1 position-relative mt-minus-1">
            <div
              className="row row-cols-auto row-cols-sm-2"
              data-anime='{ "el": "childs", "translateX": [30, 0], "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":100, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              {/* Start features box item */}
              <div className="col align-self-start">
                <div className="feature-box text-start ps-30px pe-30px xl-pe-5px sm-pe-0">
                  <div className="feature-box-icon position-absolute left-0px top-0px">
                    <h2 className="alt-font fs-100 fw-700 ls-minus-1px opacity-1 mb-0">
                      01
                    </h2>
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin pt-30 md-pt-21 sm-pt-40px">
                    <span className="text-dark-gray fs-20 d-inline-block fw-600 mb-5px">
                      Right on schedule!
                    </span>
                    <p>
                      Marksmaster allows learners to quickly and more easily
                      complete their training.
                    </p>
                    <span className="w-60px h-3px bg-yellow d-inline-block"></span>
                  </div>
                </div>
              </div>
              {/* End features box item */}
              {/* Start features box item */}
              <div className="col align-self-end mt-25 xs-mt-30px">
                <div className="feature-box text-start ps-30px pe-30px xl-pe-5px sm-pe-0">
                  <div className="feature-box-icon position-absolute left-0px top-0px">
                    <h2 className="alt-font fs-100 fw-700 ls-minus-1px opacity-1 mb-0">
                      02
                    </h2>
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin pt-30 md-pt-21 sm-pt-40px">
                    <span className="text-dark-gray fs-20 d-inline-block fw-600 mb-5px">
                      Pocket friendly
                    </span>
                    <p>
                      Marksmaster allows learners to quickly and more easily
                      complete their training.
                    </p>
                    <span className="w-60px h-3px bg-yellow d-inline-block"></span>
                  </div>
                </div>
              </div>
              {/* End features box item */}
              {/* Start features box item */}
              <div className="col align-self-start mt-minus-12 xs-mt-30px">
                <div className="feature-box text-start ps-30px pe-30px xl-pe-5px sm-pe-0">
                  <div className="feature-box-icon position-absolute left-0px top-0px">
                    <h2 className="alt-font fs-100 fw-700 ls-minus-1px opacity-1 mb-0">
                      03
                    </h2>
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin pt-30 md-pt-21 sm-pt-40px">
                    <span className="text-dark-gray fs-20 d-inline-block fw-600 mb-5px">
                      Expert Instructor
                    </span>
                    <p>
                      Marksmaster allows learners to quickly and more easily
                      complete their training.
                    </p>
                    <span className="w-60px h-3px bg-yellow d-inline-block"></span>
                  </div>
                </div>
              </div>
              {/* End features box item */}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row position-relative mt-40px xs-mt-20px">
            <div className="col swiper swiper-width-auto feather-shadow text-center" data-slider-options='{ "slidesPerView": "3", "spaceBetween":80, "centeredSlides": true, "speed": 30000, "loop": true, "pagination": { "el": ".slider-four-slide-pagination-2", "clickable": false }, "allowTouchMove": false, "autoplay": { "delay":0, "disableOnInteraction": false }, "navigation": { "nextEl": ".slider-four-slide-next-2", "prevEl": ".slider-four-slide-prev-2" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'>
                <div className="swiper-wrapper marquee-slide">
                    {/* start slider item */}
                    <div className="swiper-slide">
                        <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-7"><img className="sliderimage" src="/assets/images/colleges/grammerly.png" alt="" /></div>
                    </div>
                    <div className="swiper-slide">
                        <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-7"><img className="sliderimage" src="/assets/images/colleges/QuillBot-Logo.jpg" alt="" /></div>
                    </div>
                    <div className="swiper-slide">
                        <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-7"><img className="sliderimage" src="/assets/images/colleges/teacherOn.png" alt="" /></div>
                    </div>
                    <div className="swiper-slide">
                        <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-7"><img className="sliderimage" src="/assets/images/colleges/Turnitin_logo_(2021).svg.png" alt="" /></div>
                    </div>
                    {/* end slider item */}
                </div> 
            </div>  
            <div className="col-12 position-absolute top-0 h-100 d-flex justify-content-center align-items-center left-0px z-index-1 text-center">
                <h4 className="alt-font text-dark-gray fs-45 fw-600 ls-minus-2px xs-ls-minus-1px mb-0 mt-40px xs-mt-15px">Plagiarism and AI Free Content</h4>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Second