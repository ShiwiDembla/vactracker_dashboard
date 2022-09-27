import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { updatedata } from '../../../contextprovider/ContextProvider'
import Sidebar2 from '../sidebar/Sidebar'
import Navbar2 from '../navbar/Navbar'
import styles from "./styles.module.css";

const EditCenter = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

    const { updata, setUPdata } = useContext(updatedata)
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const history = useNavigate("");

    const [inpval, setINP] = useState({
        regid: "",
        name: "",
        state: "",
        city: "",
        lat: 0,
        long: 0,
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

        const res = await fetch(`http://localhost:8080/api/centers/${id}`, {
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

        const { regid,
            name,
            state,
            city,
            lat,
            long } = inpval;
            try{
        const res2 = await fetch(`http://localhost:8080/api/centers/updatecenter/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                regid,
                name,
                state,
                city,
                lat,
                long
            })
        });

        const data2 = await res2.json();
        console.log(data2);


        if (res2.status === 409) {
            setError("Center with given Registration ID already exists");
            setSuccess("")
            // console.log("error");
           
        } else {
            setSuccess("Successfully Editted")
            history.push("/")
            setUPdata(data2);
           
            setError("")
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
						</button>
					</Link>
				</div> */}
                        <div className={styles.right}>
                            <form className={styles.form_container} onSubmit={updateuser}>
                                <h1>Edit Center</h1>
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
                                    placeholder="Center Name"
                                    name="name"
                                    onChange={setdata}
                                    value={inpval.name}
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
                                    placeholder="State"
                                    name="state"
                                    onChange={setdata}
                                    value={inpval.state}
                                    required
                                    className={styles.input}
                                />
                                <input
                                    type="float"
                                    placeholder="Latitude"
                                    name="lat"
                                    onChange={setdata}
                                    value={inpval.lat}
                                    required
                                    className={styles.input}
                                />
                                <input
                                    type="float"
                                    placeholder="Longitude"
                                    name="long"
                                    onChange={setdata}
                                    value={inpval.long}
                                    required
                                    className={styles.input}
                                />





                                {error && <div className={styles.error_msg}>{error}</div>}
                                {success && <div className={styles.success_msg}>{success}</div>}
                                <div className={styles.btn_container}>
                                    <button type="submit" className={styles.green_btn} >
                                        Apply
                                    </button>



                                    <NavLink to="/centers">
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

export default EditCenter;





