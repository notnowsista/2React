import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialButton = ({ icon }) => {
  let socialIcon;

  switch (icon) {
    case 'twitter':
      socialIcon = <FontAwesomeIcon icon={faSquareTwitter} size="2xl"/>;
      break;
    case 'facebook':
      socialIcon = <FontAwesomeIcon icon={faSquareFacebook} size="2xl"/>;
      break;
    case 'instagram':
      socialIcon = <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />;
      break;
  }

  return (
    <button className="social-button">
      {socialIcon}
    </button>
  );
};

export default SocialButton;
