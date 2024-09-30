// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import UserProfile from './Profile';
import ActivityCard from './ActivityCard';
import { getUserData } from '../services/mockUserService';
import '../styles/Home.css';
import LanguageSelector from '../components/LanguageSelector';

const Home = () => {
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState({ cycling: [], running: [], swimming: [] });
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const userData = getUserData();
    setUser(userData);

    const cyclingImage = 'https://cdn.shopify.com/s/files/1/0551/0388/1250/files/cycling_benefits_styrkr.jpg?v=1676894320';
    const runningImage = 'https://cdn-5f4f6e14c1ac180394b738c9.closte.com/wp-content/uploads/2018/03/01-1170x635.jpg'; 
    const swimmingImage = 'https://www.health.com/thmb/Yv4HuoQyNbHNNxgtOTm63zqxurQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Swimming-080c78802f384a4687df5a3b13d5611e-3719a8e40a3c4c43a63a4d795e47c505.jpg'; 

    const generateActivities = (sport) => {
      const activities = [];
      let imageUrl; 

      if (sport === 'Cycling') {
        imageUrl = cyclingImage;
      } else if (sport === 'Running') {
        imageUrl = runningImage;
      } else if (sport === 'Swimming') {
        imageUrl = swimmingImage;
      }

      for (let i = 0; i < 10; i++) {
        const activity = {
          id: i,
          title: sport + ' Session',
          length: Math.floor(Math.random() * 50 + 5) + 'k',
          duration: Math.floor(Math.random() * 2) + ':' + Math.floor(Math.random() * 60) + 'h',
          city: ['Cartagena', 'Bogotá', 'Medellín'][Math.floor(Math.random() * 3)],
          imageUrl: imageUrl 
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

  const handleOpenModal = (activity) => {
    setSelectedActivity(activity);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedActivity(null);
  };

  return (
    <div className="home-page">
      <LanguageSelector /> 

      <div className="activities-section">
        {/* Columna para Ciclismo */}
        <div className="activity-column">
          <h2>{t('Cycling')}</h2>
          {activities.cycling.map((activity) => (
            <div key={activity.id} onClick={() => handleOpenModal(activity)}>
              <ActivityCard {...activity} />
            </div>
          ))}
        </div>

        {/* Columna para Running */}
        <div className="activity-column">
          <h2>{t('Running')}</h2>
          {activities.running.map((activity) => (
            <div key={activity.id} onClick={() => handleOpenModal(activity)}>
              <ActivityCard {...activity} />
            </div>
          ))}
        </div>

        {/* Columna para Natación */}
        <div className="activity-column">
          <h2>{t('Swimming')}</h2>
          {activities.swimming.map((activity) => (
            <div key={activity.id} onClick={() => handleOpenModal(activity)}>
              <ActivityCard {...activity} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal para mostrar el detalle de la actividad seleccionada */}
      {selectedActivity && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedActivity.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedActivity.imageUrl} alt={selectedActivity.title} className="img-fluid mb-3" />
            <p>{t('City')}: {selectedActivity.city}</p>
            <p>{t('Length')}: {selectedActivity.length}</p>
            <p>{t('Duration')}: {selectedActivity.duration}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              {t('Close')}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <UserProfile user={user} />
    </div>
  );
};

export default Home;
