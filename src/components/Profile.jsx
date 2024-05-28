import React from 'react';
/* import PropTypes from 'prop-types'; */
import defaultAvatar from '../images/avatar.webp';
/* import '../stylesheets/Profile.css'; */

function Profile({photo}) {
  const avatar = photo === '' ? defaultAvatar : photo;
  return (
    <div className="card__authorPhoto" style={{ backgroundImage: `url(${avatar})` }} >
      <div
        className="profile__avatar"
       
      ></div>
    </div>
  );
}

/* Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
}; */

export default Profile;