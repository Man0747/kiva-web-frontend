// ClubDetails.js
import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ShiningText from '@/app/_components/ShiningText';

function ClubDetails({ clubname }) {
  return (
    <div className="flex flex-col p-8 justify-center">
      <div className="flex">
        <Image className="rounded-2xl" src="/Cabinet.jpeg" alt="Student Council" width="200" height="200" />
        <div className="ml-10">
          <ShiningText text={clubname} />
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClubDetails;
