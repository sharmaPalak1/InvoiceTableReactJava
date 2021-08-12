import React, { Component } from 'react'  
import { withStyles, makeStyles , Table , TableBody , TableCell , TableContainer , TableHead ,TableRow , Paper } from '@material-ui/core';
import axios from 'axios';  
  
const StyledTableCell = withStyles((theme) => ({
    head: {
    },
    body: {
      fontSize:"calc(0.25vw+0.25vh)",
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export class DataTable extends Component {  
  constructor(props) {  
    super(props)  
    this.state = {  
      ProductData: []  
    } ;
  }  
  componentDidMount() {  
    axios.get('http://localhost:8080/MyServelet/Fetch').then(response => {  
      console.log(response.data);  
      this.setState({  
        ProductData: response.data  
      });  
    });  
  }  
  render() {  
    console.log(this.state.ProductData);  
    return (  
      <TableContainer component={Paper}>  
        <Table stickyHeader  aria-label="sticky table">  
        <TableHead>
                    <TableRow>
                      <StyledTableCell align="right">CustomerName</StyledTableCell>
                      <StyledTableCell align="center">Customer#</StyledTableCell>
                      <StyledTableCell align="center">SalesOrderId#</StyledTableCell>
                      <StyledTableCell align="right">InvoiceAmount</StyledTableCell>
                      <StyledTableCell align="center">DueDate</StyledTableCell>
                      <StyledTableCell align="right">PredictedPaymentDate</StyledTableCell>
                      <StyledTableCell align="right">Predicted Aging Bucket</StyledTableCell>
                      <StyledTableCell align="right">Notes</StyledTableCell>
                    </TableRow>
                  </TableHead>
            <TableBody > 
                
            {  
              this.state.ProductData.split('').map((data, index) => {  
                return <StyledTableRow  key={index}>  
                  <StyledTableCell component="th" scope="row">  
                    {data.cust_number} 
                    </StyledTableCell>
                    <StyledTableCell align="right" >{data.name_customer}</StyledTableCell> 
                    <StyledTableCell align="right" >{data.cust_number}</StyledTableCell>
                        <StyledTableCell align="right" >{data.invoice_id}</StyledTableCell>
                        <StyledTableCell align="right" >{data.total_open_amount}</StyledTableCell>
                        <StyledTableCell align="right" >{data.due_in_date}</StyledTableCell>
                        <StyledTableCell align="right" >--</StyledTableCell>
                        <StyledTableCell align="right" >--</StyledTableCell>
                        <StyledTableCell align="right" >Lorem Ipsum</StyledTableCell>
                        
                      </StyledTableRow>
                      
              })
            }  
          </TableBody>  
        </Table>  
      </TableContainer>  
    );  
  }  
}  
  
export default DataTable 