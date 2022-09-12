// import React, { useContext, useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { adddata } from '../../../contextprovider/ContextProvider';
// import Navbar2 from '../navbar/Navbar';
// import Sidebar2 from '../sidebar/Sidebar';
// // import ArrowBack  from '@mui/icons-material';


// const AddUser = () => {

//     const { udata, setUdata } = useContext(adddata);

//     const history = useNavigate();

//     const [inpval, setINP] = useState({
//         regid: "",
//         centerName:"",
//         email : "",
//         password : "",
//         firstName : "",
//         lastName : "",
//         center: "",
//         city:"",
//         role: "",
//     })

//     const setdata = (e) => {
//         console.log(e.target.value);
//         const { name, value } = e.target;
//         setINP((preval) => {
//             return {
//                 ...preval,
//                 [name]: value
//             }
//         })
//     }


//     const addinpdata = async (e) => {
//         e.preventDefault();

//         const { regid, firstName, lastName, email, password, center,city,role } = inpval;
        
//         const res = await fetch("http://localhost:8080/api/users/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//               firstName, lastName, email, password,  regid,  center,city,role
//             })
//         });

//         const data = await res.json();
//         console.log(data);

//         if (res.status === 422 || !data) {
//             console.log("error ");
//             alert("error");

//         }
//         else if(res.status === 402){
//             alert("already registered");
//         } 
//         else if (res.status === 401) {
//             alert("Add all the fields");
//         }
//         else {
//             alert("Successfully added");
//             // history.push("/")
//             setUdata(data)
//             console.log("data added");
           

//         }
//     }

//     return (
        
// <div className="list">
//       <Sidebar2/>
//       <div className="listContainer">
//         <Navbar2/>
//         <div className="container">
//         <NavLink to="/vaccines"> home</NavLink>
//             {/* <button className="btn btn-danger" >
            
//             <ArrowBack/>
//                </button> */}
//             <form className="mt-4">
//                 <div className="row">
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputEmail1" class="form-label">Registration ID</label>
//                         <input type="text" value={inpval.regid} onChange={setdata} name="regid" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                     </div>
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputPassword1" class="form-label">Center Name</label>
//                         <input type="text" value={inpval.center} onChange={setdata} name="center" class="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputEmail1" class="form-label">First Name</label>
//                         <input type="text" value={inpval.firstName} onChange={setdata} name="firstName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                     </div>
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputPassword1" class="form-label">Last Name</label>
//                         <input type="text" value={inpval.lastName} onChange={setdata} name="lastName" class="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputEmail1" class="form-label">Email</label>
//                         <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                     </div>
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputPassword1" class="form-label">Password</label>
//                         <input type="password" value={inpval.password} onChange={setdata} name="password" class="form-control" id="exampleInputPassword1" />
//                     </div>

//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputPassword1" class="form-label">City</label>
//                         <input type="text" value={inpval.city} onChange={setdata} name="city" class="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div class="mb-3 col-lg-6 col-md-6 col-12">
//                         <label for="exampleInputPassword1" class="form-label">Role</label>
//                         <input type="text" value={inpval.role} onChange={setdata} name="role" max={10000} min={1} class="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div class="mt-2 mb-2">
//                     <button type="submit" onClick={addinpdata} class="btn btn-primary">Add</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//         </div>
//         </div>
//     )
// }
// export default AddUser;


import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate , NavLink} from "react-router-dom";
// import { NavLink, useNavigate } from 'react-router-dom'
import styles from "./styles.module.css";
import Navbar2 from '../navbar/Navbar';
import Sidebar2 from '../sidebar/Sidebar';

const AddUser = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			// headers = { 'content-type': 'application/json' };
			const { data: res } = await axios.post(url, data);
			// navigate("/login");
			console.log(res.message);
            setError("");
            setSuccess(res.message);
            setData({
                firstName: "",
                lastName: "",
                email: "",
                regid: "",
                center: "",
                city: "",
                role: "",
                password: "",
                });

            // alert("added succesfully")
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
                setSuccess("");
			}
		}
	};

	return (
        <div className="home">
      <Sidebar2 />
      <div className="homeContainer">
    <Navbar2 />
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				{/* <div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div> */}
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Add User</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
                        
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="Center Name"
							name="center"
							onChange={handleChange}
							value={data.center}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="City"
							name="city"
							onChange={handleChange}
							value={data.city}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="Registration ID"
							name="regid"
							onChange={handleChange}
							value={data.regid}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="Role"
							name="role"
							onChange={handleChange}
							value={data.role}
							required
							className={styles.input}
						/>



						{error && <div className={styles.error_msg}>{error}</div>}
                        {success && <div className={styles.success_msg}>{success}</div>}
                        <div className={styles.btn_container}>
						<button type="submit" className={styles.green_btn} >
							Add
						</button>


                        
                        <NavLink to="/users"> 
                        <button  className={styles.gray_btn} >
                                Back
						</button></NavLink>
                        </div>
					</form>
                    {/* <button type="cancel" onClick={<Link to="/users" />} className={styles.green_btn} >
                                Back
						</button> */}
				</div>
			</div>
		</div>
        </div>
		</div>
	);
};

export default AddUser;