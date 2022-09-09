import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"
// import List2 from "../../components/table/Table"
import DataGrid2 from "../../Table/DataGrid"
import VaccineRequestDataTable from "../../DataTable/VaccineRequestData"
// import { useState, axios, useEffect } from "react";
const List = () => {
  

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'http://localhost:8080/api/requests'
  //       );
  //       setData(response.data);
  //       console.log(data)
  //       setError(null);
  //     } catch (err) {
  //       setError(err.message);
  //       setData(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);
  // const [data, setData] = useState();
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* <Datatable/> */}
        <VaccineRequestDataTable/>
        {/* <DataGrid2/> */}
        {/* <List2/> */}
        {/* <div
        > hello</div> */}
      </div>
    </div>
  )
}

export default List