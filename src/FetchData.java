

import java.io.*;  
import javax.servlet.*;  
import javax.servlet.http.*;
import java.sql.*;
import java.util.ArrayList;  
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
    
public class FetchData extends HttpServlet  
{    
     /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException 
      {  
         PrintWriter out = res.getWriter();  
         res.setContentType("text/html");  
           
         try 
         {  
             Class.forName("com.mysql.cj.jdbc.Driver");  
             Connection con = DriverManager.getConnection("jdbc:mysql://localhost/h2h_internship", "root", "1234");  
             
             System.out.println("OK");
             Statement stmt = con.createStatement();  
             ResultSet rs = stmt.executeQuery("SELECT * FROM invoice_details LIMIT 10000"); 
             
             ArrayList<String> obj = new ArrayList<>();
             while (rs.next()) 
             {  
            	 DataPojo ob = new DataPojo();
            	 
            	 ob.setName_customer(rs.getString(3));
   			  ob.setCust_number(rs.getString(2));
   			  ob.setDoc_id(rs.getString(6));
   			  ob.setTotal_open_amount(rs.getString(14));
   			  ob.setDue_in_date(rs.getString(9));
   			  ob.setNotes(rs.getString(19));
   			  
   			  
   			  GsonBuilder builder = new GsonBuilder(); 
	          Gson gson = builder.create();
	          builder.serializeNulls();
	          builder.setPrettyPrinting();
	          String json = gson.toJson(ob); 
	          obj.add(json);
             }
             
             out.print(obj);
             out.flush();
            
         }
             catch (Exception e) 
            {  
             out.println("error");  
         }  
     }  
 }  