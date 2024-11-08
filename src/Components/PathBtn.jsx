import React from "react";

import { Link } from "react-router-dom";

const PathBtn = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="text-xl text-gray-600">
        Inventory summary
      </div>
      <div>
        <Link to="/category">
          <button className="bg-blue-500 p-2 px-4 rounded-xl text-white flex gap-3">
            <img src="src/assets/Images/fi_plus.png" alt="" /> Add a New
            Procduct
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PathBtn;
