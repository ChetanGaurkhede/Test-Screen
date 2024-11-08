import React from "react";
import EnhancedTable from "../Components/EnhancedTable";
import SelectSmall from "../Components/SelectSmall";
import IconBreadcrumbs from "../Components/IconBreadcrumbs";
import ProductCount from "../Components/ProductCount";
import ProductStatus from "../Components/ProductStatus";
import UserProfile from "../Components/UserProfile";
import { tableData2 } from "../constant/data";
import { selectProducts } from "../redux/reducer/reducer";
import { useSelector } from "react-redux";
import PathBtn from "../Components/PathBtn";

const ViewInventory = () => {
  const localData = useSelector(selectProducts);
  return (
    <div className="w-full px-2">
      <UserProfile />
      <div className="pt-3 ">
        <div>
          <PathBtn />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-5 md:gap-6 mt-4">
          <div className="w-full md:w-auto rounded-xl border p-3 bg-white shadow-md">
            <img
              src="src/assets/Images/image 1.png"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 lg:w-[40%]">
            <ProductStatus
              src="src/assets/Images/fi_pie-chart.png"
              data={[{ head: "Total Orders", count: "1" }]}
            />
          </div>
          <div className="w-full md:w-1/3 lg:w-[40%]">
            <ProductStatus
              src="src/assets/Images/fi_eye.png"
              data={[
                { head: "View", count: "1200" },
                { head: "Favourite", count: "23" },
              ]}
            />
          </div>
          <div className="w-full  lg:w-[49%]">
            <ProductStatus
              src="src/assets/Images/2 User.png"
              data={[
                { head: "All Orders", count: "1" },
                { head: "Pending", count: "0" },
                { head: "Completed", count: "1" },
              ]}
            />
          </div>
          <div className="w-full  lg:w-[49%]">
            <ProductStatus
              src="src/assets/Images/2 User.png"
              data={[
                { head: "Canceled", count: "0" },
                { head: "Returned", count: "0" },
                { head: "Damaged", count: "0" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <EnhancedTable data={[...tableData2, ...localData]} />
      </div>
    </div>
  );
};

export default ViewInventory;
