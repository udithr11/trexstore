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
    <div className="bg-blue-100 w-72 h-[700px] flex flex-col justify-between">
      <div className="m-4">
        <h1 className="font-bold">Colour</h1>
        <ul className="m-3">
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-black cursor-pointer ${
                selectedColour.includes("red") ? "bg-red-500" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("red")}

            ></div>
            Red
          </li>
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-black cursor-pointer ${
                selectedColour.includes("blue") ? "bg-blue-500" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("blue")}
            ></div>
            Blue
          </li>
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-black cursor-pointer ${
                selectedColour.includes("green") ? "bg-green-500" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("green")}
            ></div>
            Green
          </li>
        </ul>
      </div>
      <div className="m-4">
        <h1 className="font-bold">Gender</h1>
        <ul className="m-3">
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-black cursor-pointer ${
                selectedColour.includes("men") ? "bg-black" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("men")}

            ></div>
            Men
          </li>
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-black cursor-pointer ${
                selectedColour.includes("women") ? "bg-black" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("women")}
            ></div>
            Women
          </li>
          
        </ul>
      </div><div className="m-4">
        <h1 className="font-bold">Price</h1>
        <ul className="m-3">
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-black cursor-pointer ${
                selectedColour.includes("250") ? "bg-black" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("250")}

            ></div>
            0-250
          </li>
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-black cursor-pointer ${
                selectedColour.includes("450") ? "bg-black" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("450")}
            ></div>
            251-450
          </li>
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-black cursor-pointer ${
                selectedColour.includes("450+") ? "bg-black" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("450+")}
            ></div>
            450+
          </li>
        </ul>
      </div><div className="m-4">
        <h1 className="font-bold">Type</h1>
        <ul className="m-3">
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-black cursor-pointer ${
                selectedColour.includes("polo") ? "bg-black" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("polo")}

            ></div>
            Polo
          </li>
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-black cursor-pointer ${
                selectedColour.includes("Hoodie") ? "bg-black" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("Hoodie")}
            ></div>
            Hoodie
          </li>
          <li className="flex items-center my-3">
            <div
              className={`w-4 h-4 mr-4 border border-black cursor-pointer ${
                selectedColour.includes("Basic") ? "bg-black" : "bg-slate-200"
              }`}
              onClick={()=>toggleColour("Basic")}
            ></div>
            Basic
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
