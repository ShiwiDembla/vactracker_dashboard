import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useState,useEffect,axios } from "react";

const Home = () => {

  const [countUsers, setCountUsers] = useState(0);
  const [countCenters, setCountCenters] = useState(0);
  const [countVaccinated, setCountVaccinated] = useState(0);
  const [countRequests, setCountRequests] = useState(0);

useEffect(() => {
  const countusers = async () => {
    try{
    const res = await fetch ("http://localhost:8080/api/users/countUsers");
    if(res.status === 200){
    const data = await res.json()
    console.log(data, ' home users count')
    setCountUsers(data);
  }
  else{
    console.log("0 users")
  }
}
  catch(error){
    console.log(error)
  }
  }

  const countRequests = async () => {
    try{
    const res = await fetch ("http://localhost:8080/api/requests/countRequests");
    if(res.status === 200){

    const data = await res.json()
    console.log(data, 'requests count')
    setCountRequests(data);
  }
  else{
    console.log('0 requests')
  }
   
  }

  catch(error){
    console.log(error)
  }
  }

  const countVaccinated = async () => {
    try{

    const res = await fetch ("http://localhost:8080/api/vaccinated/count/vaccinated");
    if(res.status === 200){
    const data = await res.json()
    console.log(data, 'vaccinated count')
    setCountVaccinated(data);
  }
  else{
    console.log('0 vaccinated')
  }
    
  }
  catch(error){
    console.log(error)
  }
  }

  const countCenters = async () => {
    try{
    const res = await fetch ("http://localhost:8080/api/centers/count/centers");
    if(res.status === 200){
    const data = await res.json()
    console.log(data, 'centers count')
    setCountCenters(data);
  }
  else{
    console.log('0 centers')
  }
}

  catch(error){
    console.log(error)
  }
  }  
  countRequests();
  countVaccinated();
  countusers();
  countCenters();
  
}, [])
 


  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
        
          <Widget type='user' amount={countUsers}/>
          <Widget type='centers' amount={countCenters}/>
          <Widget type='requests' amount={countRequests}/>
          <Widget type='vaccinated' amount={countVaccinated}/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Covid Rate" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          {/* <div className="listTitle">Latest Transactions</div>
          <Table /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
