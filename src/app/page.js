import ClubAndChapters from "./_components/ClubAndChapters";
import ShiningText from "./_components/ShiningText";
import React from "react";

export default function Home() {
  return (
    <>
      <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        {/* this css is for mobile compatibility */}

        <div className="container mx-auto px-8">
          {/* this also same for mobile compatible */}
          <div className="flex justify-center">
            <ShiningText text="ClubsAndSocieties" />
          </div>
          {/* <div className="mt-4 ">
            <General />
          </div> */}

          <div>
            <ClubAndChapters />
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
