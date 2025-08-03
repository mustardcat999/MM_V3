import React from 'react'

function Fifth() {
  return (
    <section className="position-relative bg-gradient-dark-gray overflow-hidden">
    <div
      className="position-absolute left-minus-100px top-40px"
      data-bottom-top="transform: translateY(-80px)"
      data-top-bottom="transform: translateY(80px)"
    >
      <img src="images/demo-elearning-bg-05.png" alt="" />
    </div>
    <div
      className="background-position-center-top h-100 w-100 position-absolute left-0px top-0"
      style={{ backgroundImage: "url('images/vertical-line-bg-small.svg')" }}
    ></div>
    <div
      className="background-position-center-top h-8px w-100 position-absolute left-0px bottom-0"
      style={{ backgroundImage: "url('images/demo-elearning-border.jpg')" }}
    ></div>
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        data-anime='{"el": "childs", "opacity": [0, 1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad"}'
      >
        <div className="col-lg-5 position-relative md-mb-50px sm-mb-25px">
          <div className="icon-with-text-style-08 mb-20px">
            <div className="feature-box feature-box-left-icon-middle">
              <div className="feature-box-icon feature-box-icon-rounded w-55px h-55px rounded-circle bg-yellow me-15px">
                <i className="bi bi-chat-quote d-inline-block icon-extra-medium text-dark-gray"></i>
              </div>
              <div className="feature-box-content last-paragraph-no-margin">
                <span className="d-inline-block alt-font fs-19 ls-minus-05px text-white">Students feedback</span>
              </div>
            </div>
          </div>
          <h2 className="alt-font text-white fw-600 ls-minus-3px w-85 lg-w-100">Trusted by genius people.</h2>
          <p className="w-80 lg-w-100 text-white opacity-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis dictum nec.
          </p>
          <div className="d-flex align-items-center">
            <div className="col-auto text-center border-end border-color-transparent-white-very-light border-1 me-25px pe-25px">
              <h2 className="alt-font lh-44 fw-600 text-white mb-0">99%</h2>
            </div>
            <div className="col">
              <span className="d-block w-55 lh-26 text-white xl-w-60 lg-w-100">
                Student's complete course successfully.
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-7 position-relative testimonials-style-12">
          <div
            className="swiper magic-cursor"
            data-slider-options='{"slidesPerView": 1, "spaceBetween": 50, "loop": true, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 1 }, "768": { "slidesPerView": 1 }, "320": { "slidesPerView": 1 }, "effect": "slide" }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav", "effect": "fade" } }'
          >
            <div className="swiper-wrapper pt-20px pb-20px">
              {["Charlotte Smith", "Herman Miller", "Matthew Taylor"].map((name, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="row g-0 border-radius-6px overflow-hidden">
                    <div className="col-sm-5 services-box-img xs-h-350px">
                      <div
                        className="h-100 cover-background"
                        style={{ backgroundImage: "url(https://via.placeholder.com/305x380)" }}
                      ></div>
                    </div>
                    <div className="col-sm-7 testimonials-box bg-white p-9 sm-p-7 box-shadow-extra-large">
                      <div className="d-inline-block bg-orange text-white border-radius-50px ps-20px pe-20px fs-15 lh-34 sm-lh-30 ls-minus-1px mb-25px align-middle">
                        {[...Array(5)].map((_, i) => (
                          <i className="bi bi-star-fill" key={i}></i>
                        ))}
                      </div>
                      <div className="testimonials-box-content">
                        <p className="mb-20px">
                          Course materials were good, the mentoring approach was good and working with other people via the internet was good.
                        </p>
                        <div className="fs-18 lh-20 fw-600 text-dark-gray">{name}</div>
                        <span className="fs-16 lh-20">Business owner</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-button-next-nav border-radius-100px swiper-button-next bg-white box-shadow-small">
            <i className="feather icon-feather-chevron-right icon-extra-medium"></i>
          </div>
          <div className="swiper-button-previous-nav border-radius-100px swiper-button-prev bg-white box-shadow-small">
            <i className="feather icon-feather-chevron-left icon-extra-medium"></i>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  )
}

export default Fifth