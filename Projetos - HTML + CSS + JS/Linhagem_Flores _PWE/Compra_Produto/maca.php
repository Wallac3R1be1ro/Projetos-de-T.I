<?php

$Valor = 35;
$Qtde = $_GET["Qtde"];


$Valorfinal = $Valor * $Qtde + 10;

echo 'R$ ' . $Valorfinal . ',00';