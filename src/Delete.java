

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
//import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.sql.Statement;
//import java.text.SimpleDateFormat;
//import java.util.ArrayList;
//import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class helloworld
 */
@WebServlet("/IronMan")
public class Delete extends HttpServlet {
	private static final long serialVersionUID = 2L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Delete() {
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
        
		String order_id=request.getParameter("oid");
		if(order_id != null) {
		int n = order_id.split(",").length;
		out.print(n);
		String[] arrOfStr = new String[n+1];
		arrOfStr = order_id.split(","); 
		if(n >= 1) {
        for (String str : arrOfStr) { 
		          
		try{  
		Class.forName(ConnJDBC.JDBC_DRIVER);  
		conn = DriverManager.getConnection(url,username,password); 
		String s="delete from Invoice_details where doc_id = ?";
		PreparedStatement ps=conn.prepareStatement(s);
		
		ps.setString(1,str);

        
		int i=ps.executeUpdate();  
		if(i>0)  
		out.print("deleted");  
		      
		conn.close();
		}
		catch (Exception e2) {System.out.println(e2);}  
		out.flush();    
		out.close();  
		
	
        }
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