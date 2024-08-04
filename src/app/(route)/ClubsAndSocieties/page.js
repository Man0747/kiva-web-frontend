import ShiningText from "@/app/_components/ShiningText";
import React from "react";
import Cabinet from "./_components/Cabinet";
import Council from "./_components/Council";
import Burs from "./_components/Burs";
import Google from "./_components/Google";

function ClubsAndSocietiesList() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      {/* this css is for mobile compatibility */}

      <div className="container mx-auto px-8">
        {/* this also same for mobile compatible */}
        <div className="flex justify-center">
          <ShiningText text="ClubsAndSocieties" />
        </div>
        <div className="mt-4">
          <Cabinet />
        </div>
        <div className="mt-4">
          <Council />
        </div>

        <div className="mt-4">
          <Burs />
        </div>

        <div className="mt-4">
          <Google />
        </div>
      </div>
    </div>

    // <div>
    //   <div className="flex justify-center">
    //     <ShiningText text="ClubsAndSocieties" />
    //   </div>

    //   <div className="mt-4">
    //     <Cabinet />
    //   </div>

    //   <div className="mt-4">
    //     <Council />
    //   </div>
    // </div>
  );
}

export default ClubsAndSocietiesList;
