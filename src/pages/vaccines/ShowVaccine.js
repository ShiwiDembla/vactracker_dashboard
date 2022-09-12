import "./vaccine.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { adddata, deldata } from '../../contextprovider/ContextProvider';
import { updatedata } from '../../contextprovider/ContextProvider'



const ShowVaccine = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { udata, setUdata } = useContext(adddata);

    const {updata, setUPdata} = useContext(updatedata);

    const {dltdata, setDLTdata} = useContext(deldata);
    const [success, setSuccess] = useState(false);
    

    const getdata = async () => {

        const res = await fetch("http://localhost:8080/api/vaccines/", {
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

        const res2 = await fetch(`http://localhost:8080/api/vaccines/delete/${id}`, {
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

        <>
         {success ?  
    <> 
    <div class="alert alert-danger alert-dismissible fade show" role="alert"> Deleted Successfully!</div>
    </> : ""}

            {/* {
                udata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            {
                updata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

            {
                dltdata ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.vaccineName}</strong>  deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            } */}

<div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        {/* <NavLink to="/register" className="btn btn-primary">Add data</NavLink> */}
                    <Link to="/register" className="btn btn-primary">Add Vaccine</Link>
                    </div>

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">ID</th>
                                <th scope="col">Registration ID</th>
                                <th scope="col">Center</th>
                                <th scope="col">Vaccine</th>
                                <th scope="col">Quantity</th>
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
                                                <td>{element.centerName}</td>
                                                <td>{element.vaccineName}</td>
                                                <td>{element.vaccineQuantity}</td>
                                                <td >
                                                    {/* <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink> */}
                                                    <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
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
    )
}

export default ShowVaccine
