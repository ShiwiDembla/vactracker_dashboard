import Navbar2 from "../navbar/Navbar"
import Sidebar2 from "../sidebar/Sidebar"
import "./vaccinated.scss"
import AllVaccinatedList from "./AllVaccinatedList"


const List2 = () => {
  

  return (
    <div className="list">
      <Sidebar2/>
      <div className="listContainer">
        <Navbar2/>
       <AllVaccinatedList/> 
        <div
        > list</div>
      </div>
    </div>
  )
}



export default List2