import React from 'react';

import './UserBox.scss';
import PlaceholderSrc from '../assets/img/mock_profile.png';
import mockData from '../assets/mock.db.json';

const { user } = mockData;

export const UserBox = () => {
  return (
    <div className="UserBox">
      <div
        className="profile-img"
        style={{ backgroundImage: `url(${user.profileImg || PlaceholderSrc})` }}
      />
      <div className="user-name">{user.name}</div>
      <div className="user-job">{user.jobTitle}</div>
    </div>
  );
};
