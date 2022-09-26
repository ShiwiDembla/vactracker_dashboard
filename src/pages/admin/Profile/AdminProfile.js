
import Sidebar2 from "../sidebar/Sidebar";
import Navbar2 from "../navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';

const AdminProfile = () => {
    const role = localStorage.getItem("role");
  console.log(role)
    
  return (
   
<div className="list">
    { (role == 'admin') ? <><Sidebar2 /></>: <><Sidebar /></>}
 {/* <Sidebar2/> */}
 <div className="listContainer">
   <Navbar2/>
       <div className="mt-5">
           <div className="container">
               <div className="add_btn mt-2 mb-2">
                   
       </div>

           </div>
       </div>
    </div>
</div>


  );
};

export default AdminProfile;