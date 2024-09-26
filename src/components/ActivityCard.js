import React from 'react';
import '../styles/ActivityCard.css'; 

const ActivityCard = ({ title, length, duration, city, imageUrl }) => {
  return (
    <div className="activity-card">
      <img src={imageUrl} alt={title} className="activity-image" />
      <div className="activity-details">
        <h3>{title}</h3>
        <p>{city}</p>
        <p>{length} - {duration}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
