import React from "react";
import SelectSmall from "../Components/SelectSmall";


const UserProfile = () => {
  return (
    <div className="flex items-center justify-between p-2 shadow-md rounded-md bg-white">
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
  );
};

export default UserProfile;
