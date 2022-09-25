import * as React from 'react';
import { useState, useEffect, useContext } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateIcon from '@mui/icons-material/Create';
import { NavLink } from "react-router-dom";
import {adddata,deldata,updatedata} from '../contextprovider/ContextProvider';

export default function AlertDialog(props) {
  const [data, setData] = React.useState([])
  const usersId = props.usersId;
  const { udata, setUdata } = useContext(adddata);
  const {updata, setUPdata} = useContext(updatedata);
  const {dltdata, setDLTdata} = useContext(deldata);
  const [success, setSuccess] = useState(false);
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  
  const [open, setOpen] = React.useState(false);


  const deleteuser =  (id) => {
      if(id!=null){
    const res2 =  fetch(`http://localhost:8080/api/users/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    setOpen(false);
    window.location.reload(false)

    const deletedata =  res2.json();
    console.log(deletedata);
    

    if (res2.status === 422 || !deletedata) {
        console.log("error");
    } else {
      
       
        console.log("user deleted");
        setSuccess(true);
        
        setDLTdata(deletedata)
        
    }
    if(success){
      <> <div class="alert alert-danger alert-dismissible fade show" role="alert"> Deleted Successfully!</div></> }
      if(success){
        alert("Deleted Successfully!")
      }
     
    


  }
}

const x = () => {
  console.log('hello')
  if(success){
   <> <div class="alert alert-danger alert-dismissible fade show" role="alert"> Deleted Successfully!</div></> }
  setOpen(false);
}



 
    


    

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <div>
      
      
      
       {/* <DeleteOutlineIcon onClick={handleClickOpen} style={{color: 'red'}} /> */}
        <button className="btn btn-danger" onClick= {handleClickOpen}> <DeleteOutlineIcon /> </button>
        <NavLink to={`edituser/${usersId}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
        {success ? <> <h1>hello</h1></>: ""}
                                           
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure You Want to delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* {complainId}{serviceId}{Id} */}
            {usersId}
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button style={{backgroundColor: 'green', color: 'white'}} onClick={handleClose}>NO</Button>
          {/* <Button onClick={deleteuser(usersId)} style={{backgroundColor: 'red', color: 'white'}} autoFocus>
            YES
          </Button> */}
                    <Button onClick={()=>deleteuser(usersId)} style={{backgroundColor: 'red', color: 'white'}} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
          <div>
      {/* {success ?  <> <div class="alert alert-danger alert-dismissible fade show" role="alert"> Deleted Successfully!</div></> : ""} */}
      </div>
    </div>
  );
}
