import React from 'react';
import '../styles/Profile.css'; 

const Profile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.profileImage} alt={user.fullName} className="profile-image" />
      <div className="user-info">
        <h2>{user.fullName}</h2>
        <div className="user-times">
          <div>
            <span role="img" aria-label="cycling">🚴</span> {user.bestCyclingTime}
          </div>
          <div>
            <span role="img" aria-label="running">🏃</span> {user.bestRunningTime}
          </div>
          <div>
            <span role="img" aria-label="swimming">🏊</span> {user.bestSwimmingTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
