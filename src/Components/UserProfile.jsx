import React from "react";
import SelectSmall from "../Components/SelectSmall";
import IconBreadcrumbs from "./IconBreadcrumbs";

const UserProfile = () => {
  return (
    <div className="p-2 shadow-md rounded-md bg-white">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl">Inventory</h3>
        <div className="flex gap-5 items-center">
          <div>
            <SelectSmall />
          </div>
          <div>
            <img src="src/assets/Images/Notification.png" alt="" />
          </div>
          <div>
            <img src="src/assets/Images/profile 1.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <IconBreadcrumbs path={"Inventory"} />
      </div>
    </div>
  );
};

export default UserProfile;
