import React from 'react'
import { Link } from 'react-router-dom'

function Sixth() {
    return (
        <section className="bg-gradient-tranquil-white pt-0 position-relative align-items-center">

            <div className='container mt-4 w-full'>
                <div className="row justify-content-center align-items-center">
                    <div className=" position-relative z-index-1">
                        <div className='d-flex justify-content-between flex-md-row flex-column'>
                        <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px mb-40px sm-mb-30px" data-anime='{ "translateY": [-30, 0], "perspective": [1200,1200], "scale": [1.1, 1], "rotateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>Frequently Asked Questions (FAQ)</h2>
                        <Link className="fw-600" to="/about">View More</Link>
                        </div>
                        <div className="accordion accordion-style-05" id="accordion-style-05" data-anime='{ "el": "childs", "translateY": [-30, 0], "perspective": [1200,1200], "scale": [1.1, 1], "rotateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
                            {/* start accordion item */}
                            <div className="accordion-item bg-white active-accordion">
                                <div className='d-flex justify-content-between'>
                                <h3 className="number alt-font mb-0 text-base-color fw-400 text-outline text-outline-color-base-color">01</h3>
                                <div className="accordion-header ">
                                    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-05-01" aria-expanded="true" data-bs-parent="#accordion-style-05">
                                        <div className="accordion-title fs-18 position-relative pe-0 text-dark-gray fw-600 mb-0">Does MarksMaster have professionals to help with assignments or quizzes?
                                        </div>
                                    </a>
                                </div>
                                <i class="bi bi-chevron-down"></i>
                                </div>
                                <div id="accordion-style-05-01" className="accordion-collapse collapse show" data-bs-parent="#accordion-style-05">
                                    <div className="accordion-body last-paragraph-no-margin">
                                        <p>Yes, MarksMaster has a team of best industry professionals and experts for your subject. They handle most academic subjects, so you are in for good grades and academic success! They can help with most of the academic challenges including assignments, quizzes, thesis, dissertations, projects, exam preparation and certifications. </p>
                                    </div>
                                </div>
                            </div>
                            {/* end accordion item */}
                            {/* start accordion item */}
                            <div className="accordion-item bg-white">
                                <h3 className="number alt-font mb-0 text-base-color fw-400 text-outline text-outline-color-base-color">02</h3>
                                <div className="accordion-header">
                                    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-05-02" aria-expanded="false" data-bs-parent="#accordion-style-05">
                                        <div className="accordion-title fs-18 position-relative pe-0 text-dark-gray fw-600 mb-0">How can I get help with homework or assignment?</div>
                                    </a>
                                </div>
                                <div id="accordion-style-05-02" className="accordion-collapse collapse" data-bs-parent="#accordion-style-05">
                                    <div className="accordion-body last-paragraph-no-margin">
                                        <p>Getting help with homework for university students for all subjects is easy and effective at MarksMaster. We have specialists and experts in almost all the subjects which are mentioned on our website. They have helped students from more than 20 countries across 200+ universities globally.  Look below to learn how to get help from them quickly and efficiently.
                                        </p>
                                        <ul>
                                            <li className='d-flex gap-3'>
                                                <i className='bi bi-1-circle-fill'></i>
                                                <p>First things first, simply fill out the order form for academic help services or connect with them via their socials (preferably Whatsapp on +91 8240 150 180).</p>
                                            </li>
                                            <li className='d-flex gap-3'>
                                            <i className='bi bi-2-circle-fill'></i>
                                            <p>
                                            Specify your demand or the requirements you want our expert tutors to meet.
                                            </p>
                                            </li>
                                            <li className='d-flex gap-3'>
                                            <i className='bi bi-3-circle-fill'></i>
                                            <p>    
                                            Now, make payment securely for any paper for your school or university via trusted gateways.
                                            </p>
                                            </li>
                                            <li className='d-flex gap-3'>
                                            <i className='bi bi-4-circle-fill'></i>  
                                            <p>  
                                            The deliverables (including any relevant code files) will be shared to you and you can review from your end for any suggestions or feedback.
                                            </p>
                                            </li>
                                            <li className='d-flex gap-3'>
                                            <i className='bi bi-5-circle-fill'></i> 
                                            <p>   
                                            Get on a free explanatory session with the experts who will give you a detailed explanation and walkthrough of the delivered task to enable you to know the basic Know-Hows.
                                            </p>
                                            </li>
                                        </ul>
                                        <p>Let our tutors complete first-class solutions based on your requirements and secure high grades.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* end accordion item */}
                            {/* start accordion item */}
                            <div className="accordion-item bg-white">
                                <h3 className="number alt-font mb-0 text-base-color fw-400 text-outline text-outline-color-base-color">03</h3>
                                <div className="accordion-header">
                                    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-05-03" aria-expanded="false" data-bs-parent="#accordion-style-05">
                                        <div className="accordion-title fs-18 position-relative pe-0 text-dark-gray fw-600 mb-0">Can MarksMaster guarantee plagiarism-free work?</div>
                                    </a>
                                </div>
                                <div id="accordion-style-05-03" className="accordion-collapse collapse" data-bs-parent="#accordion-style-05">
                                    <div className="accordion-body last-paragraph-no-margin">
                                        <p>All papers are written from scratch without pre-written materials or AI-based content. They deliver work done by experts  who work hard to provide original, quality academic research content. They run double-checks to avoid plagiarism with tools like TurnItIn for plagiarism checks in our thesis, dissertations and codesand present you with a plagiarism report with the deliverables. You are safe when it comes to academic integrity and writing originality.</p>
                                    </div>
                                </div>
                            </div>
                            {/* end accordion item */}
                            {/* start accordion item */}
                            <div className="accordion-item bg-white">
                                <h3 className="number alt-font mb-0 text-base-color fw-400 text-outline text-outline-color-base-color">04</h3>
                                <div className="accordion-header">
                                    <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-05-04" aria-expanded="false" data-bs-parent="#accordion-style-05">
                                        <div className="accordion-title fs-18 position-relative pe-0 text-dark-gray fw-600 mb-0">What is MarksMaster and how is it helpful for students?</div>
                                    </a>
                                </div>
                                <div id="accordion-style-05-04" className="accordion-collapse collapse" data-bs-parent="#accordion-style-05">
                                    <div className="accordion-body last-paragraph-no-margin">
                                        <p>MarksMaster is an online tutoring and academic help portal designed to assist students get their questions answered, assignments solved and fix their grades. Students are encouraged to seek solutions for their academic queries from our team of experienced online tutors and experts to get high quality, detailed and in-time solutions. MarksMaster help students with assignments, thesis, dissertations, final year projects and preparation for exams.</p>
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

export default Sixth