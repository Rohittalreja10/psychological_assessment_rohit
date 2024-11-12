import React from "react";
import AmericanPic from "../../Assets/American.png";

export default function American() {
  return (
    <div>
      <div className="container mx-auto text-center py-8 px-2 md:px-0">
        <img
          src={AmericanPic}
          className="h-16 w-auto object-cover mx-auto transform transition duration-300 ease-in-out hover:scale-110"
          alt="American"
        />

        <p className="mt-4 text-lg">
          Taken & built upon{" "}
          <span className="font-extrabold">
            one of the most trusted & authentic public repository
          </span>{" "}
          from APA's{" "}
          <span className="font-extrabold">
            DSM-5-TR
            <br className="hidden xl:block" /> Online Assessment Measures
          </span>
        </p>
      </div>
    </div>
  );
}
