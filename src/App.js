import { Route, Routes, Navigate } from "react-router-dom";
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

function App() {
	const user = localStorage.getItem("token");
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
			{user && <Route path="/" exact element={<Login />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/requests" element= {<List/>} />
      {/* <Route path="/z" element= {<Datatable/>} /> */}

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
