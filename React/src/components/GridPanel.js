import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox'
import InfiniteScroll from "react-infinite-scroll-component";
import { withStyles, makeStyles , Table , TableBody , TableCell , TableContainer , TableHead ,TableRow , Paper } from '@material-ui/core';
import './GridPanel.css';
import search from './search.svg';
import Delete from '../actions/delete';
import Edit from '../actions/edit';
import Add from '../actions/add';
import Correspondance from '../actions/correspondence';


const StyledTableCell = withStyles((theme) => ({
head: {
    background:"#2F4451",
    fontSize:"2vh",
    height:"0vh",
    position:"sticky",
    opacity: 1,
    padding:"0vh",
    color:"#97A1A9",
    border:"none",
    spacing: 0,
    zIndex: 1,
    letterSpacing: "0.098vw",
    
    
  },
  body: {
    //fontSize:"calc(0.09vw+0.09vh)",
    fontSize:"2.2vh",
    height:"0.08vh",
    letterSpacing: "0vw",
    padding:"0vh",
    color: "#ffff",
    font: "Ubuntu",
    spacing: 0,
    opacity: 1,
    border:"none",   
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      background:"#2F4451",
      height:"0.09vh",
      padding:"0vh",
      opacity: 1.5,
    },
    '&:nth-of-type(even)': {
      background:"#283A46",
      padding:"0vh",
      height:"0.09vh",
      opacity: 1,
    },
  },
}))(TableRow);





const useStyles = makeStyles({
  table: {
  position: "relative",
  //overflow: "unset",
  },

  '@global': {
    '*::-webkit-scrollbar': {
      top: "56.42vh",
      left: "367.91vw",
      width: "0.48vw",
      height: "2.17vh",
      
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        
    },
    '*::-webkit-scrollbar-thumb': {
      background:"#61707B 0% 0% no-repeat padding-box",
      borderRadius: "0.5rem",
      opacity: 1,
    }
  },
  // sticky: {
  //   position: "sticky",
  //   top: 0,
  //   zIndex: 100,
  // }
});



const BarStyling = {width:"13.49vw",
paddingTop:"0.1vh",
marginTop:"0vh",
 height :"3.32vh",
 background:"#283A46 0% 0% no-repeat padding-box",
 color:"#ffff",
  border:"none",
  borderRadius:"0.625rem", 
  textAlign:"center",
position:"sticky"};

