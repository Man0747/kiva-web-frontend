import React from "react";
import Image from "next/image";

const General = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col items-center space-y-4 max-w-4xl pt-6 pb-10">
        {" "}
        {/* Added padding top and bottom */}
        {/* Adjust the margin and set a max-width */}
        <Image
          src="/cabinet.png"
          width={150}
          height={150}
          alt="vansh"
          className="mb-2 rounded" // Reduced bottom margin
        />
        <ellipse
          cx="603.5"
          cy="594.5"
          rx="603.5"
          ry="594.5"
          fill="#D9D9D9"
          className="absolute" // Make sure the ellipse doesn't interfere with the layout
        />
        <span className="text-3xl font-medium tracking-tight text-center max-w-xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text   text-transparent">
          STUDENT CABINET
        </span>
        <span className="text-1xl font-medium tracking-tight text-center max-w-xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text   text-transparent">
          The cabinet is responsible for assisting and supporting the school
          teams of teachers, house moderators in day to day affairs. These
          office bearers set role models to promote leadership for the entire
          student community.
        </span>
        {/* "View More" button */}
        <button className="px-4 py-2 mt-2 bg-black text-white rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          View More
        </button>
      </div>
    </div>
  );
};

export default General;
