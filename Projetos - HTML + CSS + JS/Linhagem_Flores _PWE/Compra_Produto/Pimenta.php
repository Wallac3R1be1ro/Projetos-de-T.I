<?php

$Valor = 28;
$Qtde = $_GET["Qtde"];


$Valorfinal = $Valor * $Qtde + 10;

echo 'R$ ' . $Valorfinal . ',00';