function GridPanel() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const[a,sa]=React.useState([])
    const[co,ca]=React.useState(-1)
    const [check,setCheck]=React.useState(false)
    const [counter,setCounter]=React.useState(0)
    const [temp, setTemp] = React.useState(0)
   
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
   
      const classes = useStyles();
      let [responseData, setResponseData] = React.useState([]);
      let [isNext, isNextFunc] = React.useState(false);
      let [pageCount, setCount] = React.useState(1);
      
      const fetchData =() => {
        axios.get(
            `http://localhost:8080/MyServelet/Fetch`
          )
          
          .then((response) => {
            setResponseData([...responseData, ...response.data.slice(0,10)]);
            isNextFunc(true);
           // const responseJson =JSON.parse("["+response.data+"]")
          })
          .catch((error) => {
            console.log(error);
          });
      };

      React.useEffect(()=>{
        fetchData();
      },[fetchData]);

      console.log(responseData);

      

      function fetchMoreData() {
        setCount(pageCount + 1);
        fetchData();    
      }

      React.useEffect(() => {
        let p=a
        if(check==true)
        {p.push(co);
        setCounter(counter+1)
        }
        else{
          for( var i = 0; i < p.length; i++){ 
      
            if ( p[i] === co) { 
        
                p.splice(i, 1); 
                setCounter(counter-1);
            }
        
        }
        }
       sa(p);
      }, [co,temp]);
    
    
    
    return (
      <>
        <div className='bar'>
          <div className='bar-container'>
            
             <div className='leftside'>
            {button && <Button buttonStyle='btn--primary' buttonSize='btn--medium' >PREDICT</Button>}
            {button && <Correspondance a={a} sa={sa} />}
            </div>
            <div className='nav-menu'>
            {button && <Add/>}
            {button &&<Edit a={a} sa={sa} 
              counter=  {counter}
              setCounter={setCounter} />}
            {button && <Delete a={a} sa={sa} />}
            <div className="test-class">
           <input 
            style={BarStyling}
            InputProps={{ disableBorder: true }}
            placeholder={"Search by invoice number"}
            /> {button && <Button buttonStyle='btn--test' buttonSize='btn--small'><img className="search" src={search}/> &nbsp; </Button>}
            
            </div>
            </div>
          </div> 
          
      <InfiniteScroll
        dataLength={responseData.length}
        next={fetchMoreData}
        hasMore={isNext}
        loader={
           <div 
            style={{ height: "20%", paddingLeft: "55%",overflow: "hidden" }}
           > 
      
      {/* <CircularProgress color="secondary" /> */}
          </div>
          
      //     <div style={{ 'paddingLeft': "600px" }}>  
      //   <CircularProgress color={'primary'} size={40}/>
      // </div>  
          
        }
      >
      
      
        <div class="commit">
          
              <TableContainer style={{overflowX:"unset" }} classes={{root: classes.customTableContainer}}  component={Paper}>
                <Table className={classes.table}stickyHeader aria-label="sticky table">
                
                  <TableHead>
                    <TableRow>
                    <StyledTableCell align="center" className="checkbox" type="checkbox" width="2px" >

                    <Checkbox 
                   
                    style={{transform: "scale(0.7)",color:"#ffff", opacity:0.5}}
                    />

                    </StyledTableCell>
                   
                      <StyledTableCell align="left">CustomerName</StyledTableCell>
                      <StyledTableCell align="left">Customer#</StyledTableCell>
                      <StyledTableCell align="left">SalesOrderId#</StyledTableCell>
                      <StyledTableCell align="right">InvoiceAmount</StyledTableCell>
                      <StyledTableCell align="right">DueDate</StyledTableCell>
                      <StyledTableCell align="center">PredictedPaymentDate</StyledTableCell>
                      <StyledTableCell align="left">Predicted Aging Bucket</StyledTableCell>
                      <StyledTableCell align="left">Notes</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody >

                    {responseData.map((data) =>(
                      <StyledTableRow
                      role="checkbox"
                      tabIndex={-1}
                      key={data.cust_number}>
                       <StyledTableCell align="center" className="checkbox" padding="checkbox" >
                        <Checkbox 
                         onChange={(event)=>{setCheck(event.target.checked); setTemp(temp+1); ca(event.target.value);}} value={data.doc_id}
                        style={{ transform: "scale(0.7)",color:"#ffff" ,opacity:0.5}}
                        />
                        </StyledTableCell>

                        <StyledTableCell component="th" scope="row" align="left" >{data.name_customer}</StyledTableCell>
                        <StyledTableCell align="left" >{data.cust_number}</StyledTableCell>
                        <StyledTableCell align="left" >{data.doc_id}</StyledTableCell>
                        <StyledTableCell align="right" >{data.total_open_amount}</StyledTableCell>
                        <StyledTableCell align="right" >{new Date(2018,12,1)>new Date(data.due_in_date)?<div style={{color:"#FF5B5B"}}>{data.due_in_date}</div>:<div style={{color:"white"}}>{data.due_in_date}</div>}</StyledTableCell>
                        <StyledTableCell align="center" >--</StyledTableCell>
                        <StyledTableCell align="left" >--</StyledTableCell>
                        <StyledTableCell align="left" >Lorem Ipsum</StyledTableCell>
                        
                      </StyledTableRow>
                      
                    ))}
                    
                  </TableBody>
                </Table>
              </TableContainer>
             
               
        </div>
        
      </InfiniteScroll>

     
      </div>
      </>
    );
  }
  
  export default GridPanel;
  