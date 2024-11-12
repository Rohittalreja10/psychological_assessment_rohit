import React from "react";

export default function Header() {
  return (
    <div class="bg-gradient-to-r from-teal-300 to-teal-500 px-2 md:px-0">
      <div class="container mx-auto ">
        <div class="flex flex-col md:flex-row justify-between items-center p-4 text-softCream ">
          <div className="flex space-x-3 md:space-x-9 mt-0">
            <button
              class="relative overflow-hidden px-1  py-2 text-white font-medium rounded-md transition duration-300 ease-in-out group"
              onClick={() => (window.location.href = "https://sidlabs.net/")}
            >
              <span class="absolute inset-0 bg-teal-500 transform -translate-x-full transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span class="relative z-10">Powered by SidLabs</span>
            </button>
          </div>

          <div class="flex space-x-3 md:space-x-9 my-0">
            <button
              class="relative overflow-hidden px-1 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out group"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/withlovemissmp/")
              }
            >
              <span class="absolute inset-0 bg-teal-500 transform -translate-x-full transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span class="relative z-10">About Dr. Manpreet</span>
            </button>
            <button class="relative overflow-hidden px-1 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out group">
              <span class="absolute inset-0 bg-teal-500 transform -translate-x-full transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span class="relative z-10">About these Assessments</span>
            </button>
            <button
              class="relative overflow-hidden px-1 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out group"
              onClick={() =>
                (window.location.href = "https://care.talktomissmp.com/")
              }
            >
              <span class="absolute inset-0 bg-teal-500 transform -translate-x-full transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span class="relative z-10">The CARE Platform</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
