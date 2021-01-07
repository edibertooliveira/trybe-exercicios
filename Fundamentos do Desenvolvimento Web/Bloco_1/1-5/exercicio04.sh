#!/bin/bash

echo -e "4. Escreva um Shell Script que verifique se o caminho até um arquivo existe (“file path”). Se ele existir, imprima na tela a mensagem: "O caminho _ está habilitado!". Então, verifique se você tem permissão de escrita no arquivo. Se tiver, mostre a mensagem: "Você tem permissão para editar _". Caso contrário, mostre a mensagem: "Você NÃO foi autorizado a editar _". O _ nas mensagens deve ser substituído pelo (“file path”)."
echo "Resposta:"

echo "você informou: $1"

if [ -e $1 ]
  then
    echo "O caminho $1 está habilitado!"
  fi

if [ -w $1 ]
  then
    echo "Você tem permissão para editar $1"
  else
    echo "Você NÃO foi autorizado a editar"
fi
  