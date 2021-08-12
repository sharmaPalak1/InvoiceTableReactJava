
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Del
 */
@WebServlet("/hello")
public class Edit extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Edit() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
				
		
	    	PrintWriter out = response.getWriter();  
        
	    	String d_id=request.getParameter("ie");
	    	String open_amount=request.getParameter("invoice_amt");
			String notes=request.getParameter("notes");
			String url = "jdbc:mysql://localhost/h2h_internship";
			String username = "root";
			String password = "1234";
			Connection conn=null;
			System.out.println("yayy.. server works");
			          
			try{  
				Class.forName(ConnJDBC.JDBC_DRIVER);
				conn = DriverManager.getConnection(url,username,password);  
			String s="UPDATE invoice_details"+ " SET total_open_amount= (?), "+ "notes=(?) "+"WHERE doc_id=(?)";
			PreparedStatement ps=conn.prepareStatement(s);

			ps.setString(1,open_amount);
			ps.setString(2,notes);
			ps.setString(3,d_id);
			
			ps.executeUpdate();  
	  
			      
			conn.close();       
			}catch (Exception e2) {System.out.println(e2);}  
			}
				        	  

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}