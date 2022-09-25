import "./list.scss"
// import Sidebar from "../../components/sidebar/Sidebar"
// import Navbar from "../../components/navbar/Navbar"

// import VaccineRequestDataTable from "../../DataTable/VaccineRequestData"
// import Listvaccinated from "./Listvaccinated"
import Sidebar2 from "../sidebar/Sidebar"
import Navbar2 from "../navbar/Navbar"
import Listvaccinatedadmin from "./adminVaccinated"

const adminVaccinatedList = () => {
  

  return (
    <div className="list">
      <Sidebar2/>
      <div className="listContainer">
        <Navbar2/>
        {/* <Datatable/> */}
        {/* <VaccineRequestDataTable/> */}
        {/* <DataGrid2/> */}
        {/* <List2/> */}
        <Listvaccinatedadmin/>
        
        {/* <div
        > hello</div> */}
      </div>
    </div>
  )
}

export default adminVaccinatedList