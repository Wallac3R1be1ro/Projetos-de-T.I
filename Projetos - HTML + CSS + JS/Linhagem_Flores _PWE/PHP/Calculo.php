<?php

$Valor = $_GET["Valor"];
$Qtde = $_GET["Qtde"];


$Valorfinal = $Valor * $Qtde + 10;

echo 'R$ ' . $Valorfinal . ',00';
