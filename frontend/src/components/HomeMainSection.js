import React from 'react';
import { Link } from 'react-router-dom';

const HomeMainSection = ({ reviews }) => {
  // Function to generate star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>&#9733;</span>); // Unicode for star character
    }
    return stars;
  };

  return (
    <main>
      <section className="Home-Main-Section" style={{padding:10}}>
        <h2>About Us</h2>
        <p>At LaFlamme Company, we are more than just a business - we are a passionate team dedicated to serving our customers and communities with integrity, compassion, and excellence.</p>
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </section>
      <section className="Review" style={{padding:10}}>
        <h2>Customer Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            <p>
              Rating: {renderStars(review.stars)}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeMainSection;
