import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
// import { MaterialTable } from '@material-ui/core'
// import { roRO } from '@mui/material/locale';
import Datatable from 'react-data-table-component'

const columns2 = [
  { field: '_id', headerName: 'ID' },
  { field: 'Fullname', headerName: 'Fullname', width: 300 },
  { field: 'CNIC', headerName: 'CNIC', width: 300 },
  { field: 'Age', headerName: 'Age', width: 100 },
  { field: 'City', headerName: 'City', width: 100 },
  { field: 'Center', headerName: 'Center', width: 300 },
  { field: 'Vaccine', headerName: 'Vaccine', width: 300 },
]


const columns = [
  { name: 'Id', selector: (row)=> row._id, sortable: true },
  { name: 'Fullname', selector: (row)=> row.Fullname, sortable: true },
  { name: 'CNIC', selector: (row)=>row.CNIC , sortable: true },
  { name: 'Age', selector: (row)=>row.Age, sortable: true },
  { name: 'City', selector: (row)=>row.City, sortable: true },
  { name: 'Center', selector: (row)=>row.Center, sortable: true },
  { name: 'Vaccine', selector: (row)=>row.Vaccine, sortable: true },
]
const rows = [
  { _id: '1', Fullname: 'John', Number: '12345', CNIC: '12', Age: '23', City: 'Karachi', Center: 'Center 1', Vaccine: 'Vaccine 1' },
  { _id: '2', Fullname: 'John', Number: '12345', CNIC: '123', Age: '23', City: 'Karachi', Center: 'Center 1', Vaccine: 'Vaccine 1' },
  { _id: '3', Fullname: 'John', Number: '12345', CNIC: '1234', Age: '23', City: 'Karachi', Center: 'Center 1', Vaccine: 'Vaccine 1' },
]

const DataGrid2 = () => {

  const [tableData, setTableData] = useState([])
  // const [data, setData] = useState([])

  const fetchData = async () => {
    try{
    const response = await fetch('http://localhost:8080/api/requests')
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
      Fullname: item?.Fullname,
      CNIC: item?.CNIC,
      Age: item?.Age,
      City: item?.City,
      Center: item?.Center,
      Vaccine: item?.Vaccine,
    }   
  } )

 
  console.log(rows)

  return (
    <div style={{ height: 700, width: '100%' }}>

      <DataGrid
      // loading
        rows={data}
        getRowId={(row) => row._id}
        columns={columns2}
        pageSize={12}
      />
      <Datatable
      title="Vaccine Requests"
        columns={columns}
        data={data}

        pagination={true}
        paginationPerPage={12}
        />
     
    </div>
  )
}

export default DataGrid2