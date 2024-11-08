import React from "react";
import EnhancedTable from "../Components/EnhancedTable";
import IconBreadcrumbs from "../Components/IconBreadcrumbs";
import ProductCount from "../Components/ProductCount";
import ProductStatus from "../Components/ProductStatus";
import { Link } from "react-router-dom";
import UserProfile from "../Components/UserProfile";
import { tableData } from "../constant/data";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/reducer/reducer";
import PathBtn from "../Components/PathBtn";

const Inventory = () => {
  const localData = useSelector(selectProducts);

  console.log("tableData", tableData);
  return (
    <div className="w-full px-2">
      <UserProfile />
      <div className="pt-3 ">
        <div>
          <PathBtn />
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-9 mt-3">
          <div className="w-full md:w-1/2">
            <ProductCount />
          </div>
          <div className="w-full md:w-1/2">
            <ProductStatus
              src="src/assets/Images/2 User.png"
              data={[
                { head: "Low Stock Alert", count: "23" },
                { head: "Expired", count1: "3" },
                { head: "1 Star Rating", count1: "2" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <EnhancedTable data={[...localData, ...tableData]} />
      </div>
    </div>
  );
};

export default Inventory;
