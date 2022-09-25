// import Sidebar from "../../components/sidebar/Sidebar";
import Sidebar from "../sidebar/Sidebar"
import Navbar from "../navbar/Navbar";
import "./users.scss";
import Widget from "../../../components/widget/Widget";
import Featured from "../../../components/featured/Featured";
import Chart from "../../../components/chart/Chart";
import Sidebar2 from "../sidebar/Sidebar";
import Navbar2 from "../navbar/Navbar";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { adddata, deldata } from '../../../contextprovider/ContextProvider';
import { updatedata } from '../../../contextprovider/ContextProvider'
import AlertDialog from "../../../components/DeleteDialogue";

const Users = () => {
  
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { udata, setUdata } = useContext(adddata);

  const {updata, setUPdata} = useContext(updatedata);

  const {dltdata, setDLTdata} = useContext(deldata);
  const [success, setSuccess] = useState(false);
  

  const getdata = async () => {

      const res = await fetch("http://localhost:8080/api/users/show", {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
          console.log("error ");

      } else {
          setUserdata(data)
          console.log("get data");

      }
  }

  useEffect(() => {
      getdata();
  }, [])

  const deleteuser = async (id) => {

      const res2 = await fetch(`http://localhost:8080/api/users/delete/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const deletedata = await res2.json();
      console.log(deletedata);

      if (res2.status === 422 || !deletedata) {
          console.log("error");
      } else {
          console.log("vaccine deleted");
          setSuccess(true);
          setDLTdata(deletedata)
          getdata();
      }

  }

    
  return (
    // <div className="home">
     
    //   <Sidebar />
    //   <div className="homeContainer">
    //     <Navbar2 />

    //    </div>
    // </div>
    <>
    {success ?  
<> 
<div class="alert alert-danger alert-dismissible fade show" role="alert"> Deleted Successfully!</div>
</> : ""}

      

<div className="list">
 <Sidebar/>
 <div className="listContainer">
   <Navbar/>
       <div className="mt-5">
           <div className="container">
               <div className="add_btn mt-2 mb-2">
                   {/* <NavLink to="/register" className="btn btn-primary">Add data</NavLink> */}
               <Link to="/adduser" className="btn btn-primary">Add User</Link>
               </div>

               <table class="table">
                   <thead>
                       <tr className="table-dark">
                           <th scope="col">ID</th>
                           <th scope="col">Registration ID</th>
                           <th scope="col">Email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                           <th scope="col">Center</th>
                           <th scope="col">City</th>
                           <th scope="col">Action</th>
                           {/* <th scope="col"></th> */}
                       </tr>
                   </thead>
                   <tbody>

                       {
                           getuserdata.map((element, id) => {
                               return (
                                   <>
                                       <tr>
                                           <th scope="row">{element._id}</th>
                                           <td>{element.regid}</td>
                                           <td>{element.email}</td>
                                           <td>{element.firstName}</td>
                                           <td>{element.lastName}</td>
                                           <td>{element.center}</td>
                                           <td>{element.city}</td>
                                           <td >
                                               {/* <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink> */}
                                               {/* <NavLink to={`edituser/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                               <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button> */}
                                               <AlertDialog usersId={element._id} />
                                           </td>
                                       </tr>
                                   </>
                               )
                           })
                       }
                   </tbody>
               </table>
               </div>
       </div>

           </div>
       </div>
   </>


  );
};

export default Users;