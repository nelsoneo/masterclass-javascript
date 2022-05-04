/*
MORE ABOUT STRING_API

    * slice: Retorna uma parte da String que está invocando a função iniciando na posição passada no primeiro parãmetro até a posição final passada no segundo parãmetro, ou da posição 
        passada no primeiro parãmetro, ou da posição passada no primeiro parãmetro até o fim caso o segundo parámetro não seja informado.
    
    * split: Retorna um array contendo o resultado da diviição da String original de acordo com o critério passado por parãmetro.
        
    * substring: Similar ao slice, não aceita valores negativos como parãmetros e permite a inversção dos parámetros.
    
*/

"JavaScript".slice(0,4);
"JavaScript".slice(4);
"JavaScript".slice(0,-6);
"JavaScript".slice(-6);
"C;Java;JavaScript;Ruby".split(";");
"JavaScript".substring(0,4);
"JavaScript".substring(4,0);
"JavaScript".substring(4);