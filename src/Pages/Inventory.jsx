import React from "react";
import EnhancedTable from "../Components/EnhancedTable";
import SelectSmall from "../Components/SelectSmall";
import IconBreadcrumbs from "../Components/IconBreadcrumbs";
import ProductCount from "../Components/ProductCount";
import ProductStatus from "../Components/ProductStatus";
import { Link } from "react-router-dom";

const Inventory = () => {
  return (
    <div className="w-full px-2">
      <div className="flex items-center justify-between p-2 shadow-md rounded-md bg-white">
        <h3 className="text-2xl">Inventory</h3>
        <div className="flex gap-2 items-center">
          <div>
            <SelectSmall />
          </div>
          <div>
            <img src="src/assets/Images/Bag.png" alt="" />
          </div>
          <div>
            <img src="src/assets/Images/Bag.png" alt="" />
          </div>
        </div>

      </div>
      <div className="pt-3 ">
        <div className="flex w-full justify-between">
               <IconBreadcrumbs path={"Inventory"} />
          <div>
            <Link to="/category">
              <button className="bg-blue-500 p-2 px-4 rounded-xl text-white flex gap-3"><img src="src/assets/Images/fi_plus.png" alt="" /> Add a New Procduct</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-9 mt-3">
          <div className="w-full md:w-1/2">
            <ProductCount />
          </div>
          <div className="w-full md:w-1/2">
            <ProductStatus />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <EnhancedTable />
      </div>
    </div>
  );
};

export default Inventory;
