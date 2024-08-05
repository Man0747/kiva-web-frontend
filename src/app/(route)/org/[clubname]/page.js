// ClubDetailsPage.js
import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ShiningText from '@/app/_components/ShiningText';
import ClubDetails from '../_components/ClubDetails';
import MemberCard from '../_components/MemberCard';


function ClubDetailsPage({ params }) {
  return (
    <>
      <ClubDetails clubname={params.clubname} logoSrc="/Cabinet.jpeg" instagramLink="https://www.instagram.com/yourusername" whatsappLink="https://wa.me/yourphonenumber" linkedinLink="https://www.linkedin.com/in/yourusername"/>

      <div className="flex justify-center mt-8">
        <ShiningText text="Office" />
      </div>
      <div className="flex flex-cols-3 p-2">
        <MemberCard
          name="Manas Khandelwal"
          position="General Secretary"
          imageSrc="/image.png"
        />
        <MemberCard
          name="Manas Khandelwal"
          position="General Secretary"
          imageSrc="/image.png"
        />
        <MemberCard
          name="Manas Khandelwal"
          position="General Secretary"
          imageSrc="/image.png"
        />
      </div>
     <div className="flex justify-center mt-8">
        <ShiningText text="Members" />
      </div>
     <MemberCard
        name="Manas Khandelwal"
        position="General Secretary"
        imageSrc="/image.png"
      />
    </>
  );
}

export default ClubDetailsPage;
