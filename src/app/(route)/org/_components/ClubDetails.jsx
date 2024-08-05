// ClubDetails.js
import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ShiningText from '@/app/_components/ShiningText';

function ClubDetails({ clubname, logoSrc ,instagramLink, linkedinLink, whatsappLink }) {
  return (
    <div className="flex flex-col p-8 items-center ">
      <div className="flex">
        <Image className="rounded-2xl" src={logoSrc} alt="Student Council" width="200" height="200" />
        <div className="ml-10">
          <ShiningText text={clubname} />
          <div className="flex space-x-4">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href={whatsappLink}
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
