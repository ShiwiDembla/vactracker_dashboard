import { Route, Routes, Navigate, } from "react-router-dom";

import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
import Home from "./pages/home/Home";
// import New from "./pages/new/New";
// import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import List from "./pages/list/List";
import Datatable from "./components/datatable/Datatable";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import ShowVaccine from "./pages/vaccines/ShowVaccine";
import Register from "../src/pages/vaccines/Register";
import Edit from "../src/pages/vaccines/Edit";
import Details from "../src/pages/vaccines/Details";
import ShowSlots from "./pages/slots/ShowSlots";
// import Vaccinated from "./pages/vaccinated/Vaccinated2";
import VaccinatedList from "./pages/vaccinated/VaccinatedList";
import Admin from "./pages/admin/admindashboard/Admin";
import Users from "./pages/admin/Users/Users";
// import List2 from "./pages/vaccinated/VaccinatedList";
import AddUser from "./pages/admin/Users/AddUser";
import NotFound from "./pages/NotFound/NotFound";
import Centers from "./pages/admin/Centers/Centers";
import AddCenter from "./pages/admin/Centers/AddCenter";
import VaccineRequests from "./pages/admin/VaccineRequests/VaccineRequests";
// import adminVaccinatedList from "./pages/admin/vaccinated/VaccinatedList";
import EditCenter from "./pages/admin/Centers/EditCenter";
import EditUser from "./pages/admin/Users/EditUser";
import AllVaccinated from "./pages/admin/AllVaccinated/AllVaccinated";
import AdminProfile from "./pages/admin/Profile/AdminProfile";

function App() {
	const user = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const { darkMode } = useContext(DarkModeContext);

	return (
    // <Routes>
    //       <Route path="/">
    //         <Route index element={<Home />} />
    //         <Route path="login" element={<Login />} />
    //         <Route path="users">
    //           <Route index element={<List />} />
    //           <Route path=":userId" element={<Single />} />
    //           <Route
    //             path="new"
    //             element={<New inputs={userInputs} title="Add New User" />}
    //           />
    //         </Route>
    //         <Route path="products">
    //           <Route index element={<List />} />
    //           <Route path=":productId" element={<Single />} />
    //           <Route
    //             path="new"
    //             element={<New inputs={productInputs} title="Add New Product" />}
    //           />
    //         <
    // <div className={darkMode ? "app dark" : "app"}>
		<Routes>
      {/* {user ?  console.log("User",user) : console.log("no user")} */}
			{/* {user && <Route path="/" exact element={<Login />} />} */}
			<Route path="/signup" exact element={<Signup />} />
			{/* <Route path="/login" exact element={<Login />} /> */}
			<Route path="/login"  element={user ? <Navigate to = "/home" />: <Login />} />
			{/* <Route path="/"  element={<Navigate replace to="/login" />} /> */}
      {/* <Route path="/home" element={user ? <Home /> : <Navigate to ="/" />} /> */}
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/requests" element= {user ? <List/> : <Navigate to ="/login" />} />
      <Route path="/vaccines" element= {user ? <ShowVaccine/> : <Navigate to ="/login" /> } />
      <Route path="/register" element= {user ? <Register/>: <Navigate to ="/login" />} />
      <Route path="/vaccines/edit/:id" element= {user ? <Edit/>: <Navigate to ="/login" />} />
      <Route path="/profile" element= {user ? <AdminProfile/>: <Navigate to ="/login" />} />
    
      {/* <Route path="/registervaccine" element={<Register/>} /> */}
      <Route path="/view/:id" element={user ? <Details/> : <Navigate to ="/login" />} />
      <Route path="/slots" element={user ? <ShowSlots/>: <Navigate to ="/login" />} />
      {/* <Route path="/vaccinated" element={<Vaccinated/>} /> */}
      <Route path="/vaccinated" element={user ? <VaccinatedList/>: <Navigate to ="/login" />} />
      {/* <Route path="/vaccinatedlist" element={user ?<VaccinatedList/> : <Navigate to ="/login" />} /> */}
      <Route path="/admin" element={(role=='admin') ?<Admin/> : <Navigate to ="/login"/>} />
      <Route path="/users" element={(role=='admin') ?<Users/> : <Navigate to ="/login"/>} />
      {/* <Route path="/allvaccinated" element={(role=='admin') ?<adminVaccinatedList/> : <Navigate to ="/login" />} /> */}
      <Route path="/allvaccinated" element={(role=='admin') ?<AllVaccinated/> : <Navigate to ="/login" />} />
      <Route path="/adduser" element={(role=='admin') ?<AddUser/> : <Navigate to ="/login" />} />
      <Route path="users/edituser/:id" element={(role=='admin') ?<EditUser/> : <Navigate to ="/login" />} />

      <Route path="/centers" element={(role=='admin') ?<Centers/> : <Navigate to ="/login" />} />
      <Route path="/AddCenter" element={(role=='admin') ?<AddCenter/> : <Navigate to ="/login" />} />
      <Route path="/centers/edit/:id" element= {(role=='admin') ? <EditCenter/>: <Navigate to ="/login" />} />
      <Route path="/allrequests" element={(role=='admin') ?<VaccineRequests/> : <Navigate to ="/login" />} />
      <Route path="adminprofile"  element={(role=='admin') ?<AdminProfile/> : <Navigate to ="/login" />} />
      <Route path="*" element={<NotFound/>} />



      <Route path="/" element={user ? (<>{(role=='admin') ? <Admin/> : <Home/>}</>) : <Navigate to ="/login" />} />
      <Route path="/home" element={user ? (<>{(role=='user') ?  <Home/> : <Navigate to ='/admin' />}</>) : <Navigate to ="/login" />} />
      {/* <Route path="/hello"  render={() => (
  user ? (
    <Navigate replace to="/home"/>
  ) : (
    <Login/>
  )
)} /> */}

		</Routes>
    // </div>
    // <div className= {user===null ? <Routes>
		// 	{user && <Route path="/" exact element={<Login />} />}
		// 	<Route path="/signup" exact element={<Signup />} />
		// 	<Route path="/login" exact element={<Login />} />
		// 	<Route path="/" element={<Navigate replace to="/login" />} />
    //   {/* <Route path="/home" element={<Home />} /> */}
		// </Routes> : <Routes> <Route path="/home" element= {<Home/>}/> </Routes>}>
    //   </div>
   
	);
}

export default App;
