import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [selectedColour, setSelectedColour] = useState([]);

  const toggleColour = (colour) => {
    if (selectedColour.includes(colour)) {
      setSelectedColour(selectedColour.filter((c) => c !== colour));
    } else {
      setSelectedColour([...selectedColour, colour]);

    }
  };
  useEffect(() =>{
    console.log(selectedColour)
  },[selectedColour])

  return (
    <div className="bg-blue-100 w-72 h-[700px] flex flex-col">
      <div className="m-4">
        <h1 className="font-bold">Colour</h1>
        <ul className="m-3">
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-gray-100 cursor-pointer ${
                selectedColour.includes("red") ? "bg-red-300" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("red")}

            ></div>
            Red
          </li>
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-gray-100 cursor-pointer ${
                selectedColour.includes("blue") ? "bg-blue-200" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("blue")}
            ></div>
            Blue
          </li>
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-gray-100 cursor-pointer ${
                selectedColour.includes("green") ? "bg-green-200" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("green")}
            ></div>
            Green
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
