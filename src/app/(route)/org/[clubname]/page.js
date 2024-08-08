"use client"; 
import React from 'react';
import ShiningText from '@/app/_components/ShiningText';
import ClubDetails from '../_components/ClubDetails';
import MemberCard from '../_components/MemberCard';
import { DATA } from '@/app/data';

function ClubDetailsPage({ params }) {
  const clubname = params.clubname;
  const decodedClubName = decodeURIComponent(clubname);

  const club = DATA.find(c => c.name.toLowerCase() === decodedClubName.toLowerCase());

  if (!club) {
    return <div>Club not found</div>;
  }

  return (
    <>
      <ClubDetails
        clubname={club.name}
        logoSrc={club.logo}
        description={club.description}
        instagramLink={club.social.instagram}
        whatsappLink={club.social.whatsapp}
        linkedinLink={club.social.linkedin}
      />     

      {/* Display All Teams */}
      {club.teams.map(team => (
        <div key={team.name}>
          <div className="flex justify-center mt-8">
            <ShiningText text={team.name} />
          </div>
          <div className="flex flex-cols-3 p-2">
            {team.members.map(member => (
              <MemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                imageSrc={member.photo}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ClubDetailsPage;
