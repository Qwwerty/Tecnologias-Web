package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.daoProduto;
import model.Cliente;
import model.Produto;

/**
 * Servlet implementation class salvarProduto
 */
@WebServlet("/salvarProduto")
public class salvarProduto extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public salvarProduto() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String acao = request.getParameter("acao");
		String id = request.getParameter("id");
		
		RequestDispatcher rd = null;
		daoProduto dao = new daoProduto();
		
		if(acao.equals("atualizar")) {
			
			request.setAttribute("produtos", dao.listarProduto());
			rd = request.getRequestDispatcher("produto.jsp");
			rd.forward(request, response);
			
		}
		else if(acao.equals("editar")) {
			
			Produto produto = dao.consultar(id);
			request.setAttribute("produto", produto);
			rd = request.getRequestDispatcher("novoproduto.jsp");
			rd.forward(request, response);
			
		}
		else if(acao.equals("deletar")) {
			
			dao.deletarProduto(id);
			request.setAttribute("produtos", dao.listarProduto());
			rd = request.getRequestDispatcher("produto.jsp");
			rd.forward(request, response);
			
		}
	
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String id = request.getParameter("idProduto");
		String nome = request.getParameter("nomeProduto");
		String valor = request.getParameter("valorProduto");
		
		daoProduto dao = new daoProduto();
		
		RequestDispatcher rd = null;
		
		if(id == null || id.isEmpty()) {
			
			 Produto produto = new Produto();
			 produto.setNome(nome);
			 produto.setValor(Long.parseLong(valor));
			 
			 dao.inserirProduto(produto);
			 
			 request.setAttribute("produtos", dao.listarProduto());
			 rd = request.getRequestDispatcher("produto.jsp");
			 rd.forward(request, response);
			
		}
		else {
			Produto produto = new Produto();
			produto.setId(!id.isEmpty()? Long.parseLong(id): 0);
			produto.setNome(nome);
			produto.setValor(Long.parseLong(valor));
			
			dao.atualizar(produto);
			
			request.setAttribute("produtos", dao.listarProduto());
			rd = request.getRequestDispatcher("produto.jsp");
			rd.forward(request, response);
			
		}
		
	}

}
