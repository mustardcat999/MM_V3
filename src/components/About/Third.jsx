import React from 'react'

function Third() {
  return (
    <section className="bg-gradient-tranquil-white pt-0 position-relative align-items-center">
    <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-xl-7 col-lg-6 text-center" data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <div className="position-relative md-mb-50px xs-mb-30px pe-50px outside-box-left-10 md-outside-box-left-0 lg-pe-0 atropos" data-atropos>
                    <div className="atropos-scale">
                        <div className="atropos-rotate">
                            <div className="atropos-inner text-center w-100 overflow-visible">
                                <div data-atropos-offset="-1" className="position-absolute left-0px">
                                    <img src="https://via.placeholder.com/760x645" alt="" />
                                </div>
                                <img data-atropos-offset="1" className="position-relative z-index-9" src="images/demo-elearning-06.png" alt="" />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-5 col-lg-6 position-relative z-index-1">
                <div className="icon-with-text-style-08 mb-20px" data-anime='{ "el": "childs", "translateY": [-30, 0], "perspective": [1200,1200], "scale": [1.1, 1], "rotateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div className="feature-box feature-box-left-icon-middle">
                        <div className="feature-box-icon feature-box-icon-rounded w-55px h-55px rounded-circle bg-yellow me-15px">
                            <i className="bi bi-award d-inline-block icon-extra-medium text-dark-gray"></i> 
                        </div>
                        <div className="feature-box-content last-paragraph-no-margin">
                            <span className="d-inline-block alt-font fs-19 fw-500 ls-minus-05px text-dark-gray">Why you choose us?</span>
                        </div>
                    </div>
                </div>
                <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mb-40px sm-mb-30px" data-anime='{ "translateY": [-30, 0], "perspective": [1200,1200], "scale": [1.1, 1], "rotateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>Teaching makes you productive.</h2>
                <div className="accordion accordion-style-05" id="accordion-style-05" data-anime='{ "el": "childs", "translateY": [-30, 0], "perspective": [1200,1200], "scale": [1.1, 1], "rotateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    {/* start accordion item */}
                    <div className="accordion-item bg-white active-accordion">
                        <h3 className="number alt-font mb-0 text-base-color fw-400 text-outline text-outline-color-base-color">01</h3>
                        <div className="accordion-header">
                            <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-05-01" aria-expanded="true" data-bs-parent="#accordion-style-05">
                                <div className="accordion-title fs-18 position-relative pe-0 text-dark-gray fw-600 mb-0">Learn with experts instructors</div>
                            </a>
                        </div>
                        <div id="accordion-style-05-01" className="accordion-collapse collapse show" data-bs-parent="#accordion-style-05">
                            <div className="accordion-body last-paragraph-no-margin">
                                <p>Lorem ipsum is simply dummy of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    {/* end accordion item */}
                    {/* start accordion item */}
                    <div className="accordion-item bg-white">
                        <h3 className="number alt-font mb-0 text-base-color fw-400 text-outline text-outline-color-base-color">02</h3>
                        <div className="accordion-header">
                            <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-05-02" aria-expanded="false" data-bs-parent="#accordion-style-05">
                                <div className="accordion-title fs-18 position-relative pe-0 text-dark-gray fw-600 mb-0">Highly flexible learning time</div>
                            </a>
                        </div>
                        <div id="accordion-style-05-02" className="accordion-collapse collapse" data-bs-parent="#accordion-style-05">
                            <div className="accordion-body last-paragraph-no-margin">
                                <p>Lorem ipsum is simply dummy of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    {/* end accordion item */}
                    {/* start accordion item */}
                    <div className="accordion-item bg-white">
                        <h3 className="number alt-font mb-0 text-base-color fw-400 text-outline text-outline-color-base-color">03</h3>
                        <div className="accordion-header">
                            <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-05-03" aria-expanded="false" data-bs-parent="#accordion-style-05">
                                <div className="accordion-title fs-18 position-relative pe-0 text-dark-gray fw-600 mb-0">Amazing skills for teaching</div>
                            </a>
                        </div>
                        <div id="accordion-style-05-03" className="accordion-collapse collapse" data-bs-parent="#accordion-style-05">
                            <div className="accordion-body last-paragraph-no-margin">
                                <p>Lorem ipsum is simply dummy of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    {/* end accordion item */}
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Third