import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./correspondence.css";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';

const StyledTableCell = withStyles((theme) => ({
  head: {
    background:"#283A46",
    opacity: 1,
    padding:"0.3vh",
    color:"#97A1A9",
    border:"none",
    spacing: 5 ,
    zIndex: 1,
  },
  body: {
    fontSize:"calc(0.08vw+0.08vh)",
    padding:"0.01vh",
    color: "#ffff",
    font: "Ubuntu",
    spacing: 2,
    opacity: 1,
    border:"none",   
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      background:"#2F4451",
      opacity: 1.5,
    },
    '&:nth-of-type(even)': {
      background:"#283A46",
      opacity: 1,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#2c404e",
    },
    "& .MuiOutlinedInput-input": {
      padding: "8px 20px",
  },
  },
  btn_primary: {
    background: "#14AFF1 0% 0% no-repeat padding-box",
    borderRadius: "0.5rem",
    opacity: 1,
    border: "1px solid #14AFF1",
    color: "#fff",
    paddingTop: 4 ,
    paddingBottom: 4,
    fontSize: "1.95vh"
  },
  btn_outline: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: "0.619vh",
    border: "1px solid #14AFF1",
    borderRadius: "0.5rem",
    transition: "all 0.3s ease-out",
    fontSize: "1.95vh"
  },
  dialog: {
    top: "88px",
    left: "80px",
    width: "1761px",
    height: "755px",
    fontSize: "2.1vh",
  },
  dialogCustomizedWidth: {
    "max-width": "90%",
    "max-height": "90%"
    
  },

});
const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none"
    }
  }
});

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const count = React.useRef(0);
  const[b,setb]=[props.a,props.sa];
  console.log(b)

  
    const fetchData = React.useCallback(async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/MyServelet/ViewCorres", {params:{id:b.toString()}}
        );
        setData((prevData) => [...prevData, ...response.data]);
        count.current += 1;
      } catch (error) {
        console.log(error);
      }
    }, []);

    React.useEffect(() => {
      setData([]);
      fetchData(b);
    }, [b,fetchData]);
    console.log(data);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setData([]);
    setOpen(false);
  };
  const classes = useStyles();
  //const classes1 = styles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const dispatch=useDispatch();

  return (
    <div>
      <Button
        className={classes.btn_outline}
        onClick={()=>{handleClickOpen(); fetchData();}}
      >
        View Correspondence
      </Button>
      <Dialog
        open={open}
        fullWidth={"true"}             
        classes={{ paper: classes.dialogCustomizedWidth }}        
        onClose={handleClose}
        aria-labelledby="edit-apartment"
      >
        <div className={classes.root}>
          <div display="inline">
            <Paper className="division_corres" variant="outlined" square>
              <Box display="flex" alignItems="center" stickyHeader>
                <Box flexGrow={1}>
                  <DialogTitle id="correspondence" style={{color: "#fff"}}>
                    View Correspondence ({b.length})
                  </DialogTitle>
                </Box>
                <Box>
                  <Typography style={{color: "#C0C6CA"}}>View:</Typography>
                </Box>
                &nbsp;&nbsp;&nbsp;
                <Box style={{paddingTop: 4}}>
                  <FormControl
                    variant="outlined"
                    style={{border: "#356680", backgroundColor: "#283A46"}}
                    className={classes.formControl}
                     
                  >
                    <InputLabel classes={classes.root} id="demo-simple-select-outlined-label" />
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      style={{border: "#14AFF1", backgroundColor: "transparent"}}
                      classes={classes.root}
                    >
                      <MenuItem value={10} >Template 1</MenuItem>
                      <MenuItem value={20}>Template 2</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                &nbsp;&nbsp;&nbsp;
                <Box>
                  <IconButton
                    onClick={handleClose}
                    style={{ color: "#c0c6ca" }}
                  >
                    <CloseIcon />
                  </IconButton>
                  &nbsp;&nbsp;&nbsp;
                </Box>
              </Box>
            </Paper>
          </div>

          <Paper
            className="division_body"
            variant="outlined"
            square
            style={{ overflow: 'auto', height: '50vh' }}
            
          >
            <DialogContent
           
              className={classes.root}
            >
              <Typography style={{color:"grey"}} display="inline">Subject:{" "}</Typography>
              <Typography style={{color:"#ffff"}}  display="inline">Invoice Details - Account Name</Typography>
              <Box m={2} />
              <Typography style={{color:"grey"}} >Dear Sir/Madam,</Typography>
              <Box m={2} />
              <Typography style={{color:"grey"}} >
                Gentle reminder that you have one or more open invoices on your
                account.
              </Typography>
              <Typography style={{color:"grey"}} >
                Please get back to us with an expected date of payment. If you
                have any specific issue with the invoice(s), please let us know
                so that we can address it at the earliest.
              </Typography>
              <Box m={2} />
              <Typography style={{color:"grey"}} >
                Please find the details of the invoices below:
              </Typography>
              <Box m={3} />

              <div className="table">
                <TableContainer>
                <Table
            className={classes.table}
          >
            <TableHead >  
            <TableRow>
                 
                   
                      <StyledTableCell align="left">Invoice Number</StyledTableCell>
                      <StyledTableCell align="left">PO Number</StyledTableCell>
                      <StyledTableCell align="left">Invoice Date</StyledTableCell>
                      <StyledTableCell align="center">Due Date</StyledTableCell>
                      <StyledTableCell align="right">Currency</StyledTableCell>
                      <StyledTableCell align="left">Open Amount($)</StyledTableCell>
                    </TableRow>

          </TableHead>  
            <TableBody>

            {data.length != 0 && data.map((a) => {
                      return (
                        <StyledTableRow
                      role="checkbox"
                      tabIndex={-1}
                      key={a.cust_number}>
                        <StyledTableCell component="th" scope="row" align="left" >{a.invoice_id}</StyledTableCell>
                        <StyledTableCell align="left" >{a.cust_number}</StyledTableCell>
                        <StyledTableCell align="left" >{a.doc_id}</StyledTableCell>
                        <StyledTableCell align="left" >{a.due_in_date}</StyledTableCell>
                        <StyledTableCell align="right" >{a.invoice_currency}</StyledTableCell>
                        <StyledTableCell align="left" >{a.total_open_amount}</StyledTableCell>
                      </StyledTableRow>
                      );
                    })}
            </TableBody>
          </Table>
                </TableContainer>
              </div>
              <Box m={3} />
              <Typography style={{color:"grey"}} >
                In case you have already made a payment for the above items,
                please send us the details to ensure the payment is posted.
              </Typography>
              <Typography style={{color:"grey"}} >
                Let us know if we can be of any further assistance. Looking
                forward to hearing from you.
              </Typography>
              <Box m={2} />
              <Typography style={{color:"grey"}} >Kind Regards,</Typography>
              <Box m={0} />
              <Typography style={{color:"grey"}} >[Sender’s First Name][Sender’s Last Name]</Typography>
              <Box m={0} />
              <Typography style={{color:"grey"}} display="inline">Phone : {" "}</Typography>
              <Typography style={{color:"grey"}} display="inline">[Sender’s contact number]</Typography>
              <Box m={0} />
              <Typography style={{color:"grey"}}  display="inline">Fax : {" "}</Typography>
              <Typography style={{color:"#ffff"}} display="inline">[If any]</Typography>
              <Box m={0} />
              <Typography style={{color:"grey"}}  display="inline">Email : {" "}</Typography>
              <Typography style={{color:"#ffff"}}  display="inline">[Sender’s Email Address]</Typography>
              <Box m={0} />              
              <Typography style={{color:"#ffff"}}  display="inline">Company Name[Sender’s Company Name]</Typography>
              <Box m={6} />
            </DialogContent>
          </Paper>

          <Paper className="options" square style={{ overFlow: 'auto' }} >
            <DialogActions>
              <Box m={4} />
              <MuiThemeProvider theme={theme}>
                <div style={{paddingRight: "1rem"}}>
                <Button style={{color: "#14aff1"}} onClick={handleClose}>
                  Cancel
                </Button>
                </div>
                <Button type="submit"
                      className={classes.btn_primary}
                      onClick={handleClose}>
                  Download
                </Button>
                &nbsp;&nbsp;&nbsp;
              </MuiThemeProvider>
            </DialogActions>
          </Paper>
        </div>
      </Dialog>
    </div>
  );
}