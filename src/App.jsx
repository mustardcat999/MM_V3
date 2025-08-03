// Marksmaster5/src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import AllSubjects from "./pages/AllSubjects";
import SubjectDetails from "./pages/SubjectDetails";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Scroller from "./components/Common/Scroller";
import useScriptManager from "./components/Common/LoadScripts";
import ModernNavbar from "./components/Common/ModernNavbar"; 

// Error boundary component to catch React errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container" style={{ padding: '20px', margin: '20px', border: '1px solid red' }}>
          <h2>Something went wrong</h2>
          <p>We're sorry for the inconvenience. Please try refreshing the page.</p>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// ScrollToTop component with error handling
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      console.error("Error scrolling to top:", e);
    }
  }, [pathname]);

  return null;
};

// Safe wrapper for route components
const SafeRouteComponent = ({ Component }) => {
  return (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  );
};

function App() {
  const [scriptError, setScriptError] = useState(false);
  const location = useLocation(); // Get the current location
  const [lastPath, setLastPath] = useState(location.pathname); // Track the last path

  // Load scripts in the correct order with improved error handling
  const scriptStatus = useScriptManager([
    '/assets/js/jquery.js',
    '/assets/js/vendors.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    '/assets/js/main.js'
  ]);

  useEffect(() => {
    if (scriptStatus.allLoaded) {
      console.log("All scripts loaded successfully");
    }
    if (scriptStatus.hasErrors) {
      console.error("Some scripts failed to load:", scriptStatus.errors);
      setScriptError(true);
    }
  }, [scriptStatus.allLoaded, scriptStatus.hasErrors]);

  // Force a page refresh only when the route changes
  useEffect(() => {
    if (location.pathname !== lastPath) {
      setLastPath(location.pathname); // Update the last path
      window.location.reload(); // Refresh the page
    }
  }, [location.pathname, lastPath]); // Trigger refresh only when the pathname changes

  if (scriptError) {
    return (
      <div className="script-error-container" style={{ padding: '20px', margin: '20px', border: '1px solid red' }}>
        <h2>Script Loading Error</h2>
        <p>There was an error loading some required scripts. Please try refreshing the page.</p>
        <button onClick={() => window.location.reload()}>
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Navbar />
      {/* <ModernNavbar /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SafeRouteComponent Component={HomePage} />} />
        <Route path="/about" element={<SafeRouteComponent Component={About} />} />
        <Route path="/subjects" element={<SafeRouteComponent Component={AllSubjects} />} />
        {/* Corrected dynamic routes for subject details */}
        <Route path="/subjects/:subjectName" element={<SafeRouteComponent Component={SubjectDetails} />} />
        <Route path="/subjects/:subjectCategory/:subjectName" element={<SafeRouteComponent Component={SubjectDetails} />} />
        <Route path="/testimonials" element={<SafeRouteComponent Component={Testimonials} />} />
        <Route path="/contact" element={<SafeRouteComponent Component={ContactUs} />} />
      </Routes>
      <Footer />
      <Scroller />
    </ErrorBoundary>
  );
}

// Wrap the App component with Router
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}