import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { SvgIcon } from "@mui/material";
import {ReactComponent as VacTracker} from '../../../src/vacTracker.svg'
const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			// console.log(res["token"]);
			// alert("res.data", {res})
			console.log(res.data[0])
			console.log("city",res.data[1])
			console.log("center",res.data[2])
			console.log("role",res.data[3])
			console.log("id", res.data[4])



			localStorage.setItem("token", res.data[0]);
			localStorage.setItem("city", res.data[1]);
			localStorage.setItem("center", res.data[2]);
			localStorage.setItem("role", res.data[3]);
			localStorage.setItem("id", res.data[4]);
			if(res.data[3] === "admin"){
			window.location = "/admin";
			}
			else if(res.data[3] === "user"){
				window.location = "/home";
			}
			else{
				console.log('xyz')
			}
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
					<h1 className={styles.heading}>Welcome To VacTracker</h1>
					<VacTracker height={200} width={200}/>
						<div className={styles.login_heading}>Login to Your Account</div>

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
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn} >
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					{/* <h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn} >
							Sign Up
						</button>
					</Link> */}
				</div>
			</div>
		</div>
	);
};

export default Login;
