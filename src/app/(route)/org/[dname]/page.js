import ShiningText from '@/app/_components/ShiningText'
import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function ClubDetailsPage({params}) {
  return (
    <>
      <div className="flex flex-cols-2 p-8 justify-center">
        <div className="">
        <Image  className="rounded-2xl" src="/Cabinet.jpeg" alt="Student Council" width="200" height="200" />
        </div>
        <div className="ml-10">
          <ShiningText text={params.dname} />
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
      <div className="flex justify-center mt-8">
      <ShiningText text="Office" />
      </div>
      <div>
        
        <div className="ml-8">
          <Image className="mt-4" src="/image.png" alt="Student Council Members" width="150" height="150" />
        </div>
        <span className="flex mt-4 ml-3 font-bold text-2xl">Manas Khandelwal</span>
        <span className="flex mt-4 ml-16 text-lg">General Secretary</span>
      </div>
     
      <div className="flex justify-center mt-8">
      <ShiningText text="Team" />
      </div>
      <div>
        <div className="ml-10">
          <ShiningText  text="Design Head" size="medium" />
        </div>
        <div className="ml-8">
          <Image className="mt-4" src="/image.png" alt="Student Council Members" width="150" height="150" />
        </div>
        <span className="flex mt-4 ml-3 font-bold text-2xl">Manas Khandelwal</span>
        {/* <span className="flex mt-4 ml-16 text-lg">President</span> */}
      </div>
    </>
  )
}

export default ClubDetailsPage
