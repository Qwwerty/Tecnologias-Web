<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jstl/core" prefix="cs"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>

<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, user-scalable=no">
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
	integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
	crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Roboto+Slab"
	rel="stylesheet">
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">


<title>Salão da Tia Anamelia</title>
<link rel="stylesheet" href="css/estilo.css">

</head>
<body>

	<nav class="menu">
		<ul>
			<li><a href="index.html">Salão da Tia Anamelia</a></li>
			<li><a href="cliente.html">Cliente</a> &nbsp;&nbsp;&nbsp;&nbsp;
				<a href="produto.html">Produtos</a></li>

		</ul>
	</nav>

	<section class="slide">
		<a href="novoproduto.jsp" class="btn cor">Novo</a> </br> </br> </br>
		<table class="fundo table">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Nome</th>
					<th scope="col">Quantidade</th>
					<th scope="col">Editar</th>
					<th scope="col">Deletar</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${produtos}" var="produto">

					<tr>
						<td scope="row">${produto.id}</td>
						<td scope="row">${produto.nome}</td>
						<td>${produto.valor}</td>
						<td><a href="salvarProduto?acao=editar&id=${produto.id}"
							style="font-size: 10px">Editar</a></td>
						<td><a href="salvarProduto?acao=deletar&id=${produto.id}"
							style="font-size: 10px">Deletar</a></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</section>

	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
		integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
		crossorigin="anonymous"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
		integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o"
		crossorigin="anonymous"></script>

</body>
</html>