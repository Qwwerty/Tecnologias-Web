package connection;

import java.sql.Connection;
import java.sql.DriverManager;

public class SingleConnection {
	
	private static String URL = "jdbc:postgresql://localhost:5432/geraldao?autoReconnect=true";
	private static String PASSWORD = "admin";
	private static String USER = "postgres";
	private static Connection connection = null;
	
	
	static {
		conectar();
	}
	
	public SingleConnection() {
		conectar();
	}
	
	private static void conectar() {
		
		try {
			
			if(connection == null) {
				Class.forName("org.postgresql.Driver");
				connection = DriverManager.getConnection(URL, USER, PASSWORD);
				connection.setAutoCommit(false);
			}
			
		} catch (Exception e) {
			throw new RuntimeException("Error ao conectar com o banco de dados");
			
		}
		
	}
	
	public static Connection getConnection() {
		return connection;
	}
}
