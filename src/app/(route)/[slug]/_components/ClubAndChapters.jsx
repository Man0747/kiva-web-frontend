import React from "react";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa"; // Import the correct icons

const ClubAndChapters = (props) => {
  const { logoSrc, title, instagramLink, linkedinLink, whatsappLink } = props;

  return (
    <div className="bg-[#262938] p-4 rounded-lg shadow-md flex items-center space-x-4 max-w-sm">
      {/* Logo Section */}
      <div className="flex-shrink-0 rounded-full">
        <img
          className="h-16 w-16"
          src={logoSrc} // Dynamic logo path from props
          alt="Club Logo"
        />
      </div>
      {/* Content Section */}
      <div>
        <div className="text-white font-semibold text-lg">
          {title} {/* Dynamic title from props */}
        </div>
        <div>
          <div className="flex space-x-4">
            {instagramLink && (
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={30} />
              </a>
            )}
            {linkedinLink && (
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
            )}
            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={30} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubAndChapters;
