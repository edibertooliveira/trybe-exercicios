#!/bin/bash

echo -e "8. Modifique o Shell Script do exercício anterior para aceitar uma quantidade \nilimitada de arquivos ou diretórios como argumento (ou parâmetro)."
echo "Resposta:"

CAMINHO=$@

for NOME in $CAMINHO
do
    if [ -f $NOME ]
    then
        echo "Isto é um arquivo."
    elif [ -d $NOME ]
    then
        echo "Isto é um diretório."
    else
        echo "Isto é outro tipo de arquivo."
    fi
    ls -l $NOME
done