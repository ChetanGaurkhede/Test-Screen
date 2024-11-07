import React from "react";

const ProductCount = () => {
  return (
    <div className="bg-blue-500 p-5 rounded-xl text-white text-lg shadow-md">
      <div className="p-2 bg-blue-400 rounded-xl w-fit flex flex-col justify-between">
          <img
            src="src/assets/Images/Folder.png"
            alt="Bag"
            className="w-6 h-6 xl:w-auto xl:h-auto"
          />
      </div>
      <div className="flex justify-between w-3/5 lg:1/2 pt-5">
        <div>
          <h2>All Products</h2>
          <p className="font-bold">350</p>
        </div>
        <div>
          <h2>Active</h2>
          <p className="font-bold">360 <span className="font-normal text-sm">86%</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProductCount;
