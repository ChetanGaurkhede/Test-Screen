import React from "react";
import SelectSmall from "./SelectSmall";

const ProductStatus = ({ src, data = [] }) => {
  return (
    <div className="shadow-md bg-white p-5 border-[1px] rounded-xl text-lg {}">
      <div className="justify-between w-full flex">
        <div>
          <img
            src={src}
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

      <div className="flex justify-between xl:w-11/12 pt-4">
        {data.map((item, index) => (
          <div key={index}>
            <h2
              className={
                index === 1 || index === 2 ? "text-gray-600" : "text-red-300"
              }
            >
              {item.head}
            </h2>
            <p className="font-bold text-gray-600">{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductStatus;
