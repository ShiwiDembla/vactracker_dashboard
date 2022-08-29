import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
// import { MaterialTable } from '@material-ui/core'
// import { roRO } from '@mui/material/locale';

const columns = [
  { field: '_id', headerName: 'ID' },
  { field: 'Fullname', headerName: 'Fullname', width: 300 },
  { field: 'CNIC', headerName: 'CNIC', width: 300 },
  { field: 'Age', headerName: 'Age', width: 100 },
  { field: 'City', headerName: 'City', width: 100 },
  { field: 'Center', headerName: 'Center', width: 300 },
  { field: 'Vaccine', headerName: 'Vaccine', width: 300 },
]

const DataGrid2 = () => {

  const [tableData, setTableData] = useState({})

  useEffect(() => {
    fetch("http://localhost:8080/api/requests")
    // fetch('http://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      // . then((data) => {  console.log(data) })
      .then((data) => setTableData(data))
      console.log('hello')
    //   console.log('hello2')
        

  }, [])
  console.log(tableData)
 
  const rowData = Object.values(tableData);
  
  const rowData2 = rowData?.map((item) => {
    return {
      _id: item?._id,
      Fullname: item?.Fullname,
      Number: item?.Number,
      CNIC: item?.CNIC,
      Age: item?.Age,
      City: item?.City,
      Center: item?.Center,
      Vaccine: item?.Vaccine,
    }
  }
  )
  // const detailsRows = rows.map((tableData) => {
  //   return {
  //     // id: row.item_id,
  //     // model: row.model_no,
  //     // title: row.title,
  //   };})
  return (
    <div style={{ height: 700, width: '100%' }}>
      {/* getRowId={(row) => row._id} */}
      <DataGrid
      loading
      
      // getRowId={(row) => row.no}
        rows={rowData2}
        getRowId={(row) => row._id}
        // id={Math.random()}
        columns={columns}
        pageSize={12}
      />
      {/* <MaterialTable
  title="User list from API"
  columns={columns}
  data={rowData} 
  /> */}
    </div>
  )
}

export default DataGrid2