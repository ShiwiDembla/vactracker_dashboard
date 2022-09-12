// import Sidebar from "../../components/sidebar/Sidebar";
// import Sidebar from "../sidebar/Sidebar"
import Navbar from "../navbar/Navbar";
import "./admin.scss";
import Widget from "../../../components/widget/Widget";
import Featured from "../../../components/featured/Featured";
import Chart from "../../../components/chart/Chart";
import Sidebar2 from "../sidebar/Sidebar";
import Navbar2 from "../navbar/Navbar";


const Admin = () => {
    // const role=localStorage.getItem("role");
    var rolex = 'admin';
  return (
    <div className="home">
      {/* { (rolex == 'admin') ? <Sidebar />: <Sidebar2 />} */}
      <Sidebar2 />
      <div className="homeContainer">
    <Navbar2 />
{/* {( rolex == 'admin') ? <Navbar2 />: <Navbar />} */}
        {/* <Navbar2 /> */}
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Covid Rate" aspect={2 / 1} />
        </div> */}
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Admin;
