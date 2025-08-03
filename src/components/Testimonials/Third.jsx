import React from 'react'

function Third() {
  return (
    <section className="position-relative overlap-height background-position-left-top background-no-repeat" style={{ backgroundImage: "url('images/demo-elearning-02.png')" }}>
    <div className="container overlap-gap-section">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center text-lg-start sm-mb-30px" data-anime='{ "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'> 
                <figure className="position-relative m-0">
                    <img className="border-radius-6px" src="https://via.placeholder.com/580x615" alt="" />
                    <figcaption className="position-absolute bg-white border-radius-100px p-10px box-shadow-double-large bottom-100px md-bottom-70px xs-bottom-40px left-minus-30px sm-left-0px w-350px md-w-300px text-start last-paragraph-no-margin animation-float">
                        <div className="row align-items-center">
                            <div className="col-auto pe-0">
                                <img className="rounded-circle w-80px me-20px md-w-50px xs-w-50px" src="https://via.placeholder.com/148x148" alt="" />
                            </div>
                            <div className="col ps-0">
                                <span className="fs-18 text-dark-gray fw-500 ls-minus-05px d-block lh-26 md-fs-17"><span className="fw-800">Rachel</span> has liked this classes!</span>
                            </div>
                            <div className="col-auto">
                                <img className="me-20px mt-minus-4 md-w-30px" src="https://via.placeholder.com/46x51" alt="" />
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div> 
            <div className="col-xl-5 col-md-6 offset-xl-1 position-relative" data-anime='{ "el": "childs", "opacity": [0, 1], "rotateY": [90, 0], "rotateZ": [-10, 0], "translateY": [80, 0], "translateZ": [50, 0], "staggervalue": 200, "duration": 600, "delay": 100, "easing": "easeOutCirc" }'>
                <div className="icon-with-text-style-08 mb-20px">
                    <div className="feature-box feature-box-left-icon-middle">
                        <div className="feature-box-icon feature-box-icon-rounded w-55px h-55px rounded-circle bg-yellow me-15px">
                            <i className="bi bi-chat-quote d-inline-block icon-extra-medium text-dark-gray"></i>
                        </div>
                        <div className="feature-box-content last-paragraph-no-margin">
                            <span className="d-inline-block alt-font fs-19 fw-500 ls-minus-05px text-dark-gray">Students feedback</span>
                        </div>
                    </div>
                </div>
                <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px">Genius people to say positive words.</h2>
                <p className="mb-30px xs-mb-20px">Lorem ipsum is simply dummy text of the printing and typesetting industry an unknown printer. Lorem ipsum is simply dummy text of the printing and typesetting.</p>
                <div className="d-flex align-items-center">
                    <div className="col-auto text-center border-end border-color-extra-medium-gray border-1 me-25px pe-25px"><h2 className="alt-font lh-44 fw-600 text-dark-gray mb-0">99%</h2></div>
                    <div className="col">
                        <span className="d-block w-60 lh-26 text-dark-gray fw-600 lg-w-100">Student's complete course successfully.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Third