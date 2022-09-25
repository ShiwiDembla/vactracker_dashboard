import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { Link, NavLink } from 'react-router-dom';
import { adddata, deldata } from '../../contextprovider/ContextProvider';
import { updatedata } from '../../contextprovider/ContextProvider'
// import Sidebar from '../../components/sidebar/Sidebar';
// import Navbar from '../../components/navbar/Navbar';
import Sidebar2 from '../sidebar/Sidebar';
import Navbar2 from '../navbar/Navbar';
import './vaccinated.scss';

const vaccinated = () => {

  
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { udata, setUdata } = useContext(adddata);

  const {updata, setUPdata} = useContext(updatedata);

  const {dltdata, setDLTdata} = useContext(deldata);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const getdata = async () => {

      const res = await fetch("http://localhost:8080/api/vaccinated/", {
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

//   const deleteuser = async (id) => {

//     const res2 = await fetch(`http://localhost:8080/api/slots/${id}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     const deletedata = await res2.json();
//     console.log(deletedata);

//     if (res2.status === 422 || !deletedata) {
//         console.log("error");
//         setError("Internal server error");
//     } else {
//         setSuccess(true);
//         console.log("request deleted");
//         setDLTdata(deletedata)
        
//         getdata();
//     }

// }
  
// const addvaccinated = async (id, Username, Email, CNIC, Phone, City, Center, Vaccine, UserID, Date, Time) => {

// const res = await fetch("http://localhost:8080/api/vaccinated/add", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                Username, Email, CNIC, Phone, City, Center, Vaccine, UserID, Date, Time
//             })
//         });
//         const data = await res.json();
//         console.log(data);

//         if (res.status === 422 || !data) {
//             console.log("error ");
//             alert("error");

//         }
//         else if(res.status === 402){
//             alert("already vaccinated");
//         } 
        
//         else {
//             alert("Successfully added");
//             // history.push("/")
//             setUdata(data)
//             console.log("data added");
           

//         }
//     }




  return (
   <>
    
    <div className="list">
      <Sidebar2/>
      <div className="listContainer">
        <Navbar2/>
        {success ?  
    <> 
    <div class="alert alert-success alert-dismissible fade show" role="alert"> Vaccinated Successfully!</div>
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
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">CNIC</th>
                                <th scope="col">City</th>
                                <th scope="col">Center</th>
                                <th scope="col">Vaccine</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">User ID</th>
                                {/* <th scope="col">Action</th> */}
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
                                                <td>{element.Username}</td>
                                                <td>{element.Email}</td>
                                                <td>{element.Phone}</td>
                                                <td>{element.CNIC}</td>
                                                <td>{element.City}</td>
                                               
                                                <td>{element.Center}</td>
                                                <td>{element.Vaccine}</td>
                                                <td>{element.Date}</td>
                                                <td>{element.Time}</td>
                                                <td>{element.UserID}</td>

                                                <td >
                                                    {/* <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink> */}
                                                    {/* <button className="btn btn-success" onClick={() => {
                                                        // addvaccinated(element._id, element.Username, element.Email, element.CNIC, element.Phone, element.City, element.Center, element.Vaccine, element.UserID, element.Date, element.Time)
                                                        // deleteuser(element._id)
                                                        // alert("Hello")
                                                     } }><CheckCircle /></button> */}
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

            </div>
            </div>
        </>
  )
}

export default vaccinated