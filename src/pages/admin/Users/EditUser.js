import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { updatedata } from '../../../contextprovider/ContextProvider'
import Sidebar2 from '../sidebar/Sidebar'
import Navbar2 from '../navbar/Navbar'
import styles from "./styles.module.css";

const EditUser = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

    const { updata, setUPdata } = useContext(updatedata)
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const history = useNavigate("");

    const [inpval, setINP] = useState({
        firstName: "",
        lastName: "",
        email: "",
        // password:"",
        regid:"",
        center:"",
        city: "",
        role: "",
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


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:8080/api/users/showusers/${id}`, {
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
            setINP(data)
            console.log("get data");
            console.log(data)

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async (e) => {
        e.preventDefault();

        const { 
            firstName,
            lastName,
            email,
            // password,
            regid,
            center,
            city,
            role,

         } = inpval;
            try{
        const res2 = await fetch(`http://localhost:8080/api/users/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                 firstName,
            lastName,
            email,
            // password,
            regid,
            center,
            city,
            role,
            })
        });

        const data2 = await res2.json();
        console.log(data2);


        if (res2.status === 408) {
            setSuccess("");
           setError("User with given email already exists");
           
        }
        else if (res2.status ===409) { 
            setSuccess("");
            setError("")
            setError("User with given registration id already exists");
            
        }
        else if(res2.status === 200){
            setError("")
            setSuccess("Successfully Editted")
            history.push("/")
            setUPdata(data2);
           
            
        }
    } catch(error){
            setError(error.response.data.message);
            setSuccess("");
    }

    }

    return (
        <div className="home">
            <Sidebar2 />
            <div className="homeContainer">
                <Navbar2 />
                {/* {error && <div className={styles.error_msg}>{error}</div>}
                {success && <div className={styles.success_msg}>{success}</div>} */}
                <div className={styles.signup_container}>
                    <div className={styles.signup_form_container}>
                        {/* <div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>`
					</Link>
				</div> */}
                        <div className={styles.right}>
                            <form className={styles.form_container} onSubmit={updateuser}>
                                <h1>Edit User</h1>
                               
                                <input
                                    type="text"
                                    placeholder="Firsy Name"
                                    name="firstName"
                                    onChange={setdata}
                                    value={inpval.firstName}
                                    required
                                    className={styles.input}
                                />
                                 <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    onChange={setdata}
                                    value={inpval.lastName}
                                    required
                                    className={styles.input}
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={setdata}
                                    value={inpval.email}
                                    required
                                    className={styles.input}
                                />
                                 {/* <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={setdata}
                                    value={inpval.password}
                                    required
                                    className={styles.input}
                                /> */}
                                
                                <input
                                    type="text"
                                    placeholder="Center Name"
                                    name="center"
                                    onChange={setdata}
                                    value={inpval.center}
                                    required
                                    className={styles.input}
                                />
                                <input
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    onChange={setdata}
                                    value={inpval.city}
                                    required
                                    className={styles.input}
                                />
                                  <input
                                    type="text"
                                    placeholder="Registration ID"
                                    name="regid"
                                    onChange={setdata}
                                    value={inpval.regid}
                                    required
                                    className={styles.input}
                                />
                                <input
                                    type="text"
                                    placeholder="Role"
                                    name="role"
                                    onChange={setdata}
                                    value={inpval.role}
                                    required
                                    className={styles.input}
                                />


                                {error && <div className={styles.error_msg}>{error}</div>}
                                {success && <div className={styles.success_msg}>{success}</div>}
                                <div className={styles.btn_container}>
                                    <button type="submit" className={styles.green_btn} >
                                        Apply
                                    </button>

                                    <NavLink to="/users">
                                        <button className={styles.gray_btn} >
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


    )
}

export default EditUser;





