#!/bin/bash

echo -e "6. Escreva um Shell Script que peça ao usuário um caminho de arquivo ou diretório e, \nem seguida, imprima na tela se ele é um arquivo comum, um diretório, ou outro tipo de arquivo. \nDepois, faça um comando de listagem no arquivo/diretório usando a opção de listagem detalhada."
echo "Resposta:"

read -p "Informe o caminho do Diretorio: " VARIAVEL

if [ -d $VARIAVEL ]
  then
    echo "Arquivo é valido como Diretorio"
elif [ -f $VARIAVEL]
  then
    echo "Arquivo é comum"
else 
    echo "outro tipo"
fi

ls $VARIAVEL -la