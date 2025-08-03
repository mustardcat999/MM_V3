import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/modern-navbar.css'; 
import defaultLogo from '/assets/images/MarksmasterLogo.png';
import altLogo from '/assets/images/Marksmasterlogodark.png';

/**
 * A modern, responsive, and self-contained navigation bar.
 * This component handles its own state and side effects, 
 * removing dependencies on external jQuery scripts.
 *
 * @returns {JSX.Element} The rendered ModernNavbar component.
 */
function ModernNavbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const headerRef = useRef(null);

    // Effect to handle scroll-based header changes (replaces jQuery logic)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect to close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setOpenDropdowns({});
    }, [location.pathname]);

    // Effect to add/remove class from body when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('mm-mobile-menu-open');
        } else {
            document.body.classList.remove('mm-mobile-menu-open');
        }
    }, [isMobileMenuOpen]);

    // Toggles the main mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Toggles individual dropdowns in mobile view
    const handleDropdownToggle = (e, menuId) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenDropdowns(prev => ({ ...prev, [menuId]: !prev[menuId] }));
    };

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        {
            to: "/subjects", label: "Subjects", id: "subjects",
            sublinks: [
                {
                    to: "/engineering", label: "Engineering", id: "engineering",
                    sublinks: [
                        { to: "/engineering/mechanical", label: "Mechanical Engineering" },
                        { to: "/engineering/electrical", label: "Electrical Engineering" },
                        { to: "/engineering/electronics", label: "Electronics Engineering" },
                        { to: "/engineering/civil", label: "Civil Engineering" },
                    ]
                },
                {
                    to: "/computer-science", label: "Computer Science & IT", id: "cs",
                    sublinks: [
                        { to: "/computer-science/coding", label: "Coding" },
                        { to: "/computer-science/machine-learning", label: "Machine Learning" },
                        { to: "/computer-science/data-analytics", label: "Data Analytics & Stats" },
                    ]
                },
                {
                    to: "/business", label: "Business & Management", id: "business",
                    sublinks: [
                        { to: "/business/accounting", label: "Accounting" },
                        { to: "/business/finance", label: "Finance" },
                        { to: "/business/marketing", label: "Marketing" },
                    ]
                },
                { to: "/medical", label: "Medical & Biology" },
                { to: "/humanities", label: "Social Sciences & Humanities" },
            ]
        },
        { to: "/testimonials", label: "Testimonial" },
        { to: "/contact", label: "Contact" },
    ];

    // Recursive function to render navigation links and dropdowns
    const renderNavLinks = (links) => {
        return links.map(link => (
            <li key={link.id || link.to} className={`mm-nav-item ${link.sublinks ? 'mm-dropdown' : ''}`}>
                <Link to={link.to} className="mm-nav-link">
                    {link.label}
                    {link.sublinks && (
                        <button 
                            className="mm-dropdown-toggle" 
                            onClick={(e) => handleDropdownToggle(e, link.id)}
                            aria-expanded={!!openDropdowns[link.id]}
                            aria-label={`Toggle ${link.label} submenu`}
                        >
                            <i className={`fas fa-chevron-down ${openDropdowns[link.id] ? 'open' : ''}`}></i>
                        </button>
                    )}
                </Link>
                {link.sublinks && (
                    <ul className={`mm-dropdown-menu ${openDropdowns[link.id] ? 'show' : ''}`}>
                        {renderNavLinks(link.sublinks)}
                    </ul>
                )}
            </li>
        ));
    };

    return (
        <header ref={headerRef} className={`mm-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="mm-container">
                <div className="mm-logo">
                    <Link to="/">
                        <img src={isScrolled ? altLogo : defaultLogo} alt="MarksMaster Logo" className="mm-logo-img" />
                    </Link>
                </div>

                <nav className={`mm-nav-container ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="mm-nav-list">
                        {renderNavLinks(navLinks)}
                    </ul>
                </nav>

                <div className="mm-header-actions">
                    <a href="tel:+911234567890" className="mm-contact-link">
                        <i className="fas fa-phone-alt"></i>
                        <span className="mm-contact-text">+91 12345 67890</span>
                    </a>
                    <button 
                        className="mm-mobile-toggle" 
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="mm-hamburger-line"></span>
                        <span className="mm-hamburger-line"></span>
                        <span className="mm-hamburger-line"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default ModernNavbar;