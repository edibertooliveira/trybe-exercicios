#!/bin/bash

echo -e "9. Escreva um Shell Script que receba um diretório como argumento (ou parâmetro). \nSe o argumento não for um diretório, mostre a mensagem: "O argumento _ não é um diretório!". Se o argumento for um diretório, \nconte quantos arquivos existem nele e mostre a seguinte mensagem: "O _ tem _ arquivos.", em que você deve substituir \nos "_" pelo diretório e a quantidade de arquivos nele, respectivamente."
echo "Resposta:"

DIRETORIO=$1

if [ -d $DIRETORIO ]
then
    QTDE=`ls -l $DIRETORIO | wc -l`
    echo "O $DIRETORIO tem $QTDE arquivos."
else
    echo "O argumento $DIRETORIO não é um diretório!"
fi