// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';  
import UserProfile from '../components/Profile';
import ActivityCard from '../components/ActivityCard';
import { getUserData } from '../services/mockUserService';
import '../styles/Home.css';

const Home = () => {
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState({ cycling: [], running: [], swimming: [] });
  const [selectedActivity, setSelectedActivity] = useState(null); 
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const userData = getUserData();
    setUser(userData);

    const generateActivities = (sport) => {
        const activities = [];
        const imageUrls = {
          Cycling: 'https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320',
          Running: 'https://cdn-5f4f6e14c1ac180394b738c9.closte.com/wp-content/uploads/2018/03/01-1170x635.jpg',
          Swimming: 'https://cdn-5f4f6e14c1ac180394b738c9.closte.com/wp-content/uploads/2018/03/01-1170x635.jpg',
        };
      
        for (let i = 0; i < 10; i++) {
          const activity = {
            id: i,
            title: `${sport} Session`,
            length: `${Math.floor(Math.random() * 50 + 5)}k`,
            duration: `${Math.floor(Math.random() * 2)}:${Math.floor(Math.random() * 60)}h`,
            city: ['Cartagena', 'Bogotá', 'Medellín'][Math.floor(Math.random() * 3)],
            imageUrl: imageUrls[sport] || 'https://via.placeholder.com/300x200.png?text=No+Image',
          };
          activities.push(activity);
        }
        return activities;
      };
      

    setActivities({
      cycling: generateActivities('Cycling'),
      running: generateActivities('Running'),
      swimming: generateActivities('Swimming')
    });
  }, []);

  // Función para abrir el modal con la actividad seleccionada
  const handleOpenModal = (activity) => {
    setSelectedActivity(activity);
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedActivity(null);
  };

  return (
    <div className="home-page">
      <UserProfile user={user} />

      <div className="activities-section">
        <div className="activity-column">
          <h2>Cycling</h2>
          {activities.cycling.map((activity) => (
            <div key={activity.id} onClick={() => handleOpenModal(activity)}>
              <ActivityCard {...activity} />
            </div>
          ))}
        </div>

        <div className="activity-column">
          <h2>Running</h2>
          {activities.running.map((activity) => (
            <div key={activity.id} onClick={() => handleOpenModal(activity)}>
              <ActivityCard {...activity} />
            </div>
          ))}
        </div>

        <div className="activity-column">
          <h2>Swimming</h2>
          {activities.swimming.map((activity) => (
            <div key={activity.id} onClick={() => handleOpenModal(activity)}>
              <ActivityCard {...activity} />
            </div>
          ))}
        </div>
      </div>

      {selectedActivity && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedActivity.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedActivity.imageUrl} alt={selectedActivity.title} className="img-fluid mb-3" />
            <p>Recorrido alrededor de la ciudad de: {selectedActivity.city}</p>
            <p>{selectedActivity.length}</p>
            <p>{selectedActivity.duration}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Home;
