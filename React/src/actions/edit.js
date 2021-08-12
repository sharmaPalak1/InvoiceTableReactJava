import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import "./Button.css"
import { makeStyles } from "@material-ui/core/styles";
import Edit from '../assets/edit.svg';
import CloseIcon from '../assets/CloseIcon.svg';
import "./edit.css";
const useStyles = makeStyles((theme) => ({
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
    borderRadius:"0.5rem",
    opacity: 1,
    border: "0.05rem",
    color: "#fff",
    padding: "0.619vh",
    transition: "all 0.3s ease-out",
    fontSize: "2vh"

  },
  textField_edit: {
    background: "#283A46 0% 0% no-repeat padding-box",
    border: "1px solid #356680",
    borderRadius: "10px",
    opacity: 1,
    top: "10px",
    justifyContent: "left",
    //width: "20vh",
    width: "15.3vw",
    height: "4.5vh",
    color:"fff",
  },
  align_text:{
    marginLeft:"1vw",
    justifyContent:"left",
    top: "222px",
    left: "620px",
    paddingBottom:"3vh",

  },
  font_style_1:{
    textAlign: "left",
    font:"Ubuntu",
    opacity: 1,
    fontSize: "2.3vh",
    paddingTop:"1vh",
  },
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



export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const[a,sa]=[props.a,props.sa];
  const[counter,setCounter]=[props.counter,props.setCounter];
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
      disabled= {counter == 1 ? false : true}
      className={classes.btn_outline}
        onClick={handleClickOpen}
        startIcon={<img className="Edit" src={Edit} />}
      >
        Edit
      </Button>
      <Dialog
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-apartment"
      >
        <form action="http://localhost:8080/MyServelet/Edit" method="POST" onSubmit={(e) => { alert('Submitted form!'); } }>
          <div>
        <div className="edit-edit" >
        <div className="Head">
        <DialogTitle id="edit-apartment">Edit Invoice</DialogTitle>
        <Button onClick={handleClose} buttonStyle='btn--test' buttonSize='btn--small' ><img className="CloseIcon" src={CloseIcon}/></Button>
        </div>
        <ColoredLine color="#283A46" />
        <DialogContent>
          <Grid container>
            <Grid className={classes.font_style_1} Item>
              Invoice Amount
            </Grid>
            <Grid className={classes.align_text} item >
              <TextField 
                 className={classes.textField_edit}
                name="invoice_amt"
                //label="Flat"
                type="text"
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid className={classes.font_style_1} Item>
              Notes
            </Grid>
            <Grid  className={classes.align_text} 
            style={{
              marginLeft:"12vh"
            }}
            item>
              <TextField 
               style={{
                height:"19vh",
              }}
              className={classes.textField_edit}
                name="notes"
                //label="Flat"
                type="text"
                multiline
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <ColoredLine color="#283A46" />
        <DialogActions>
        <div className="leftSide">
          <Button onClick={handleClose} 
            style={{
              color:"#14AFF1",
            }}>
            Cancel
          </Button>
          </div>
          <Button type="reset" onClick={handleClose} className={classes.btn_outline}>
            Reset
          </Button>
          <Button 
          value={a}
          name="ie"
          type="submit"
          onClick={handleClose}  className={classes.btn_primary}
          >
            Save
          </Button>
        </DialogActions>
        </div>
        </div>
        </form>
      </Dialog>

    </div>
  );
}
