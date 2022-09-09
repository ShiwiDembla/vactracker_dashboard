import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import VaccineRequestDataTable from "../../DataTable/VaccineRequestData"
import Listvaccinated from "./Listvaccinated"

const List = () => {
  

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* <Datatable/> */}
        {/* <VaccineRequestDataTable/> */}
        {/* <DataGrid2/> */}
        {/* <List2/> */}
        <Listvaccinated/>
        {/* <div
        > hello</div> */}
      </div>
    </div>
  )
}

export default List