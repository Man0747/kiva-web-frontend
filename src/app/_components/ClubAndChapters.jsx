"use client"; 
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation"; 

const ClubAndChapters = (props) => {
  const { logoSrc, title, instagramLink, linkedinLink, whatsappLink, viewMoreLink } = props;
  const router = useRouter(); // Initialize router

  const handleViewMore = () => {
    router.push(viewMoreLink); // Redirect to the provided link
  };

  return (
    <div className="bg-[#262938] p-4 rounded-lg shadow-md flex flex-col items-center space-y-4 max-w-sm mx-auto">
      {/* Logo Section */}
      <div className="flex-shrink-0 rounded-full">
        <Image
          className="rounded-full"
          height={100} // Set the height of the logo
          width={100} // Set the width of the logo
          src={logoSrc} // Dynamic logo path from props
          alt="Club Logo"
        />
      </div>
      {/* Content Section */}
      <div className="text-center">
        <div className="text-white font-semibold text-2xl mb-4">
          {title} {/* Dynamic title from props */}
        </div>
        <div className="flex justify-center space-x-4 mb-4">
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
        {/* View More Button */}
        <button
          onClick={handleViewMore}
          className="px-4 py-2 mt-2 bg-black text-white rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default ClubAndChapters;
