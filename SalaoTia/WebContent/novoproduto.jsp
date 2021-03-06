<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
			<li><a href="index.jsp">Salão da Tia Anamelia</a></li>
			<li><a href="cliente.jsp">Cliente</a> &nbsp;&nbsp;&nbsp;&nbsp; <a
				href="produtos.jsp">Produtos</a></li>

		</ul>
	</nav>

	<section class="slide">
		<form class="fundo" action="salvarProduto" method="post">

			<div class="form-group">
				<label  for="exampleInputEmail1">ID Produto</label> 
				<input value="${produto.id}" readonly="readonly"
					type="number" class="form-control" id="idProduto"
					name="idProduto" aria-describedby="emailHelp"
					placeholder="ID">
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Nome Produto</label> 
				<input
					value="${produto.nome}"
					type="text" class="form-control" id="nomeProduto"
					name="nomeProduto" aria-describedby="emailHelp"
					placeholder="descricao produto">
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Valor</label> 
				<input
					value="${produto.valor}"
					class="form-control" type="number" value="0"
					id="valorProduto" name="valorProduto">
			</div>
			<button type="submit" class="btn cor">Cadastra Produto</button>
		</form>
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