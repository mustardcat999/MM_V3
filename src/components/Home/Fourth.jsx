import React from 'react'
import "./css/homepage.css"

function Fourth() {
  return (
    <section className="overflow-hidden top-bottom">
    <div className="container-fluid">
      <div className="row position-relative mt-40px xs-mt-20px">
        <div
          className="col swiper swiper-width-auto feather-shadow text-center"
          data-slider-options='{ "slidesPerView": "3", "spaceBetween":80, "centeredSlides": true, "speed": 3000, "loop": true, "pagination": { "el": ".slider-four-slide-pagination-2", "clickable": false }, "allowTouchMove": false, "autoplay": { "delay":1, "disableOnInteraction": false }, "navigation": { "nextEl": ".slider-four-slide-next-2", "prevEl": ".slider-four-slide-prev-2" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
        >
          <div className="swiper-wrapper marquee-slide">
            {/* Start slider item */}
            <div className="swiper-slide">
              <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-6">
                <img className="sliderimage" src="/assets/images/colleges/CBU.png" alt="" />
              </div>
            </div>
            {/* End slider item */}
            {/* Start slider item */}
            <div className="swiper-slide">
              <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-6">
                <img className="sliderimage" src="/assets/images/colleges/HBS.jpg" alt="" />
              </div>
            </div>
            {/* End slider item */}
            {/* Start slider item */}
            <div className="swiper-slide">
              <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-6">
                <img className="sliderimage" src="/assets/images/colleges/isb.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-6">
                <img className="sliderimage" src="/assets/images/colleges/images.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-6">
                <img className="sliderimage" src="/assets/images/colleges/UniversityofTexas.png" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-6">
                <img className="sliderimage" src="/assets/images/colleges/uni_logo_leeds.jpg" alt="" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="fs-190 ls-minus-10px pt-10px pb-10px alt-font fw-600 opacity-6">
                <img className="sliderimage" src="/assets/images/colleges/gannon.png" alt="" />
              </div>
            </div>
            {/* End slider item */}
          </div>
        </div>
        <div className="col-12 position-absolute top-0 h-100 d-flex justify-content-center align-items-center left-0px z-index-1 text-center">
          <h4 className="alt-font text-dark-gray fs-45 fw-600 ls-minus-2px xs-ls-minus-1px mb-0 mt-40px xs-mt-15px">
            Affiliated with the Top Universities
          </h4>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Fourth