import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { Link, NavLink } from 'react-router-dom';
import { adddata, deldata } from '../contextprovider/ContextProvider';
import { updatedata } from '../contextprovider/ContextProvider'
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import './vaccine.scss';
const VaccineRequestDataTable = () => {

  
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
//   const cityy = localStorage.getItem("city");
//     console.log("city storage",cityy);
// const center = localStorage.getItem("center");
//     console.log("center storage",center);
const cityy="peshawar";
const center="islamabad";


  const { udata, setUdata } = useContext(adddata);

  const {updata, setUPdata} = useContext(updatedata);

  const {dltdata, setDLTdata} = useContext(deldata);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const getdata = async () => {

      const res = await fetch("http://localhost:8080/api/requests/"+cityy+"/"+center, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 500 || !data) {
          console.log("error ");
          setError("Internal server error");

      } else {
          setUserdata(data)
          console.log("get data");

      }
  }

  useEffect(() => {
      getdata();
  }, [])

//   const success = () =>{
//     <div class="alert alert-success alert-dismissible fade show" role="alert">
//     <strong>{udata.name}</strong>  added succesfully!
//     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>
//   }

  const deleteuser = async (id) => {

    const res2 = await fetch(`http://localhost:8080/api/requests/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
        console.log("error");
        setError("Internal server error");
    } else {
        setSuccess(true);
        console.log("request deleted");
        setDLTdata(deletedata)
        
        getdata();
    }

}
  

  return (
   <>
    {success ?  
    <> 
    <div class="alert alert-success alert-dismissible fade show" role="alert"> Approved Successfully!</div>
    </> : ""}

            <div className="mt-5">
                <div className="container">
                    {/* <div className="add_btn mt-2 mb-2">
                        <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
                    <Link to="/register" className="btn btn-primary">Add Vaccine</Link>
                    </div> */}

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">ID</th>
                                <th scope="col">Full name</th>
                                <th scope="col">CNIC</th>
                                <th scope="col">Age</th>
                                <th scope="col">City</th>
                                <th scope="col">Center</th>
                                <th scope="col">Vaccine</th>
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
                                                <td>{element.Fullname}</td>
                                                <td>{element.CNIC}</td>
                                                <td>{element.Age}</td>
                                                <td>{element.City}</td>
                                                <td>{element.Center}</td>
                                                <td>{element.Vaccine}</td>
                                                <td >
                                                    {/* <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink> */}
                                                    <button className="btn btn-success" onClick={() => 
                                                        {deleteuser(element._id)
                                                        alert("hello")
                                                        }}><CheckCircle /></button>
                                                </td>
                                            </tr>
                                            {error && <div >{error}</div>}
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
            </div>

              
        </>
  )
}

export default VaccineRequestDataTable