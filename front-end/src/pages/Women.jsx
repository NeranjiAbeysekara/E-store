import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Women = () => {
    const womenCategories = ["Dresses", "Tops", "Skirts", "Shoes", "Accessories"];
    return (
      <div>
        <Sidebar categories={womenCategories} />
        {/* Rest of the women's page content */}
      </div>
    );
  };
  export default Women;