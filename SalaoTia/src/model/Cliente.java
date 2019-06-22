package model;

public class Cliente {
	
	private long id;
	private String nome;
	private String email;
	
	public Cliente() {
		
	}
	
	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public Cliente(String nome, String email) {
		this.nome = nome;
		this.email = email;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Cliente [nome=" + nome + ", email=" + email + "]";
	}
	
	
	
	
	
}
