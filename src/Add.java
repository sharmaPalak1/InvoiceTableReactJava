

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

/**
 * Servlet implementation class helloworld
 */
@WebServlet("/hellokitty")
public class Add extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Add() {
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
        
		String cust_name=request.getParameter("customer_name");  
		String cust_no=request.getParameter("customer_no");  
		String sales_amount=request.getParameter("invoice_amt");
		String sales_order_n=request.getParameter("invoice_no");

		if(sales_order_n != null) {
			

		String due_date=request.getParameter("due_date");  
		String notes=request.getParameter("Notes");

		String url = "jdbc:mysql://localhost/h2h_internship";
		String username = "root";
		String password = "1234";
		Connection conn=null;
		System.out.println("ok");
		          
		try{  
			Class.forName(ConnJDBC.JDBC_DRIVER);
			conn = DriverManager.getConnection(url,username,password);  
		String s="INSERT INTO invoice_details (cust_number,  name_customer,  due_in_date, doc_id,total_open_amount,notes)"+ "VALUES (?, ?, ?, ?,?,?)";
		PreparedStatement ps=conn.prepareStatement(s);
	
		ps.setString(1,cust_no);  
		ps.setString(2,cust_name);
		ps.setString(3,due_date);
		ps.setString(4,sales_order_n);
		ps.setString(5, sales_amount);
		ps.setString(6,notes);
		
		ps.executeUpdate();  
  
		      
		conn.close();       
		}catch (Exception e2) {System.out.println(e2);}  
		}
		else
		out.println("document id is null! RETRY");
		out.close();
			        	  
			          }
			  

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}