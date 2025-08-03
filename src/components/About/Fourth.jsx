import React from 'react'

function Fourth() {
  return (
    <section className="overlap-height">
    <div className="container overlap-gap-section">
        <div className="row justify-content-center align-items-center mb-3 text-center">
            <div className="col-12" data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px">Great achievements</h2>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center g-0 mb-5 xs-mb-40px" data-anime='{ "translateY": [30, 0], "perspective": [1200,1200], "scale": [1.1, 1], "rotateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
            {/* start features box item */}
            <div className="col icon-with-text-style-07">
                <div className="hover-box dark-hover will-change-inherit feature-box p-25 xl-p-17 md-p-19 overflow-hidden border-top border-start border-bottom xs-border-end xs-border-bottom-0 border-color-extra-medium-gray">
                    <div className="feature-box-icon">
                        <span className="alt-font fw-600 fs-17 text-uppercase text-dark-gray position-absolute right-25px top-20px lg-right-15px lg-top-10px">2017</span>
                        <i className="fa-brands fa-google icon-double-large text-dark-gray mb-20px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-18 lh-24 text-dark-gray fw-500 d-block">Best teaching of the year</span>
                    </div>
                    <div className="feature-box-overlay bg-dark-gray"></div>
                </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-07">
                <div className="hover-box dark-hover will-change-inherit feature-box p-25 xl-p-17 md-p-19 overflow-hidden border-top md-border-end border-start border-bottom border-color-extra-medium-gray">
                    <div className="feature-box-icon">
                        <span className="alt-font fw-600 fs-17 text-uppercase text-dark-gray position-absolute right-25px top-20px lg-right-15px lg-top-10px">2019</span>
                        <i className="fa-brands fa-google-play icon-double-large text-dark-gray mb-20px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-18 lh-24 text-dark-gray fw-500 d-block">Downloaded app on play store</span>
                    </div>
                    <div className="feature-box-overlay bg-dark-gray"></div>
                </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-07">
                <div className="hover-box dark-hover will-change-inherit feature-box p-25 xl-p-17 md-p-19 overflow-hidden border-top border-start border-bottom md-border-top-0 xs-border-end border-color-extra-medium-gray">
                    <div className="feature-box-icon">
                        <span className="alt-font fw-600 fs-17 text-uppercase text-dark-gray position-absolute right-25px top-20px lg-right-15px lg-top-10px">2020</span>
                        <i className="fa-brands fa-microblog icon-double-large text-dark-gray mb-20px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-18 lh-24 text-dark-gray fw-500 d-block">Achievements of instructors</span>
                    </div>
                    <div className="feature-box-overlay bg-dark-gray"></div>
                </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-07">
                <div className="hover-box dark-hover will-change-inherit feature-box p-25 xl-p-17 md-p-19 overflow-hidden border border-color-extra-medium-gray md-border-top-0">
                    <div className="feature-box-icon">
                        <span className="alt-font fw-600 fs-17 text-uppercase text-dark-gray position-absolute right-25px top-20px lg-right-15px lg-top-10px">2021</span>
                        <i className="fa-brands fa-youtube icon-double-large text-dark-gray mb-20px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-18 lh-24 text-dark-gray fw-500 d-block">1 million views on youtube</span>
                    </div>
                    <div className="feature-box-overlay bg-dark-gray"></div>
                </div>
            </div>
            {/* end features box item */}
        </div>
        <div className="row justify-content-center">
            {/* start features box item */}
            <div className="col-auto icon-with-text-style-08 md-mb-10px pe-25px md-pe-15px" data-anime='{ "translateX": [-50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <div className="feature-box feature-box-left-icon-middle xs-lh-28">
                    <div className="feature-box-icon me-10px">
                        <i className="feather icon-feather-mail fs-20 text-dark-gray"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="text-dark-gray fw-500 fs-20 xs-fs-18 ls-minus-05px">Looking for help? <a href="Marksmaster-contact.html" className="text-decoration-line-bottom-medium text-dark-gray fw-600">Contact us today</a></span>
                    </div>
                </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col-auto icon-with-text-style-08 ps-25px md-ps-15px md-pe-15px" data-anime='{ "translateX": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <div className="feature-box feature-box-left-icon-middle xs-lh-28">
                    <div className="feature-box-icon me-10px">
                        <i className="feather icon-feather-thumbs-up fs-20 text-dark-gray"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="text-dark-gray fw-500 fs-20 xs-fs-18 ls-minus-05px">Keep in Touch. <a href="#" className="text-decoration-line-bottom-medium text-dark-gray fw-600">Like us on Facebook</a></span>
                    </div>
                </div>
            </div>
            {/* end features box item */}
        </div>
    </div>
</section>

  )
}

export default Fourth