import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
// import { MaterialTable } from '@material-ui/core'
// import { roRO } from '@mui/material/locale';
// import Datatable from 'react-data-table-component'
// import { Button } from '@mui/material'


const columns2 = [
  { field: '_id', headerName: 'ID', width:220, },
  { field: 'Username', headerName: 'Username', width: 150 },
  { field: 'CNIC', headerName: 'CNIC', width: 200 },
  { field: 'Phone', headerName: 'Phone', width: 100 },
    { field: 'Email', headerName: 'Email', width: 200 },

  { field: 'City', headerName: 'City', width: 100 },
  { field: 'Center', headerName: 'Center', width: 150 },
  { field: 'Vaccine', headerName: 'Vaccine', width: 100 },
    { field: 'UserID', headerName: 'UserID', width: 100 },
    { field: 'Date', headerName: 'Date', width: 100 },
    { field: 'Time', headerName: 'Time', width: 100 },


  
]
const columns3 = [
  { field: 'userid', headerName: 'userID', width:250 },
]


const columns = [
  { name: 'Id', selector: (row)=> row._id, sortable: true },
  { name: 'Username', selector: (row)=> row.Username, sortable: true },
  { name: 'CNIC', selector: (row)=>row.CNIC , sortable: true },
  { name: 'Phone', selector: (row)=>row.Phone, sortable: true},
  { name: 'City', selector: (row)=>row.City, sortable: true },
  { name: 'Center', selector: (row)=>row.Center, sortable: true },
  { name: 'Vaccine', selector: (row)=>row.Vaccine, sortable: true },
  { name: 'UserID', selector: (row)=>row.UserID, sortable: true },
  { name: 'Date', selector: (row)=>row.Date, sortable: true },
  { name: 'Time', selector: (row)=>row.Time, sortable: true },
//   { name: 'Actions'}
]


const Listvaccinated2 = () => {

  const [tableData, setTableData] = useState([])
  // const center = localStorage.getItem('center')
  const center = 'civil'
  // const [data, setData] = useState([])

  const fetchData = async () => {
    try{
    const response = await fetch('http://localhost:8080/api/vaccinated/'+center)
    const data = await response.json()
    setTableData(data)
    console.log(data)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  } , [])
  const data = tableData?.map(item => {
    return {
      _id: item?._id,
      Username: item?.Username,
      Phone: item?.Phone,
      Email: item?.Email,
      CNIC: item?.CNIC,
      City: item?.City,
      Center: item?.Center,
      Vaccine: item?.Vaccine,
      UserID: item?.UserID,
      Date: item?.Date,
      Time: item?.Time,

    }   
  } )
  

 
//   console.log(rows)

  return (
    <div style={{ height: 700, width: '100%', marginLeft:30,marginRight:10 }}>

      <DataGrid
      // loading
         sx={{
    boxShadow: 2,
    border: 2,
    borderColor: 'primary.light',
    '& .MuiDataGrid-cell:hover': {
      color: 'primary.main',
    },
  }}
        rows={data}
        getRowId={(row) => row._id}
        columns={columns2}
        pageSize={12}
      />
      {/* <Datatable
        title="Vaccinated List"
        columns={columns}
        data={data}
    
        pagination={true}
        paginationPerPage={12}
        /> */}
     
    </div>
  )
}

export default Listvaccinated2