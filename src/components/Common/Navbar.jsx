// src/components/Common/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./css/common.css"
import defaultLogo from '/assets/images/MarksmasterLogo.png';
import altLogo from '/assets/images/Marksmasterlogodark.png';
import mobileLogo from '/assets/images/MarksmasterLogo.png';


function Navbar() {

  const navigate = useNavigate(); // Get navigate function

  const toSlug = (name) => name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');


  return (
<header>
            {/* The 'data-header-hover="light"' attribute enables the color change on scroll via main.js */}
            <nav className="navbar navbar-expand-lg header-transparent bg-transparent header-reverse" data-header-hover="light">
                <div className="container-fluid">
                    <div className="col-auto col-lg-2 me-lg-0 me-auto">
                        <Link className="navbar-brand" to="/">
                            {/* The 'default-logo' is shown initially, and 'alt-logo' is shown on scroll */}
                            <img src={defaultLogo} data-at2x={defaultLogo} alt="MarksMaster" className="default-logo" />
                            <img src={altLogo} data-at2x={altLogo} alt="MarksMaster Dark" className="alt-logo" />
                            <img src={mobileLogo} data-at2x={mobileLogo} alt="MarksMaster Mobile" className="mobile-logo" />
                        </Link>
                    </div>
                    <div className="col-auto menu-order position-static">
                        {/* This button toggles the menu on mobile */}
                        <button className="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav alt-font">
                                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                                <li className="nav-item dropdown simple-dropdown dropdown-with-icon">
                                    {/* Link to a general subjects page. The data-bs-toggle is removed to prevent conflicts. */}
                                    <Link to="/subjects" className="nav-link dropdown-toggle">Subjects</Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
                                        {/* Engineering Submenu */}
                                        <li className="dropdown" role="button" aria-expanded="false">
                                            <Link to={`/subjects/${toSlug("engineering")}`} className="dropdown-item center-align-vertical">
                                                <i className="bi bi-laptop"></i>
                                                <div className="submenu-icon-content">
                                                    <span>Engineering</span>
                                                </div>
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
                                                <li><Link to={`/subjects/${toSlug("engineering")}/${toSlug("mechanical engineering")}`}>Mechanical Engineering</Link></li>
                                                <li><Link to={`/subjects/${toSlug("engineering")}/${toSlug("electrical engineering")}`}>Electrical Engineering</Link></li>
                                                <li><Link to={`/subjects/${toSlug("engineering")}/${toSlug("electronics engineering")}`}>Electronics Engineering</Link></li>
                                                <li><Link to={`/subjects/${toSlug("engineering")}/${toSlug("civil engineering")}`}>Civil Engineering</Link></li>
                                            </ul>
                                        </li>
                                        {/* Computer Science Submenu */}
                                        <li className="dropdown" role="button" aria-expanded="false">
                                            <Link to={`/subjects/${toSlug("computer science")}`} className="dropdown-item">
                                                <i className="bi bi-laptop"></i>
                                                <div className="submenu-icon-content">
                                                    <span>Computer Science &<br />IT</span>
                                                </div>
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
                                                <li><Link to={`/subjects/${toSlug("computer science")}/${toSlug("coding")}`}>Coding</Link></li>
                                                <li><Link to={`/subjects/${toSlug("computer science")}/${toSlug("machine learning")}`}>Machine Learning</Link></li>
                                                <li><Link to={`/subjects/${toSlug("computer science")}/${toSlug("data analytics")}`}>Data Analytics & Stats</Link></li>
                                                <li><Link to={`/subjects/${toSlug("computer science")}/${toSlug("erp tools")}`}>ERP tools</Link></li>
                                                <li><Link to={`/subjects/${toSlug("computer science")}/${toSlug("development")}`}>Development</Link></li>
                                                <li><Link to={`/subjects/${toSlug("computer science")}/${toSlug("cyber security")}`}>Cyber Security</Link></li>
                                            </ul>
                                        </li>
                                        {/* Business Submenu */}
                                        <li className="dropdown" role="button" aria-expanded="false">
                                            <Link to={`/subjects/${toSlug("business")}`} className="dropdown-item">
                                                <i className="bi bi-laptop"></i>
                                                <div className="submenu-icon-content">
                                                    <span>Business &<br />Management</span>
                                                </div>
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
                                                <li><Link to={`/subjects/${toSlug("business")}/${toSlug("accounting")}`}>Accounting</Link></li>
                                                <li><Link to={`/subjects/${toSlug("business")}/${toSlug("finance")}`}>Finance</Link></li>
                                                <li><Link to={`/subjects/${toSlug("business")}/${toSlug("marketing")}`}>Marketing</Link></li>
                                                <li><Link to={`/subjects/${toSlug("business")}/${toSlug("management")}`}>Management</Link></li>
                                                <li><Link to={`/subjects/${toSlug("business")}/${toSlug("economics")}`}>Economics</Link></li>
                                                <li><Link to={`/subjects/${toSlug("business")}/${toSlug("strategy")}`}>Strategy</Link></li>
                                            </ul>
                                        </li>
                                        {/* Other Submenus */}
                                        <li className="dropdown" role="button" aria-expanded="false">
                                            <Link to={`/subjects/${toSlug("medical")}`} className="dropdown-item">
                                                <i className="bi bi-laptop"></i>
                                                <div className="submenu-icon-content">
                                                    <span>Medical & Biology</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="dropdown" role="button" aria-expanded="false">
                                            <Link to={`/subjects/${toSlug("humanities")}`} className="dropdown-item">
                                                <i className="bi bi-laptop"></i>
                                                <div className="submenu-icon-content">
                                                    <span>Social Sciences<br />& Humanities</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link to="/testimonials" className="nav-link">Testimonial</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto col-lg-2 text-end d-none d-sm-flex">
                        <div className="header-icon">
                            <div>
                                <div className="alt-font fw-500 lg-fs-15">
                                    <a href="tel:1800222000" className="widget-text text-white-hover">
                                        <i className="feather icon-feather-phone-call me-10px lg-me-5px"></i>+91 XXXXX XXXXX
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
  );
}

export default Navbar;