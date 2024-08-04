import ShiningText from "@/app/_components/ShiningText";
import React from "react";
import Cabinet from "./_components/Cabinet";
import Council from "./_components/Council";

function ClubsAndSocietiesList() {
  return (
    <div>
      <div className="flex justify-center">
        <ShiningText text="ClubsAndSocieties" />
      </div>

      <div>
        <Cabinet />
      </div>

      <div>
        <Council />
      </div>
    </div>
  );
}

export default ClubsAndSocietiesList;
