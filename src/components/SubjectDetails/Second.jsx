// Marksmaster5/src/components/SubjectDetails/Second.jsx
import React from 'react';

function Second({ category, students, rating }) {
  // Function to render star icons based on the rating prop
  const renderStars = (starRating) => {
    const stars = [];
    // Ensure rating is a number for iteration
    const numericRating = parseFloat(starRating);

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi bi-star${i <= numericRating ? '-fill' : ''}`}
          style={{ color: '#ffb300' }}
        ></i>
      );
    }
    return stars;
  };

  return (
    <section className="border-bottom border-color-extra-medium-gray pt-20px pb-20px">
      <div className="container">
        <div
          className="row text-center justify-content-center align-items-center appear anime-child anime-complete"
          data-anime='{"el": "childs", "opacity": [0, 1], "translateX": [30, 0], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
        >
          {/* Start separator */}
          <div className="col-auto lg-p-0 d-none d-lg-block">
            <span className="w-1px h-20px bg-extra-medium-gray d-block"></span>
          </div>
          {/* End separator */}
          <div className="col-sm-auto">
            <span>
              <span className="fw-600 text-dark-gray">Categories:</span> {category || 'N/A'}
            </span>
          </div>
          {/* Start separator */}
          <div className="col-auto lg-p-0 d-none d-sm-inline-block">
            <span className="w-1px h-20px bg-extra-medium-gray d-block"></span>
          </div>
          {/* End separator */}
          <div className="col-sm-auto">
            <span>
              <span className="fw-600 text-dark-gray">Number of students:</span> {students || 'N/A'}
            </span>
          </div>
          {/* Start separator */}
          <div className="col-auto lg-p-0 d-none d-md-inline-block">
            <span className="w-1px h-20px bg-extra-medium-gray d-block"></span>
          </div>
          {/* End separator */}
          <div className="col-sm-auto md-mt-0">
            <div className="review-star-icon d-inline-block">
              {renderStars(rating)}
            </div>
            <span className="text-dark-gray fw-600"> ({rating || '0.0'})</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Second;