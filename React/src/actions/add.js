import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import {Alert} from "@material-ui/lab";
// import CloseIcon from '@material-ui/icons/Close'
import CloseIcon from '../assets/CloseIcon.svg';
//import { Button } from '../actions/Button'
import "./Button.css";
import "./add.css";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
   // width:"100%",
  },
  textField: {
    background: "#283A46 0% 0% no-repeat padding-box",
    border: "1px solid #356680",
    borderRadius: "10px",
    opacity: 1,
    top: "10px",
    justifyContent: "left",
    textColor:"#fff",
    //width: "20vh",
    width: "14.3vw",
    height: "4.5vh",
    color: "green",
  },
  MuiDialogPaperWidthSm: {
    maxWidth: "1000px"
},
  paper: {
     minWidth: "1000px"
     },
   btn_outline: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: "0.619vh",
    border: "1px solid #14AFF1",
    borderRadius: "0.5rem",
    transition: "all 0.3s ease-out",
    fontSize: "2vh"
  },

  btn_primary:{
    background: "#14AFF1 0% 0% no-repeat padding-box",
    borderRadius:10,
    opacity: 1,
    border: "1px",
    color: "#fff",
    padding: 5,
    transition: "all 0.3s ease-out",
    fontSize: "2vh"

  },

font_styling_1:{
textAlign: "left",
font:"Ubuntu",
opacity: 1,
fontSize: "2.1vh",
paddingTop:"4.8vh",
paddingRight:"0.2vw",


},

align_textf:{
    //paddingLeft:"1vh",
    marginLeft:"3vw",
    justifyContent:"left",
    top: "222px",
    left: "620px",
},

font_styling_2:{
textAlign: "left",
justifyContent:"left",
display: "grid",
//gridTemplateColumns:" repeat(1, auto)",
gridGap: 40,
font:"Ubuntu",
opacity: 1,
fontSize: "2vh",
paddingTop:"4.8vh",
paddingRight:"1vw",
//paddingLeft:"3vw",
marginLeft:"6vw",
},
root: {
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: 200,

    "& .MuiFormLabel-asterisk.MuiInputLabel-asterisk": { // these are the classes used from material-ui library for the asterisk element
      "&::after": {
        content: '"mandatory field"'
      }
    }
  }
}
}));

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1.3,
          border:"none"
      }}
  />
);


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const classes = useStyles();

  return (
    <div>
      <Button 
      onClick={handleClickOpen}
      startIcon={<AddIcon style={{height:"2.5vh"}} />}
      className={classes.btn_outline}
      >
        Add
      </Button>
      <Dialog
        className={classes.paper}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-apartment"
       

      >
        <form
         action="http://localhost:8080/MyServelet/Add" method="POST" onSubmit={(e) => { alert('Submitted form!'); } }>
          <div className="edit-add" >
            <div className="Heading">
        <DialogTitle 
        className="edit-apartment" >Add Invoice</DialogTitle>
        <Button onClick={handleClose} buttonStyle='btn--test' buttonSize='btn--small' ><img className="CloseIcon" src={CloseIcon}/></Button>
        </div>
        <ColoredLine color="#283A46" />
        <DialogContent >
          <Grid container spacing={28}>
            <Grid  className={classes.font_styling_1} labelAsterisk={true}>
              Customer Name*
            </Grid>
            <Grid className={classes.align_textf} item xs={6} sm={3}>
              <TextField
                 className={classes.textField}
                InputProps={{ disableUnderline: true }}
                name="customer_name"
                required="True"
                margin="normal"
                //label="Flat"
                type="text"
              />
            </Grid>
            <Grid className={classes.font_styling_2}  >
              Due Date*
            </Grid>
            <Grid className={classes.align_textf} item xs={6} sm={3}>
              <TextField className={classes.textField}
                InputProps={{ disableUnderline: true }}
                name="due_date"
                margin="normal"
                required="True"
                //label="Flat"
                type="date"
                 />
            </Grid>
          </Grid>
          <Grid  container spacing={28}>
            <Grid  className={classes.font_styling_1}>
              Customer No.*
            </Grid>
            <Grid className={classes.align_textf} 
            style={{
              marginLeft:"8vh"
            }}
            item xs={6} sm={3}>
              <TextField className={classes.textField}
                InputProps={{ disableUnderline: true }}
                margin="normal"
                name="customer_no"
                required="True"
                //label="Flat"
                type="text"
                
              />
            </Grid>
            <Grid  className={classes.font_styling_2}>
              Notes*
            </Grid>
            <Grid className={classes.align_textf} 
                style={{
                  marginLeft:"10vh"
                }}
             item xs={6} sm={3}>
              <TextField 
              // style={{
              //   height:"19vh",
              // }}
               className={classes.textField}
               InputProps={{ disableUnderline: true }}
               margin="normal"
                name="Notes"
                required="True"
                //label="Flat"
                type="text"
                
              />
            </Grid>
          </Grid>
          <Grid container spacing={28}>
            <Grid  className={classes.font_styling_1}>
              Invoice No.*
            </Grid>
            <Grid className={classes.align_textf} 
                style={{
                  marginLeft:"10.2vh"
                }}
            item xs={6} sm={3}>
              <TextField className={classes.textField}
              InputProps={{ disableUnderline: true }}
              margin="normal"
                name="invoice_no"
                required="True"
                //label="Flat"
                type="text"
                
              />
            </Grid>
          </Grid>

          <Grid container spacing={28}>
            <Grid className={classes.font_styling_1}>
              Invoice Amount*
            </Grid>
            <Grid className={classes.align_textf} item xs={6} sm={3}>
              <TextField className={classes.textField}
              InputProps={{ disableUnderline: true }}
              margin="normal"
                name="invoice_amt"
                required="True"
                //label="Flat"
                type="text"
                
              />
            </Grid>
          </Grid>
        </DialogContent>
      
      <ColoredLine color="#283A46" />
        <DialogActions>
    
          <div className="leftB">
          <Button onClick={handleClose}  
          style={{
            color:"#14AFF1",
          }}>
            Cancel
          </Button>
          </div>
          <Button 
          type="reset"
          className={classes.btn_outline} >
            Clear
          </Button>
          <div>
          <Button type={"submit"} className={classes.btn_primary} >
          
            Add
          </Button>
          </div>
        </DialogActions>
        </div>
        </form>
      </Dialog>
    </div>
  );
}