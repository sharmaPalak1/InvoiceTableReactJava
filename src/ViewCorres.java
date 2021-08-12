

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.ResultSet;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


@WebServlet("/helloewww")
public class ViewCorres extends HttpServlet {
	private static final long serialVersionUID = 2L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ViewCorres() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		PrintWriter out = response.getWriter();  
        
		String url = "jdbc:mysql://localhost/h2h_internship";
		String username = "root";
		String password = "1234";
		Connection conn=null;
		String order_id=request.getParameter("id");
		System.out.println(order_id);
		if(order_id != null) {
		int n = order_id.split(",").length;
//		out.print(n);
		String[] arrOfStr = new String[n+1];
		arrOfStr = order_id.split(","); 
		System.out.println(arrOfStr);
		ArrayList<String> ob =new ArrayList<>(); 
		if(n >= 1) {
        
		          
		try{  
		Class.forName(ConnJDBC.JDBC_DRIVER);  
		conn = DriverManager.getConnection(url,username,password); 
		String s="select * from Invoice_details where doc_id IN("+order_id+");";
		PreparedStatement ps=conn.prepareStatement(s);
		
		ResultSet rs=ps.executeQuery();
        while (rs.next()) {
      	  DataPojo obj = new DataPojo();
			  obj.setCust_number(rs.getString(2));
			  obj.setInvoice_id(rs.getString(17));
			  obj.setTotal_open_amount(rs.getString(14));
			  obj.setDue_in_date(rs.getString(9));
	          obj.setDoc_id(rs.getString(6));
	          obj.setInvoice_currency(rs.getString(11));   
			  
			  
	          GsonBuilder builder = new GsonBuilder(); 
	          Gson gson = builder.create();
	          builder.serializeNulls();
	          builder.setPrettyPrinting();
	          String json = gson.toJson(obj); 
	          ob.add(json);
      	   }
    

    
    
        		      
		conn.close();
		}
		catch (Exception e2) {System.out.println(e2);}  
        out.print(ob);

		out.flush();    
		out.close();
        }
		}
		}
	
		
	
        
		
		
	
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}