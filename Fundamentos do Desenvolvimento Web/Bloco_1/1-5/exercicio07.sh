#!/bin/bash

echo -e "7. Modifique o Shell Script do exercício anterior de forma \nque ele aceite o nome do arquivo ou diretório como argumento (ou parâmetro), em vez de perguntar ao usuário. \nPesquise nos recursos adicionais como utilizar os parâmetros (ou argumentos) no Shell Script."
echo "Resposta:"

CAMINHO=$1

if [ -f $CAMINHO ]
then
    echo "Isto é um arquivo."
elif [ -d $CAMINHO ]
then
    echo "Isto é um diretório."
else
    echo "Isto é outro tipo de arquivo."
fi
ls -l $CAMINHO
