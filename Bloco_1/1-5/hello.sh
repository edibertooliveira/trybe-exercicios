#!/bin/bash

VARIAVEL='Beber Votar Viajar Sair Casar'

echo 'Muito prazer, '$1
read -p "Qual a sua idade?" IDADE

if [ $IDADE -lt 18 ]
then
  echo 'Não pode beber!!'
else
  for opcao in $VARIAVEL
  do
  echo "Agora você ja pode $opcao"
  done
fi
