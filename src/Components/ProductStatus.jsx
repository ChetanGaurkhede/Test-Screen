import React from "react";
import SelectSmall from "./SelectSmall";

const ProductStatus = () => {
  return (
    <div className="shadow-md bg-white p-5 border-[1px] rounded-xl text-lg ">
      <div className=" justify-between  w-full flex">
        <div>
          <img
            src="src/assets/Images/2 User.png"
            alt="Bag"
            className="p-2 bg-yellow-50 border-2 rounded-xl"
          />
        </div>
        
        <div>
          <select name="duration" id="time" className="text-sm text-gray-600">
            <option>Last Week</option>
            <option>Last Month</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between xl:w-11/12 pt-4 ">
        <div>
          <h2 className="text-red-300">Low Stock Alert</h2>
          <p className="font-bold text-gray-600">23</p>
        </div>
        <div>
          <h2 className="text-gray-500">Expired</h2>
          <p className="font-bold text-gray-600">3 </p>
        </div>
        <div>
          <h2 className="text-gray-500">1 Star Rating</h2>
          <p className="font-bold text-gray-600">2</p>
        </div>
      </div>
    </div>
  );
};

export default ProductStatus;
