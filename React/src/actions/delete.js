import React from "react";
import Button from "@material-ui/core/Button";
//import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
//import { DialogContentText, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RemoveIcon from "@material-ui/icons/Remove";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CloseIcon from '../assets/CloseIcon.svg';
import "./delete.css";
import "./Button.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 120
  },
  font_styling:{
    textAlign: "left",
    font:"Ubuntu",
    opacity: 1,
    fontSize: "2.3vh",
    paddingTop:"1vh",
    paddingRight:"0.2vw",
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
    padding: 7,
    transition: "all 0.3s ease-out",
    fontSize: "2vh"

  },
  
}));

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1.3,
          border:"none",
      }}
  />

  
);

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const[a,sa]=[props.a,props.sa];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  //  console.log(doc_id);
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        disabled= {a.length>0 ? false : true}
        onClick={handleClickOpen}
        className={classes.btn_outline}
        startIcon={<RemoveIcon style={{height:"2.2vh"}}  />}
      >
        Delete
      </Button>
      <Dialog
       open={open}
        onClose={handleClose}
        aria-labelledby="delete"
      >
        <form action="http://localhost:8080/MyServelet/Delete" method="POST" onSubmit={(e) => { alert('Submitted form!'); this.handleClose(); } }>
        <div className="del">
        <div className="HeadDel">
          <DialogTitle id="delete">Delete record(s)?</DialogTitle>
          <Button onClick={handleClose} buttonStyle='btn--test' buttonSize='btn--small' ><img className="CloseIcon" src={CloseIcon}/></Button>
        </div>
        <ColoredLine color="#283A46" />

          <DialogContent>
            <Typography className={classes.font_styling}>
              You'll lose your record(s) after this action. We can't recover
              them once you delete.
            </Typography>
            <Typography className={classes.font_styling}>
              Are you sure you want to <div className="red">permanently delete</div> them?
            </Typography>
          </DialogContent>

          <TextField
                autoFocus
                margin="dense"
                name="oid"
                type="hidden"
                value={a}></TextField>
                    <ColoredLine color="#283A46" />

          <DialogActions>
            <div className="space_between">
            <Button className={classes.btn_outline}onClick={handleClose} >
              Cancel
            </Button>

            <Button type="submit" className={classes.btn_primary} onClick={handleClose}>
              Delete
            </Button>
            </div>
          </DialogActions>
        </div>
        </form>
      </Dialog>
    </div>
  );
}
