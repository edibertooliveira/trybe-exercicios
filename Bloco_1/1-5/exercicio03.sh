#!/bin/bash

echo -e "3. Escreva um Shell Script que guarde o resultado do comando hostname em uma variável.\nImprima na tela uma mensagem: "Este script está rodando no computador: _" em que "_" é o resultado do comando hostname que está na variável;"
echo "Resposta:"

HOSTNAME=`hostname`
echo "Este script está rodando no computador: $HOSTNAME"