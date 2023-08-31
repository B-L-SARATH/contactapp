import React from "react";
import {Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="text-center container mt-5 p-5">
    <img src="https://tse4.mm.bing.net/th?id=OIP.upVWr4cu4yWvsQwLuYyprQHaHa&pid=Api&P=0" alt="contact img" style={{width:"170px"}}/>
      <h1 >Contacts application</h1>
      <Link to ="/contacts" className="btn contactbtn"> Get started </Link>
    </div>
  );
}

export default Homepage;
