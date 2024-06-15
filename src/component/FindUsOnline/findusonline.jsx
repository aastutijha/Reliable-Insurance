import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = [
  { name: 'Facebook', icon: faFacebook, url: 'https://www.facebook.com/reliablelifeinsurancelimited' },
  { name: 'Twitter', icon: faTwitter, url: 'https://www.twitter.com/' },
  { name: 'LinkedIn', icon: faLinkedin, url: 'https://linkedin.com/' },
  { name: 'YouTube', icon: faYoutube, url: 'https://www.youtube.com/watch?v=iL0Ub5Br7dw' },
  { name: 'Instagram', icon: faInstagram, url: 'https://www.instagram.com/reliablelifenep/' },
];

const FindUsOnline = () => {
  return (
    <div className="container mx-auto py-16 text-center bg-blue-00">
      <h2 className="text-4xl font-bold mb-10">
        <span className="text-orange-500">Find Us</span>{' '}
        <span className="text-gray-500">Online</span>
      </h2>
      <div className="flex justify-center space-x-8">
        {socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={social.icon} className="text-4xl" />
            <span className="sr-only">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FindUsOnline;
