package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import connection.SingleConnection;
import model.Produto;

public class daoProduto {

	private Connection connection;
	
	public daoProduto() {
		connection = SingleConnection.getConnection();
	}
	
	public void inserirProduto(Produto produto) {
		
		String sql = "INSERT INTO PRODUTO (NOME, VALOR) VALUES(?, ?)";
		
		try {
			
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1, produto.getNome());
			ps.setLong(2, produto.getValor());
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
	
	public List<Produto> listarProduto(){
		
		String sql = "SELECT * FROM PRODUTO";
		
		List<Produto> produtos = new ArrayList<Produto>();
		Produto produto = null;
		
		try {
			
			PreparedStatement ps = connection.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				produto = new Produto();
				produto.setId(rs.getLong("id"));
				produto.setNome(rs.getString("nome"));
				produto.setValor(rs.getLong("valor"));
				
				produtos.add(produto);
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
		
		return produtos;
	}
	
	public Produto consultar(String id) {
		
		String sql = "SELECT * FROM PRODUTO WHERE ID = ?";
		
		Produto produto = null;
		
		try {
			
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setLong(1, Long.parseLong(id));
			
			ResultSet rs = ps.executeQuery();
			
			if(rs.next()) {
				
				produto = new Produto();
				produto.setId(rs.getLong("id"));
				produto.setNome(rs.getString("nome"));
				produto.setValor(rs.getLong("valor"));
				
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
		
		return produto;
		
	}
	
	public void atualizar(Produto produto) {
		
		String sql = "UPDATE PRODUTO SET NOME = ?, VALOR = ? WHERE ID = ?";
		
		try {
			
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1, produto.getNome());
			ps.setLong(2, produto.getValor());
			ps.setLong(3, produto.getId());
			
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
	
	public void deletarProduto(String id) {
		
		String sql = "DELETE FROM PRODUTO WHERE ID = ?";
		
		try {
			
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setLong(1, Long.parseLong(id));
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
