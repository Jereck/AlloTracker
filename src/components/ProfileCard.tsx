import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutUser } from '../firebaseConfig';
import './ProfileCard.component.scss';

const ProfileCard: React.FC = () => { 
  return (
    <div className="container">
      <header>
        <div className="bio">
          <img src="http://www.croop.cl/UI/twitter/images/up.jpg" alt="background" className="bg" />
        </div>

        <div className="avatarcontainer">
          <img src="http://www.croop.cl/UI/twitter/images/carl.jpg" alt="avatar" className="avatar"/>
        </div>
      </header>

      <div className="content">
        <div className="data">
          <p style={{textAlign: 'center'}}>Your Shopping Habits This Month</p>
          <ul>
            <li>4 <span>On List</span></li>
            <li>1,235 <span>Bought</span></li>
            <li>$1,253 <span>Spent</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;