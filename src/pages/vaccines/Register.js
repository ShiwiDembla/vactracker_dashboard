import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { adddata } from '../../contextprovider/ContextProvider';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
// import ArrowBack  from '@mui/icons-material';


const Register = () => {

    const { udata, setUdata } = useContext(adddata);

    const history = useNavigate();

    const [inpval, setINP] = useState({
        regid: "",
        centerName:"",
        vaccineName:"",
        vaccineQuantity: 0,

    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();

        const { regid, centerName,vaccineName,vaccineQuantity } = inpval;

        const res = await fetch("http://localhost:8080/api/vaccines/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                regid, centerName,vaccineName,vaccineQuantity
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        }
        else if(res.status === 402){
            alert("already registered");
        } 
        else if (res.status === 401) {
            alert("Add all the fields");
        }
        else {
            alert("Successfully added");
            // history.push("/")
            setUdata(data)
            console.log("data added");
           

        }
    }

    return (
        
<div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="container">
        <NavLink to="/vaccines"> home</NavLink>
            {/* <button className="btn btn-danger" >
            
            <ArrowBack/>
               </button> */}
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Registration ID</label>
                        <input type="text" value={inpval.regid} onChange={setdata} name="regid" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Center Name</label>
                        <input type="email" value={inpval.centerName} onChange={setdata} name="centerName" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Vaccine Name</label>
                        <input type="text" value={inpval.vaccineName} onChange={setdata} name="vaccineName" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Quantity</label>
                        <input type="number" value={inpval.vaccineQuantity} onChange={setdata} name="vaccineQuantity" max={10000} min={1} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mt-2 mb-2">
                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}
export default Register;
