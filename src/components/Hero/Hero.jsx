import React from "react";
import Psychological_assessment from "../../Assets/psychological_assessment.png";
import DrManpreet from "../../Assets/DrManpreet.png";

export default function Hero() {
  return (
    <div className="px-2 md:px-0">
      <div class="container mx-auto p-4 ">
        <div class="flex flex-wrap">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div class="w-full md:w-1/2 text-center space-y-4">
              <p className="text-xl md:text-4xl font-semibold leading-10 ">
                #TalkToMissMp's
                <br className="hidden xl:block" /> Digital tool for,
                <br className="hidden xl:block" /> Psychological Assessments
              </p>
              <p className=" ">
                For further clinical evaluation and research, the APA is
                offering a number of “emerging measures” in Section III of
                DSM-5-TR. These patient assessment measures were developed to be
                administered at the initial patient interview and to monitor
                treatment progress...
              </p>
              <img
                src={DrManpreet}
                className="rounded-full h-16 w-16 object-cover mx-auto transform transition duration-300 ease-in-out hover:scale-105 hover:rotate-3"
              />

              <button className="bg-teal-500 p-3 text-softCream text-xl md:text-2xl transform transition duration-300 ease-in-out hover:scale-95">
                Book a Psychological Appoitment With Dr. Manpreet
              </button>
            </div>
            <div class="w-full md:w-1/2">
              <img
                src={Psychological_assessment}
                className="transform transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
