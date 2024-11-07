import React from "react";
import EnhancedTable from "../Components/EnhancedTable";
import SelectSmall from "../Components/SelectSmall";
import IconBreadcrumbs from "../Components/IconBreadcrumbs";

const Inventory = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-2 shadow-md rounded-md">
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
        <IconBreadcrumbs path={"Inventory"} />
      </div>
      <div className="mt-2">
        <EnhancedTable />
      </div>
    </div>
  );
};

export default Inventory;
