import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import A1 from "../../Assets/A1.jpg";
import A2 from "../../Assets/A2.jpg";

export default function Assessments() {
  const items = [
    {
      id: 1,
      Sr: "Assessment 1",
      Address: A1,
      Content: "This is Assessment 1",
    },
    {
      id: 2,
      Sr: "Assessment 2",
      Address: A2,
      Content: "This is Assessment 2",
    },
  ];
  return (
    <div className="px-2 md:px-0">
      <div class="container mx-auto p-4">
        <div class="flex flex-wrap  justify-center">
          <div className="w-full">
            <div className="flex items-center w-full md:w-1/3 mx-auto bg-white rounded-full px-4 py-2 hover:border hover:border-teal-500 focus-within:border focus-within:border-teal-500">
              <input
                type="text"
                placeholder="Search assessments"
                className="flex-grow outline-none text-gray-700 placeholder-gray-400 w-100"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-500 ml-2"
              />
            </div>
          </div>
          {items.map((item) => (
            <div key={item.id} className="w-full md:w-2/5 lg:w-1/4 p-2 mt-3">
              <div className="bg-teal-500 text-center space-y-3 py-3">
                <p className="text-xl font-bold">{item.Sr}</p>
                <img
                  src={item.Address}
                  className="h-16 w-16 mx-auto rounded-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
                />
                <p className="font-medium">{item.Content}</p>
                <div className="flex justify-center space-x-2">
                  <button className="bg-button1 px-2 py-1 rounded-lg transform transition duration-300 ease-in-out hover:scale-95">
                    Take Test
                  </button>
                  <button className="bg-button2 text-white px-2 py-1 rounded-lg transform transition duration-300 ease-in-out hover:scale-95">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
