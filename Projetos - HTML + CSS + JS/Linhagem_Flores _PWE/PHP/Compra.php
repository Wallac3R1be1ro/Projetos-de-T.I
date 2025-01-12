<?php

$Usuario = $_GET["Usuario"];
$Valor = $_GET["Valor"];
$Cep = $_GET["Cep"];
$Qtde = $_GET["Qtde"];
$cartao = $_GET["cartao"];

if ($Usuario != '' && $Valor != '' && $Cep != '' && $Qtde != '' && $cartao != '')
{
	$Resultado = 'Compra Efetuada com sucesso';
	$Resultado1 = 'N° do pedido: 010101010';
}
else
{
	$Resultado = 'Erro na gravação, todos campos são obrigatórios';
}

echo $Resultado . '<br>';
echo $Resultado1; 