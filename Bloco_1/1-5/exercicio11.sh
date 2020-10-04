#!/bin/bash

echo -e "11. Modifique o Shell Script do exercício anterior para receber o diretório onde estão os arquivos e a extensão dos arquivos que devem ser modificados como argumento (ou parâmetro). Adicione também um mensagem mostrando como eram o como vão ficar os nomes dos arquivos a serem modificados."
echo "Resposta:"

DIRETORIO=$1
EXTENSAO=$2

DAY=$(date +%F)

cd $DIRETORIO

for FILE in `ls *.$EXTENSAO`
do
    echo "Renomenado $FILE para ${DAY}-${FILE}"
    mv $FILE ${DAY}-${FILE}
done
