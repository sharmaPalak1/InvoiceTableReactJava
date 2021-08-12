package com.HRC.assignment;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
//import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
//import java.text.SimpleDateFormat;
//import com.HRC.assignment.DateUtil;
//import java.util.*;

public class DataLoad extends DataPojo {

		public static void main(String[] args) {
	        String jdbcURL = "jdbc:mysql://localhost/h2h_internship"; // Url to the database
	        String username = "root"; // database username
	        String password = "1234"; // database password
	 
	        String csvFilePath = "C:\\Users\\KIIT\\Desktop\\1806396.csv"; // file from where we need to take the data

	        int batchSize = 20; // setting batch size to 20
	        
	        Connection connection = null; // for connection build
	        
	        try {
	        	 
	            connection = DriverManager.getConnection(jdbcURL, username, password); // establishing connection with the database
	            connection.setAutoCommit(false); // turning off the auto commit
	            
	        	String sql = "insert into invoice_details values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	        	PreparedStatement statement = connection.prepareStatement(sql); // to execute sql queries
	            BufferedReader lineReader = new BufferedReader(new FileReader(csvFilePath)); // reading data from csv
	            String lineText = null; 
	            
	            int count = 0;
	            
	            DataPojo obj = new DataPojo(); // creating an object of pojo class
	 
	            lineReader.readLine(); // skip header line
	            
	            
	            while ((lineText = lineReader.readLine()) != null) {
	                String[] data = lineText.split(",");  // storing data using , in between
	                
	                
	            
					  
		                    
//		                    SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
//		                    java.util.Date date = sdf1.parse(data[3]);
//		                    java.sql.Date sqlStartDate = new java.sql.Date(date.getTime()); 
//		                     obj.setClear_date(sqlStartDate);
		                     
		                  // calling setter function
		 	                obj.setBusiness_code(data[0]);
		 	                obj.setCust_number(data[1]);
		 	                obj.setName_customer(data[2]); 
		 	                
		 	                	obj.setClear_date(data[3]);
		 					
		 						obj.setBusiness_year(data[4]);
		 				
		 						obj.setDoc_id(data[5]);
		 					
		 						obj.setPosting_date(data[6]);
		 					
		 						obj.setDocument_create_date(data[7]);
		 	
		 					
		 						obj.setDue_in_date(data[9]);
		 					obj.setInvoice_currency(data[10]); 
		 					obj.setDocument_type(data[11]); 
		 					obj.setPosting_id(data[12]);
		 					obj.setArea_business(data[13]);
		 					obj.setTotal_open_amount(data[14]);
		
		 					obj.setBaseline_create_date(data[15]);
		 					obj.setCust_payment_terms(data[16]);
		 					obj.setInvoice_id(data[17]);
		 					obj.setIsOpen(data[18]);
		                
					   // calling getter functions
					   String item1=obj.getBusiness_code();
					   String item2 =obj.getCust_number();
					   String item3= obj.getName_customer();
					   String item4 =obj.getClear_date();
					   String item5=obj.getBusiness_year();
					  
					   String item6= obj.getDoc_id();

					   String item7= obj.getPosting_date();
					   String item8=obj.getDocument_create_date();
					
					   String item10=obj.getDue_in_date();
					   String item11= obj.getInvoice_currency();
					   String item12=obj.getDocument_type();
					   String item13=obj.getPosting_id();
					   String item14=obj.getArea_business();
					   String item15=obj.getTotal_open_amount();
					   String item16=obj.getBaseline_create_date();
					   String item17= obj.getCust_payment_terms();
					   String item18=obj.getInvoice_id();
					   String item19=obj.getIsOpen();
					   
					 //setting the values to the statement
		                statement.setString(1, item1);
		                statement.setString(2, item2);
		                statement.setString(3, item3);
		                if(item4.equalsIgnoreCase("")) {
		                	statement.setString(4, null);
		                }
		                else {
		                statement.setString(4, item4);
		                }
		                //statement.setString(4, item4);
		                statement.setString(5, item5);
		              
		                statement.setString(6, item6);
		             
		                statement.setString(7, item7);
		                statement.setString(8, item8);
		                
		                statement.setString(9, item10);
		                statement.setString(10, item11);
		                statement.setString(11, item12);
		                statement.setString(12, item13);
		                statement.setString(13, item14);
		                statement.setString(14, item15);
		                statement.setString(15, item16);
		                statement.setString(16, item17);
		                if(item18.equalsIgnoreCase("")) {
		                	statement.setString(17, null);
		                }
		                else {
		                statement.setString(17, item18);
		                }
		                //statement.setString(17, item18);
		                statement.setString(18, item19);
		                
		                
		                statement.addBatch();//to add individual statements to the batch
		                
		                if (count % batchSize == 0) {
		                    statement.executeBatch();
		                }
		               // System.out.print("a");
		            }
	            System.out.println("inserted into Database");
	            System.out.println("goodbye");
		 
		            lineReader.close();
		            
		            // execute the remaining queries
		            statement.executeBatch();
		 
		            connection.commit();
		            connection.close();
	        } catch (IOException ex) {
	            System.err.println(ex);
	        } catch (SQLException ex) {
	            ex.printStackTrace();
	 
	            try {
	                connection.rollback();
	            } catch (SQLException e) {
	                e.printStackTrace();
	            }
	        }
	 
	    }
		                
		                
					   
	            }
