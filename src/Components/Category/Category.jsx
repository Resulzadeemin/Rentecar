import React from "react";
import { useState } from "react";
import OurCar from "../OurCar/Ourcar"
import OurOffice from "../OurOffice/Office"
import "./Category.css"
function Category(props) {
    const [cat2,setCat2] = useState(props.componentName)
  return (
    <div className="cat">
      <span type="span2" onClick={()=>setCat2(<OurCar />)}>Popular car</span>
      <span type="span2" onClick={()=>setCat2(<OurOffice />)}>Our Office</span>
      {cat2}
    </div>
  );
}

export default Category;
