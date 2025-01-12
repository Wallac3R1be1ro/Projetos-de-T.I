<?php

$CalCep = $_GET["Cep"];

if ($CalCep != ' ')
{
	 
	$Resultado= 'Frete = R$ 10,00 - Entrega em até 2 dias úteis';		 	
}
else
{
	$Resultado = 'Erro na gravação, todos campos são obrigatórios';
}

echo $Resultado;