// src/components/SubjectDetails/Fourth.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Fourth = ({ relatedCourses, currentSubjectCategory }) => {
    // Fallback to empty array if relatedCourses is null or undefined
    const coursesToDisplay = relatedCourses || [];

    return (
        <section className="bg-tranquil overflow-hidden position-relative overlap-height">
            <div className="container overlap-gap-section">
                <div className="row justify-content-center mb-2">
                    <div className="col-xl-5 col-lg-6 text-center">
                        <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px">Related courses</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 px-0 sm-ps-15px sm-pe-15px">
                        <ul className="portfolio-wrapper grid grid-3col xxl-grid-3col xl-grid-3col lg-grid-2col md-grid-2col sm-grid-1col xs-grid-1col gutter-extra-large appear anime-child anime-complete"
                            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                            style={{ position: 'relative' }}> {/* Removed fixed height */}
                            <li className="grid-sizer"></li>
                            {/* start portfolio item */}
                            {coursesToDisplay.length > 0 ? (
                                coursesToDisplay.map((course, index) => (
                                    <li key={index} className="grid-item design transition-inner-all">
                                        <div className="portfolio-box">
                                            <div className="portfolio-image border-radius-6px">
                                                <Link to={`/subjects/${currentSubjectCategory}/${course.id}`}><img src={course.image} alt={course.title} data-no-retina="" /></Link>
                                                <div className="portfolio-hover justify-content-start flex-column align-items-start p-45px xl-p-30px">
                                                    <div className="fs-14 lh-24 text-yellow mb-5px text-uppercase fw-500">Related Course</div>
                                                    <Link to={`/subjects/${currentSubjectCategory}/${course.id}`} className="text-white fw-600 fs-20 lh-28 ls-minus-05px">{course.title}</Link>
                                                </div>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center align-items-center ps-40px pe-40px xl-ps-25px xl-pe-25px pt-15px pb-20px">
                                                <div className="me-auto">
                                                    <i
                                                        className="feather icon-feather-clipboard text-dark-gray d-inline-block me-5px"></i><span
                                                        className="fs-16 text-dark-gray fw-500">{course.lessons} Lessons</span>
                                                </div>
                                                <div>
                                                    <i
                                                        className="feather icon-feather-users text-dark-gray d-inline-block me-5px"></i><span
                                                        className="fs-16 text-dark-gray fw-500">{course.students} Students</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <div className="col-12 text-center py-5">
                                    <p className="fs-18">No related courses found for this subject.</p>
                                </div>
                            )}
                            {/* end portfolio item */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fourth;