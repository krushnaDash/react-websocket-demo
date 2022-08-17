import React from "react";

const First= () => {
const date= new Date().toLocaleDateString();
 return(
 <div>
    <p>My component's {date} </p>
 </div>
);
}

export default First