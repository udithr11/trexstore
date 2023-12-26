import React from "react";
import Cart from "./Cart";

const Header = () => {
  return <div className="text-3xl bg-red-100 h-16 flex ">
    <div>
        <h1 className=" bg-orange-200 w-72 h-16 px-12 py-3">TeeRex Store</h1>
    </div>
    <div className="bg-slate-300 ml-auto w-80  ">
        <Cart/>
    </div>
  </div>;
};

export default Header;
