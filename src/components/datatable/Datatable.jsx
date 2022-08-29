import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, axios, useEffect } from "react";

const Datatable = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/requests'
        );
        setData2(response.data);
        console.log(data2)
        setError(null);
      } catch (err) {
        setError(err.message);
        setData2(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  const [data2, setData2] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <div> {data2} </div>
          </div>
          
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
