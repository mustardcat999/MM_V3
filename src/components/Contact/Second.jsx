import React from 'react'

function Second() {
  return (
    <section className="overflow-hidden position-relative overlap-height pb-10">
      <div className="container overlap-gap-section">
        <div className="row justify-content-center mb-3">
          <div
            className="col-12 text-center"
            data-anime='{"translateY": [15, 0], "opacity": [0,1], "duration": 500, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad"}'
          >
            <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px">
              How we can help you?
            </h2>
          </div>
        </div>
        <div className="row row-cols-md-1 justify-content-center mb-10 sm-mb-0">
          <div className="col-xl-9 col-lg-10">
            <form
              action="/assets/email-templates/contact-form.php"
              method="post"
              className="contact-form-style-03"
            >
              <div
                className="row"
                data-anime='{"el": "childs", "translateY": [15, 0], "opacity": [0,1], "duration": 500, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad"}'
              >
                {[
                  { label: "Your good name*", icon: "bi-emoji-smile", type: "text", name: "name", placeholder: "What's your good name?" },
                  { label: "Your email address*", icon: "bi-envelope", type: "email", name: "email", placeholder: "Enter your email address" },
                  { label: "Your phone number*", icon: "bi-telephone", type: "tel", name: "phone", placeholder: "Enter your phone number" },
                  { label: "Your subject", icon: "bi-journals", type: "text", name: "subject", placeholder: "How can we help you?" },
                ].map((field, index) => (
                  <div className="col-md-6" key={index}>
                    <label className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0">
                      {field.label}
                    </label>
                    <div className="position-relative form-group mb-30px">
                      <span className="form-icon">
                        <i className={`bi ${field.icon} text-dark-gray`}></i>
                      </span>
                      <input
                        className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control required"
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                      />
                    </div>
                  </div>
                ))}
                <div className="col-12 mb-35px">
                  <label className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0">
                    Your message
                  </label>
                  <div className="position-relative form-group form-textarea mb-0">
                    <textarea
                      className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent form-control"
                      name="comment"
                      placeholder="Describe about your message"
                      rows="4"
                    ></textarea>
                    <span className="form-icon">
                      <i className="bi bi-chat-square-dots text-dark-gray"></i>
                    </span>
                  </div>
                </div>
                <div className="col-12 mb-35px">
                  <label className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0">
                    Your assignment file
                  </label>
                  <div className="position-relative form-group form-textarea mb-0">
                    <div className="custom-uploader">
                      <input type="file" />
                    </div>
                    <span className="form-icon">
                      <i className="bi bi-files text-dark-gray"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-8 sm-mb-30px text-center text-md-start">
                  <p className="mb-0 fs-15 lh-26 w-80 lg-w-100">
                    We are committed to protecting your privacy. We will never collect information about you without your explicit consent.
                  </p>
                </div>
                <div className="col-md-4 text-center text-md-end">
                  <input type="hidden" name="redirect" value="" />
                  <button className="btn btn-large btn-dark-gray btn-rounded btn-box-shadow btn-switch-text left-icon submit" type="submit">
                    <span>
                      <span>
                        <i className="fa-regular fa-paper-plane"></i>
                      </span>
                      <span className="btn-double-text" data-text="Send message">
                        Send message
                      </span>
                    </span>
                  </button>
                </div>
                <div className="col-12 md-mb-20px">
                  <div className="form-results mt-20px d-none"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>  
    )
}

export default Second