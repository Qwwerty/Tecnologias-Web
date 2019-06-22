package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.daoUsuario;
import dao.loginDao;
import model.Cliente;

/**
 * Servlet implementation class salvarUsuario
 */
@WebServlet("/salvarUsuario")
public class salvarUsuario extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public salvarUsuario() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		Cliente cliente;

		String nome = request.getParameter("nomeCliente");
		String email = request.getParameter("emailCliente");
		String acao = request.getParameter("acao");
		String id = request.getParameter("id");

		RequestDispatcher rd = null;

		if (id == null || id.isEmpty()) {

			if (acao.equals("novoCliente")) {

				cliente = new Cliente(nome, email);

				daoUsuario usuario = new daoUsuario();
				usuario.CadastrarCliente(cliente);

				rd = request.getRequestDispatcher("cliente.jsp");
				daoUsuario dao = new daoUsuario();
				request.setAttribute("clientes", dao.listarCliente());
				rd.forward(request, response);

			}
		}

		if (acao.equals("deletar")) {

			daoUsuario daoUsu = new daoUsuario();
			daoUsu.deletarCliente(id);

			rd = request.getRequestDispatcher("cliente.jsp");
			request.setAttribute("clientes", daoUsu.listarCliente());
			rd.forward(request, response);

		}

		else if (acao.equals("editar")) {

			daoUsuario dao = new daoUsuario();
			cliente = dao.consultar(id);
			request.setAttribute("cliente", cliente);
			rd = request.getRequestDispatcher("novocliente.jsp");
			rd.forward(request, response);

		} else if(!id.isEmpty()){

			cliente = new Cliente();
			cliente.setId(!id.isEmpty() ? Long.parseLong(id) : 0);
			cliente.setNome(nome);
			cliente.setEmail(email);

			daoUsuario dao = new daoUsuario();
			dao.atualizar(cliente);
			request.setAttribute("clientes", dao.listarCliente());
			rd = request.getRequestDispatcher("cliente.jsp");
			rd.forward(request, response);

		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String login = request.getParameter("login");
		String senha = request.getParameter("senha");

		loginDao dao = new loginDao();
		daoUsuario daoUsu = new daoUsuario();
		RequestDispatcher rd = null;

		if (dao.validarLogin(login, senha)) {
			rd = request.getRequestDispatcher("cliente.jsp");
			request.setAttribute("clientes", daoUsu.listarCliente());
			rd.forward(request, response);
		} else {
			rd = request.getRequestDispatcher("login.jsp");
			rd.forward(request, response);
		}

	}

}
