import React from 'react';

function Third() {
  return (
    <section className="bg-gradient-light-gray position-relative">
      <div
        className="position-absolute left-minus-200px top-25"
        data-bottom-top="transform: translateY(-80px)"
        data-top-bottom="transform: translateY(80px)"
      >
        <img src="images/demo-elearning-bg-04.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-xl-5 lg-mb-30px text-center text-xl-start">
            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mb-0">
              Popular Subjects
            </h2>
          </div>
          <div className="col-xl-7 tab-style-04 text-center text-xl-end">
            {/* Filter navigation */}
            <ul className="portfolio-filter fw-500 nav nav-tabs justify-content-center justify-content-xl-end border-0">
              <li className="nav active">
                <a data-filter="*" href="#">
                  All
                </a>
              </li>
              <li className="nav">
                <a data-filter=".development" href="#">
                  Development
                </a>
              </li>
              <li className="nav">
                <a data-filter=".business" href="#">
                  Business
                </a>
              </li>
              <li className="nav">
                <a data-filter=".design" href="#">
                  Design
                </a>
              </li>
              <li className="nav">
                <a data-filter=".marketing" href="#">
                  Marketing
                </a>
              </li>
            </ul>
            {/* End filter navigation */}
          </div>
        </div>
        <div
          className="row"
          data-anime='{ "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <div className="col-12 filter-content p-md-0">
            <ul className="portfolio-wrapper grid-loading grid grid-3col xxl-grid-3col xl-grid-3col lg-grid-2col md-grid-2col sm-grid-1col xs-grid-1col gutter-extra-large">
              <li className="grid-sizer"></li>
              {/* Start portfolio item */}
              <li className="grid-item design transition-inner-all">
                <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                  <div className="image">
                    <a href="Marksmaster-courses-details.html">
                      <img src="https://via.placeholder.com/600x385" alt="" />
                    </a>
                  </div>
                  <div className="bg-white position-relative">
                    <div className="ps-35px pe-35px pt-30px pb-30px xl-ps-25px xl-pe-25px border-bottom border-color-transparent-dark-very-light">
                      <span className="d-block mb-10px">
                        <a
                          href="Marksmaster-courses.html"
                          className="text-dark-gray text-uppercase fs-15 fw-600 services-text"
                        >
                          Design
                        </a>
                        <span className="fs-16">Lorem Ipsum</span>
                      </span>
                      <div className="d-flex align-items-center mb-5px">
                        <a
                          href="Marksmaster-courses-details.html"
                          className="text-dark-gray fw-600 fs-19 md-fs-18 lh-28 w-90"
                        >
                          Business accounting and taxation fundamental
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="d-inline-block me-auto">
                          <div className="review-star-icon float-start">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="fs-15 float-start ms-5px position-relative top-2px">
                            (20 Reviews)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End portfolio item */}
              {/* Start portfolio item */}
              <li className="grid-item business marketing transition-inner-all">
                <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                  <div className="image">
                    <a href="Marksmaster-courses-details.html">
                      <img src="https://via.placeholder.com/600x385" alt="" />
                    </a>
                  </div>
                  <div className="bg-white position-relative">
                    <div className="ps-35px pe-35px pt-30px pb-30px xl-ps-25px xl-pe-25px border-bottom border-color-transparent-dark-very-light">
                      <span className="d-block mb-10px">
                        <a
                          href="Marksmaster-courses.html"
                          className="text-dark-gray text-uppercase fs-15 fw-600 services-text"
                        >
                          Finance
                        </a>
                        <span className="fs-16">Lorem Ipsum</span>
                      </span>
                      <div className="d-flex align-items-center mb-5px">
                        <a
                          href="Marksmaster-courses-details.html"
                          className="text-dark-gray fw-600 fs-19 md-fs-18 lh-28 w-90"
                        >
                          Finance fundamentals of management and planning
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="d-inline-block me-auto">
                          <div className="review-star-icon float-start">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="fs-15 float-start ms-5px position-relative top-2px">
                            (39 Reviews)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End portfolio item */}
              {/* Start portfolio item */}
              <li className="grid-item development marketing transition-inner-all">
                <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                  <div className="image">
                    <a href="Marksmaster-courses-details.html">
                      <img src="https://via.placeholder.com/600x385" alt="" />
                    </a>
                  </div>
                  <div className="bg-white position-relative">
                    <div className="ps-35px pe-35px pt-30px pb-30px xl-ps-25px xl-pe-25px border-bottom border-color-transparent-dark-very-light">
                      <span className="d-block mb-10px">
                        <a
                          href="Marksmaster-courses.html"
                          className="text-dark-gray text-uppercase fs-15 fw-600 services-text"
                        >
                          Design
                        </a>
                        <span className="fs-16">Lorem Ipsum</span>
                      </span>
                      <div className="d-flex align-items-center mb-5px">
                        <a
                          href="Marksmaster-courses-details.html"
                          className="text-dark-gray fw-600 fs-19 md-fs-18 lh-28 w-90"
                        >
                          Introduction to application design and development
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="d-inline-block me-auto">
                          <div className="review-star-icon float-start">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="fs-15 float-start ms-5px position-relative top-2px">
                            (55 Reviews)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End portfolio item */}
              {/* Start portfolio item */}
              <li className="grid-item business design transition-inner-all">
                <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                  <div className="image">
                    <a href="Marksmaster-courses-details.html">
                      <img src="https://via.placeholder.com/600x385" alt="" />
                    </a>
                  </div>
                  <div className="bg-white position-relative">
                    <div className="ps-35px pe-35px pt-30px pb-30px xl-ps-25px xl-pe-25px border-bottom border-color-transparent-dark-very-light">
                      <span className="d-block mb-10px">
                        <a
                          href="Marksmaster-courses.html"
                          className="text-dark-gray text-uppercase fs-15 fw-600 services-text"
                        >
                          Medicine
                        </a>
                        <span className="fs-16">Lorem Ipsum</span>
                      </span>
                      <div className="d-flex align-items-center mb-5px">
                        <a
                          href="Marksmaster-courses-details.html"
                          className="text-dark-gray fw-600 fs-19 md-fs-18 lh-28 w-90"
                        >
                          Genetic testing and sequencing technique
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="d-inline-block me-auto">
                          <div className="review-star-icon float-start">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="fs-15 float-start ms-5px position-relative top-2px">
                            (42 Reviews)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End portfolio item */}
              {/* Start portfolio item */}
              <li className="grid-item development design transition-inner-all">
                <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                  <div className="image">
                    <a href="Marksmaster-courses-details.html">
                      <img src="https://via.placeholder.com/600x385" alt="" />
                    </a>
                  </div>
                  <div className="bg-white position-relative">
                    <div className="ps-35px pe-35px pt-30px pb-30px xl-ps-25px xl-pe-25px border-bottom border-color-transparent-dark-very-light">
                      <span className="d-block mb-10px">
                        <a
                          href="Marksmaster-courses.html"
                          className="text-dark-gray text-uppercase fs-15 fw-600 services-text"
                        >
                          Design
                        </a>
                        <span className="fs-16">Lorem Ipsum</span>
                      </span>
                      <div className="d-flex align-items-center mb-5px">
                        <a
                          href="Marksmaster-courses-details.html"
                          className="text-dark-gray fw-600 fs-19 md-fs-18 lh-28 w-90"
                        >
                          Introduction to web design and visualization
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="d-inline-block me-auto">
                          <div className="review-star-icon float-start">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="fs-15 float-start ms-5px position-relative top-2px">
                            (56 Reviews)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End portfolio item */}
              {/* Start portfolio item */}
              <li className="grid-item development business marketing transition-inner-all">
                <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                  <div className="image">
                    <a href="Marksmaster-courses-details.html">
                      <img src="https://via.placeholder.com/600x385" alt="" />
                    </a>
                  </div>
                  <div className="bg-white position-relative">
                    <div className="ps-35px pe-35px pt-30px pb-30px xl-ps-25px xl-pe-25px border-bottom border-color-transparent-dark-very-light">
                      <span className="d-block mb-10px">
                        <a
                          href="Marksmaster-courses.html"
                          className="text-dark-gray text-uppercase fs-15 fw-600 services-text"
                        >
                          Business
                        </a>
                        <span className="fs-16">Lorem Ipsum</span>
                      </span>
                      <div className="d-flex align-items-center mb-5px">
                        <a
                          href="Marksmaster-courses-details.html"
                          className="text-dark-gray fw-600 fs-19 md-fs-18 lh-28 w-90"
                        >
                          Improve your english vocabulary and language
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="d-inline-block me-auto">
                          <div className="review-star-icon float-start">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                          <div className="fs-15 float-start ms-5px position-relative top-2px">
                            (76 Reviews)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End portfolio item */}
            </ul>
          </div>
        </div>
        <div
          className="row justify-content-center"
          data-anime='{ "opacity": [0, 1], "translate": [0, 0], "staggervalue": 100, "easing": "easeOutQuad" }'
        >
          <div className="col-12 text-center mt-5">
            <span className="fs-20 text-dark-gray fw-500 ls-minus-05px">
              We help you find the perfect tutor. It's completely free.{' '}
              <a href="Marksmaster-courses.html" className="fw-600 text-dark-gray">
                Explore all courses
                <i className="fa-solid fa-arrow-right ms-5px icon-very-small"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Third;