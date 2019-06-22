package dao;

import java.security.KeyStore.ProtectionParameter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.ParseConversionEvent;

import connection.SingleConnection;
import model.Cliente;

public class daoUsuario {

	private Connection connection;
	
	public daoUsuario() {
		connection = SingleConnection.getConnection();
	}
	
	public void CadastrarCliente(Cliente cliente) {
		
		String sql = "INSERT INTO CLIENTE (NOME, EMAIL) VALUES(?, ?)";
		
		try {
			
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1, cliente.getNome());
			ps.setString(2, cliente.getEmail());
			ps.execute();
			
			connection.commit();
			
		} catch (Exception e) {
			
			try {
				connection.rollback();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
			
			e.printStackTrace();
		}
		
	}
	
	public List<Cliente> listarCliente(){
		
		String sql = "SELECT * FROM CLIENTE";
		
		List<Cliente> clientes = new ArrayList<Cliente>();
		Cliente cliente;
		
		try {
			
			PreparedStatement ps = connection.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				
				cliente = new Cliente();
				cliente.setId(rs.getLong("id"));
				cliente.setNome(rs.getString("nome"));
				cliente.setEmail(rs.getString("email"));
				
				clientes.add(cliente);
				
			}
			
			connection.commit();
			
		} catch (Exception e) {
			
			try {
				connection.commit();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
			e.printStackTrace();
		
		}
		
		return clientes;
		
	}
	
	public void deletarCliente(String id) {
		
		String sql = "DELETE FROM CLIENTE WHERE ID = ?";
		
		try {
			
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setLong(1,Long.parseLong(id));
			ps.execute();
			
			connection.commit();
			
		} catch (Exception e) {
			
			try {
				connection.rollback();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
			e.printStackTrace();
			
		}
		
	}
	
	public Cliente consultar(String id) {
		
		String sql = "SELECT * FROM CLIENTE WHERE ID = ?";
		Cliente cliente = null;
		
		try {
			
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setLong(1, Long.parseLong(id));
			ResultSet rs = ps.executeQuery();
			
			if(rs.next()) {
				
				cliente = new Cliente();
				cliente.setId(rs.getLong("id"));
				cliente.setNome(rs.getString("nome"));
				cliente.setEmail(rs.getString("email"));
				
			}
			
			connection.commit();
			
			
		} catch (Exception e) {
			
			try {
				connection.rollback();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
			e.printStackTrace();
		}
		
		return cliente;
		
	}

	public void atualizar(Cliente cliente) {
		
		String sql = "UPDATE CLIENTE SET NOME = ?, EMAIL = ? WHERE ID = ?";
		
		try {
			
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1, cliente.getNome());
			ps.setString(2, cliente.getEmail());
			ps.setLong(3, cliente.getId());
			ps.execute();
			
			connection.commit();
			
		} catch (Exception e) {
			
			try {
				connection.rollback();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
			e.printStackTrace();
			
		}

	}
	
}
