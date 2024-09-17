import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import './Men.css'
const Men = () => {
  const menCategories = ["Shirts", "Pants", "Jackets", "Shoes", "Accessories"];
  return (
    <div className="men">
      <Sidebar categories={menCategories} />
      {/* Rest of the men's page content */}
     <p>hiiiii Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores error perferendis itaque qui, ab dicta eum esse facilis dolore iusto atque tenetur quis, enim repellendus aliquid! Molestias, esse quod.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore incidunt facere, sunt repellendus odit impedit magnam esse quibusdam possimus aliquam placeat? Asperiores nam esse atque voluptates magni reiciendis dicta necessitatibus?     
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro quisquam, explicabo aut sit ipsam! Est, nam? Esse, consequatur soluta? Consequatur tenetur accusamus dicta iusto quam in mollitia, non porro.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, assumenda. Voluptates velit cumque consequuntur officia, perspiciatis dolores aspernatur voluptatem delectus magni nihil possimus, commodi voluptas nesciunt nostrum, quibusdam sunt eos?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum ut porro excepturi deserunt! Nam ducimus recusandae culpa, at, alias rerum enim vel quasi cumque, similique eius explicabo provident exercitationem.
    
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eum excepturi voluptatum tenetur odit ducimus molestias reiciendis deleniti aperiam magni vero provident quidem quaerat numquam esse, vel, velit aspernatur explicabo.</p>
</div>
    
  );
};

export default Men;