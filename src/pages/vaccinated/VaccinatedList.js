import Navbar2 from "../admin/navbar/Navbar"
import Sidebar2 from "../admin/sidebar/Sidebar"
import "./list.scss"
// import Sidebar from "../../components/sidebar/Sidebar"
// import Navbar from "../../components/navbar/Navbar"

// import VaccineRequestDataTable from "../../DataTable/VaccineRequestData"
import Listvaccinated2 from "./Listvaccinated2"

const List2 = () => {
  

  return (
    <div className="list">
      <Sidebar2/>
      <div className="listContainer">
        <Navbar2/>
        {/* <Datatable/> */}
        {/* <VaccineRequestDataTable/> */}
        {/* <DataGrid2/> */}
        {/* <List2/> */}
        <Listvaccinated2/>
        {/* <div
        > hello</div> */}
      </div>
    </div>
  )
}

export default List2