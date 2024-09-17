import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Kids = () => {
    const kidsCategories = ["T-shirts", "Pants", "Shoes", "Accessories", "School Gear"];
  return (
    <div>
      <Sidebar categories={kidsCategories} />
      {/* Rest of the kids' page content */}
    </div>
  );
};
  export default Kids;