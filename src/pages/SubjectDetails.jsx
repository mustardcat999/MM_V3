// Marksmaster5/src/pages/SubjectDetails.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import First from '../components/SubjectDetails/First';
import Second from '../components/SubjectDetails/Second';
import Third from '../components/SubjectDetails/Third';
import Fourth from '../components/SubjectDetails/Fourth';
import subjectsData from '../data/subjectsData'; // Import the subject data

function SubjectDetails() {
  const { subjectName, subjectCategory } = useParams();
  const [currentSubject, setCurrentSubject] = useState(null);
  const [averageRating, setAverageRating] = useState(0);

  // Function to calculate average rating from reviews
  const calculateAverageRating = useCallback((reviews) => {
    if (!reviews || reviews.length === 0) {
      return 0;
    }
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1); // To one decimal place
  }, []);

  useEffect(() => {
    let foundSubject = null;

    if (subjectCategory && subjectsData[subjectCategory] && subjectsData[subjectCategory].subSubjects && subjectsData[subjectCategory].subSubjects[subjectName]) {
      foundSubject = subjectsData[subjectCategory].subSubjects[subjectName];
    } else if (subjectName && subjectsData[subjectName]) {
      foundSubject = subjectsData[subjectName];
    }

    if (foundSubject) {
      // Create a deep copy to ensure state updates trigger re-renders
      // and to allow modification of reviews without affecting the original imported data
      const subjectCopy = JSON.parse(JSON.stringify(foundSubject));
      setCurrentSubject(subjectCopy);
      setAverageRating(calculateAverageRating(subjectCopy.reviews));
    } else {
      setCurrentSubject(null);
      setAverageRating(0);
    }
  }, [subjectName, subjectCategory, calculateAverageRating]);

  // Function to add a new review and update state
  const handleAddReview = useCallback((newReview) => {
    setCurrentSubject(prevSubject => {
      if (!prevSubject) return null;

      const updatedReviews = [...prevSubject.reviews, newReview];
      const newAverageRating = calculateAverageRating(updatedReviews);

      // IMPORTANT: This updates the data in the imported subjectsData object in memory.
      // For persistent storage, you would need to integrate with a backend database.
      if (subjectCategory && subjectsData[subjectCategory] && subjectsData[subjectCategory].subSubjects && subjectsData[subjectCategory].subSubjects[subjectName]) {
        subjectsData[subjectCategory].subSubjects[subjectName].reviews = updatedReviews;
      } else if (subjectName && subjectsData[subjectName]) {
        subjectsData[subjectName].reviews = updatedReviews;
      }
      
      setAverageRating(newAverageRating); // Update the average rating state for Second.jsx

      return {
        ...prevSubject,
        reviews: updatedReviews,
      };
    });
  }, [subjectName, subjectCategory, calculateAverageRating]);


  if (!currentSubject) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Subject Not Found</h2>
        <p>The requested subject could not be found. Please check the URL or navigate back to the subjects page.</p>
      </div>
    );
  }

  // Determine category and students to pass to Second.jsx
  // 'category' will use the subject's title if no specific category field is present in Content.docx.
  // 'students' will be 'N/A students' as no dynamic student count is in Content.docx.
  const displayCategory = currentSubject.category || currentSubject.title;
  const displayStudents = "N/A students"; // As per strict adherence to doc file, this data is not dynamic.

  return (
    <>
      <First title={currentSubject.title} image={currentSubject.image} />
      <Second
        category={displayCategory}
        students={displayStudents}
        rating={averageRating}
      />
      <Third
        detailsImage={currentSubject.image}
        overview={currentSubject.overview}
        services={currentSubject.services}
        reviews={currentSubject.reviews}
        onAddReview={handleAddReview}
        averageRating={averageRating} // Pass average rating to Third.jsx for its summary
      />
      {/* relatedCourses is not in subjectsData based on Content.docx, so it will be undefined */}
      <Fourth
        relatedCourses={[]} // Pass an empty array as relatedCourses are not from Content.docx
        currentSubjectCategory={subjectCategory || subjectName}
      />
    </>
  );
}

export default SubjectDetails;