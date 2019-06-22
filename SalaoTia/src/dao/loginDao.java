package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import connection.SingleConnection;

public class loginDao {

	private Connection connection;
	
	public loginDao() {
		connection = SingleConnection.getConnection();
	}
	
	public boolean validarLogin(String login, String senha) {
		
		String sql = "SELECT * FROM USUARIO WHERE LOGIN = ? AND SENHA = ?";
		
		try {
			
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1, login);
			ps.setString(2, senha);
			
			ResultSet rs = ps.executeQuery();
			
			if(rs.next()) {
				connection.commit();
				return true;
			}
			
		} catch (Exception e) {
			try {
				connection.rollback();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
			e.printStackTrace();
		}
		
		return false;
		
	}
	
}
