import React from "react";
import ShiningText from "./_components/ShiningText";
import ClubAndChapters from "./_components/ClubAndChapters";
import { DATA } from '@/app/data';

export default function Home() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="container mx-auto px-8 py-8">
        <div className="flex justify-center mb-8">
          <ShiningText text="Clubs And Chapters" />
        </div>
        <div className="flex flex-col items-center space-y-6">
          {DATA.map(club => {
            // Encode the club name for the URL
            const encodedClubName = encodeURIComponent(club.name);
            
            return (
              <ClubAndChapters
                key={club.name}
                logoSrc={club.logo}
                title={club.name}
                whatsappLink={club.social.whatsapp}
                linkedinLink={club.social.linkedin}
                instagramLink={club.social.instagram}
                viewMoreLink={`/org/${encodedClubName}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
