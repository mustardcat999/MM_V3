// Marksmaster5/src/components/SubjectDetails/Third.jsx
import React, { useState } from 'react';

const Third = ({ detailsImage, overview, services, reviews, onAddReview, averageRating }) => {
    const servicesToDisplay = services || []; // Ensure services is an array
    const reviewsToDisplay = reviews || []; // Ensure reviews is an array

    const [reviewerName, setReviewerName] = useState('');
    const [reviewerEmail, setReviewerEmail] = useState('');
    const [reviewerRating, setReviewerRating] = useState(0); // 0-5 stars
    const [reviewerComment, setReviewerComment] = useState('');

    const handleRatingClick = (rating) => {
        setReviewerRating(rating);
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (reviewerName && reviewerEmail && reviewerRating > 0 && reviewerComment) {
            const newReview = {
                name: reviewerName,
                email: reviewerEmail,
                rating: reviewerRating,
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                comment: reviewerComment,
            };
            onAddReview(newReview);
            // Clear form fields
            setReviewerName('');
            setReviewerEmail('');
            setReviewerRating(0);
            setReviewerComment('');
        } else {
            console.error("Please fill in all review fields and provide a rating.");
        }
    };

    // Function to render star icons for a given rating (for input)
    const renderStarsInput = (ratingValue) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`bi bi-star${i <= ratingValue ? '-fill' : ''}`}
                    style={{ color: '#ffb300', cursor: 'pointer' }}
                    onClick={() => handleRatingClick(i)}
                ></i>
            );
        }
        return stars;
    };

    // Function to render stars for display (non-interactive)
    const renderDisplayStars = (ratingValue) => {
        const stars = [];
        const roundedRating = Math.round(ratingValue); // Round for display
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`bi bi-star${i <= roundedRating ? '-fill' : ''}`}
                    style={{ color: '#ffb300' }}
                ></i>
            );
        }
        return stars;
    };

    return (
        <section className="position-relative">
            <div className="container">
                <div className="row justify-content-center appear anime-child anime-complete"
                    data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div className="col-lg-8 md-mb-50px">
                        {/* start details */}
                        <div className="col-12">
                            <img src={detailsImage}
                                alt="Subject Image" className="w-100 border-radius-6px mb-7" data-no-retina="" />
                            <div className="col-12 p-0 tab-style-04">
                                <ul className="nav nav-tabs justify-content-evenly nav-for-details-review fw-500 fs-18 ls-minus-05px mb-50px sm-mb-30px lh-70 sm-lh-40 text-center"
                                    role="tablist">
                                    <li className="nav-item" role="presentation"><a data-bs-toggle="tab" href="#tab_five1"
                                            className="nav-link active" aria-selected="true" role="tab">Overview<span
                                                className="tab-border bg-dark-gray"></span></a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link" data-bs-toggle="tab"
                                            href="#tab_five4" data-tab="review-tab" aria-selected="false" tabIndex="-1"
                                            role="tab">Review<span className="tab-border bg-dark-gray"></span></a></li>
                                </ul>
                                <div className="tab-content">
                                    {/* start tab content - Overview */}
                                    <div className="tab-pane fade in active show" id="tab_five1" role="tabpanel">
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-12 last-paragraph-no-margin">
                                                <span
                                                    className="fs-18 text-dark-gray fw-600 ls-minus-05px d-inline-block mb-5px">Course
                                                    description</span>
                                                <p>{overview}</p>
                                                <div className="mt-20px mb-30px md-mt-10px d-inline-block w-100">
                                                    <span
                                                        className="fs-18 text-dark-gray fw-600 ls-minus-05px d-inline-block mb-10px">Our Services Include:</span>
                                                    <ul className="p-0 m-0 list-style-02 text-dark-gray">
                                                        {servicesToDisplay.map((service, index) => (
                                                            <li key={index} className="pb-5px d-flex"><i
                                                                className="feather icon-feather-arrow-right-circle fs-20 me-10px"></i>{service}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <span
                                                    className="fs-18 text-dark-gray fw-600 ls-minus-05px d-inline-block mb-5px">Your Every Subject Need in One Place</span>
                                                <p>Whether you're preparing for exams, working on research papers, or completing projects for your social sciences or humanities course, MarksMaster is here to provide the expert support you need to succeed.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end tab content - Overview */}

                                    {/* start tab content - Review */}
                                    <div className="tab-pane fade in" id="tab_five4" role="tabpanel">
                                        {/* Average rating and total reviews count */}
                                        <div className="row align-items-center mb-8 sm-mb-10">
                                            <div className="col-lg-3 pe-0 md-pe-15px text-center">
                                                <div
                                                    className="border-radius-4px p-30px md-mb-25px xl-p-20px bg-very-light-gray">
                                                    <h2 className="mb-5px text-dark-gray fw-700">{averageRating ? averageRating : '0.0'}</h2>
                                                    <span className="text-golden-yellow icon-small d-block ls-minus-2px">
                                                        {renderDisplayStars(averageRating)}
                                                    </span>
                                                    <span
                                                        className="ps-15px pe-15px pt-10px pb-10px lh-normal bg-dark-gray text-white fs-12 fw-600 text-uppercase border-radius-4px d-inline-block text-center">{reviewsToDisplay.length}
                                                        Reviews</span>
                                                </div>
                                            </div>
                                            {/* Static progress bars and star percentages - as there's no data to make them dynamic per Content.docx */}
                                            <div className="col-10 col-lg-6 col-md-9 col-sm-8 progress-bar-style-02">
                                                <div className="ps-20px md-ps-0">
                                                    <div className="fs-18 text-dark-gray mb-15px fw-600">Average customer
                                                        ratings</div>
                                                    <div className="progress mb-20px border-radius-6px">
                                                        <div className="progress-bar bg-green m-0" role="progressbar"
                                                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <div className="progress mb-20px border-radius-6px">
                                                        <div className="progress-bar bg-green m-0" role="progressbar"
                                                            aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <div className="progress mb-20px border-radius-6px">
                                                        <div className="progress-bar bg-green m-0" role="progressbar"
                                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <div className="progress mb-20px border-radius-6px">
                                                        <div className="progress-bar bg-green m-0" role="progressbar"
                                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                    <div className="progress sm-mb-0 border-radius-6px">
                                                        <div className="progress-bar bg-green m-0" role="progressbar"
                                                            aria-valuenow="05" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 col-md-3 col-sm-4 mt-45px xs-ps-0">
                                                <div className="mb-15px lh-0 xs-lh-normal xs-mb-10px">
                                                    <span className="text-golden-yellow fs-16 ls-minus-2px d-none d-sm-inline-block">
                                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                                    </span>
                                                    <span className="fs-13 text-dark-gray fw-600 ms-10px xs-ms-0">80%</span>
                                                </div>
                                                <div className="mb-15px lh-0 xs-lh-normal xs-mb-10px">
                                                    <span className="text-golden-yellow fs-16 ls-minus-2px d-none d-sm-inline-block">
                                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i>
                                                    </span>
                                                    <span className="fs-13 text-dark-gray fw-600 ms-10px xs-ms-0">10%</span>
                                                </div>
                                                <div className="mb-15px lh-0 xs-lh-normal xs-mb-10px">
                                                    <span className="text-golden-yellow fs-16 ls-minus-2px d-none d-sm-inline-block">
                                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i><i className="bi bi-star"></i>
                                                    </span>
                                                    <span className="fs-13 text-dark-gray fw-600 ms-10px xs-ms-0">05%</span>
                                                </div>
                                                <div className="lh-0 xs-lh-normal">
                                                    <span className="text-golden-yellow fs-16 ls-minus-2px d-none d-sm-inline-block">
                                                        <i className="bi bi-star-fill"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i>
                                                    </span>
                                                    <span className="fs-13 text-dark-gray fw-600 ms-10px xs-ms-0">03%</span>
                                                </div>
                                                <div className="lh-0 xs-lh-normal">
                                                    <span className="text-golden-yellow fs-16 ls-minus-2px d-none d-sm-inline-block">
                                                        <i className="bi bi-star-fill"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i>
                                                    </span>
                                                    <span className="fs-13 text-dark-gray fw-600 ms-10px xs-ms-0">02%</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dynamic Reviews Display */}
                                        {reviewsToDisplay.length > 0 ? (
                                            reviewsToDisplay.map((review, index) => (
                                                <div key={index} className="row g-0 mb-40px md-mb-35px">
                                                    <div className="col-12 border-bottom border-color-extra-medium-gray pb-40px mb-40px xs-pb-30px xs-mb-30px">
                                                        <div className="d-block d-md-flex w-100">
                                                            <div className="w-300px md-w-250px sm-w-100 sm-mb-10px text-center">
                                                                <span className="text-dark-gray fw-600 d-block">{review.name}</span>
                                                                <div className="fs-14 lh-18">{review.date}</div>
                                                            </div>
                                                            <div className="w-100 last-paragraph-no-margin position-relative text-center text-md-start">
                                                                <span className="text-golden-yellow ls-minus-2px mb-5px sm-me-10px sm-mb-0 d-inline-block d-md-block">
                                                                    {renderDisplayStars(review.rating)}
                                                                </span>
                                                                <p className="w-85 sm-w-100 sm-mt-15px">{review.comment}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="col-12 text-center py-5">
                                                <p className="fs-18 text-dark-gray">No reviews yet. Be the first to review!</p>
                                            </div>
                                        )}

                                        {/* Add Review Form */}
                                        <div className="row justify-content-center">
                                            <div className="col-12">
                                                <div className="p-7 lg-p-5 sm-p-7 bg-very-light-gray border-radius-6px">
                                                    <div className="row justify-content-center mb-40px sm-mb-25px">
                                                        <div className="col-md-9 text-center">
                                                            <h3
                                                                className="alt-font text-dark-gray fw-600 ls-minus-3px mb-0">
                                                                Add a review</h3>
                                                        </div>
                                                    </div>
                                                    <form onSubmit={handleSubmitReview} className="row contact-form-style-02">
                                                        <div className="col-lg-6 col-md-6 mb-20px">
                                                            <label htmlFor="reviewerName" className="form-label mb-10px">Your name*</label>
                                                            <input
                                                                className="input-name border-radius-4px form-control required"
                                                                type="text" name="reviewerName" id="reviewerName" placeholder="Enter your name"
                                                                value={reviewerName} onChange={(e) => setReviewerName(e.target.value)}
                                                                autocomplete="name" // Added autocomplete
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 mb-20px">
                                                            <label htmlFor="reviewerEmail" className="form-label mb-10px">Your email
                                                                address*</label>
                                                            <input className="border-radius-4px form-control required"
                                                                type="email" name="reviewerEmail" id="reviewerEmail"
                                                                placeholder="Enter your email address"
                                                                value={reviewerEmail} onChange={(e) => setReviewerEmail(e.target.value)}
                                                                autocomplete="email" // Added autocomplete
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-lg-12 mb-20px">
                                                            <label className="form-label">Your rating*</label>
                                                            <div>
                                                                <span className="ls-minus-1px icon-small">
                                                                    {renderStarsInput(reviewerRating)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-30px">
                                                            <label htmlFor="reviewerComment" className="form-label mb-10px">Your review</label>
                                                            <textarea className="border-radius-4px form-control" cols="40"
                                                                rows="4" name="reviewerComment" id="reviewerComment"
                                                                placeholder="Your message"
                                                                value={reviewerComment} onChange={(e) => setReviewerComment(e.target.value)}
                                                                autocomplete="off" // Added autocomplete
                                                                required
                                                            ></textarea>
                                                        </div>
                                                        <div className="col-lg-7 md-mb-25px">
                                                            <div
                                                                className="position-relative terms-condition-box text-start is-invalid">
                                                                <label htmlFor="terms_condition">
                                                                    <input type="checkbox" name="terms_condition"
                                                                        id="terms_condition" value="1"
                                                                        className="terms-condition check-box align-middle required"
                                                                        required
                                                                    />
                                                                    <span className="box fs-14 lh-22">I accept the crafto
                                                                        terms and conditions and I have read the privacy
                                                                        policy.</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 offset-lg-1 text-start text-lg-end">
                                                            <input type="hidden" name="redirect" value="" />
                                                            <button
                                                                className="btn btn-dark-gray btn-medium btn-box-shadow btn-rounded submit"
                                                                type="submit">Submit review</button>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-results mt-20px d-none"></div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end tab content - Review */}
                                </div>
                            </div>
                        </div>
                        {/* end details */}
                    </div>
                    {/* start sidebar */}
                    <aside className="col-lg-4 ps-60px lg-ps-30px md-ps-15px" style={{}}>
                        <div className="position-sticky" style={{ top: '150px' }}>
                            <div className="border-radius-6px overflow-hidden bg-tranquil">
                                <div className="position-relative">
                                    <img src={detailsImage}
                                        className="md-w-100" alt="Subject Image" data-no-retina="" />
                                </div>
                                <div className="p-35px lg-p-25px">
                                    <ul className="p-0 mb-20px list-style-02">
                                        <li className="border-bottom border-color-extra-medium-gray pt-15px pb-15px">
                                            <span className="text-dark-gray">
                                                <span className="me-5px"><i className="bi bi-people fs-20"></i></span>
                                                <span className="fw-600">Enrolled</span>
                                            </span>
                                            <span className="ms-auto">18 students</span>
                                        </li>
                                        <li className="border-bottom border-color-extra-medium-gray pt-15px pb-15px">
                                            <span className="text-dark-gray">
                                                <span className="me-5px"><i className="bi bi-globe fs-20"></i></span>
                                                <span className="fw-600">Language</span>
                                            </span>
                                            <span className="ms-auto">English, Hindi</span>
                                        </li>
                                        <li className="border-bottom border-color-extra-medium-gray pt-15px pb-15px">
                                            <span className="text-dark-gray">
                                                <span className="me-5px"><i className="bi bi-clipboard-check fs-20"></i></span>
                                                <span className="fw-600">Experts</span>
                                            </span>
                                            <span className="ms-auto">10</span>
                                        </li>
                                        <li className="pt-10px pb-15px">
                                            <span className="text-dark-gray">
                                                <span className="me-5px"><i className="bi bi-award fs-20"></i></span>
                                                <span className="fw-600">Price</span>
                                            </span>
                                            <span className="ms-auto">$100/hr-$200/hr</span>
                                        </li>
                                    </ul>
                                    <div
                                        className="text-white bg-dark-gray text-center border-radius-50px pt-10px pb-10px fs-18 fw-500 lh-34 w-100 mb-15px">
                                        Get Quote</div>
                                    <a href="/contact"
                                        className="btn btn-extra-large btn-base-color btn-rounded btn-switch-text fw-600 left-icon w-100">
                                        <span>
                                            <span><i className="feather icon-feather-thumbs-up"></i></span>
                                            <span className="btn-double-text" data-text="Enroll now">Contact Now</span>
                                        </span>
                                    </a>
                                    <div className="elements-social social-icon-style-02 mt-20px">
                                        <ul className="small-icon dark text-center">
                                            <li className="sm-mb-0"><a className="facebook" href="https://www.facebook.com/"
                                                    target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                                            <li className="sm-mb-0"><a className="dribbble" href="http://www.dribbble.com/"
                                                    target="_blank"><i className="fa-brands fa-dribbble"></i></a></li>
                                            <li className="sm-mb-0"><a className="twitter" href="https://www.twitter.com/"
                                                    target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
                                            <li className="sm-mb-0"><a className="instagram" href="https://www.instagram.com/"
                                                    target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    {/* end sidebar */}
                </div>
            </div>
        </section>
    );
};

export default Third;