import ClubAndChapters from "./_components/ClubAndChapters";
import ShiningText from "./_components/ShiningText";
import React from "react";

export default function Home() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="container mx-auto px-8 py-8">
        <div className="flex justify-center mb-8">
          <ShiningText text="Clubs And Chapters" />
        </div>
        <div className="flex flex-col items-center space-y-6">
          <ClubAndChapters
            logoSrc="/Cabinet.jpeg"
            title="Student Cabinet"
            whatsappLink="https://wa.me/yourphonenumber"
            linkedinLink="linkedinLink"
            instagramLink="instagramLink"
            viewMoreLink="/org/StudentCabinet"
          />
        </div>
      </div>
    </div>
  );
}
