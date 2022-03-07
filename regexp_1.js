/nelsoneo@gmail.com/;
new RegExp("nelsoneo@gmail.com");  //type object

/*
Metacaractres - Parte 1

    . - Representa qualquer caracter (. ponto)
    \ - A barra é utilizada antes de caracteres especiais, como o objetivo de escapá-los.
    ^ - Inicia com um determinado caractere.
    $ - Finaliza com um determinado caractere.

    \w - Representa o conjunto [a-zA-Z0-9_].
    \W - Representa o conjunto [^a-zA-Z0-9_].
    \d - Representa o conjunto [0-9].
    \D - Representa o conjunto [^0-9].
    \s - Representa um espaço em branco.
    \S - Representa um não espaço em branco.
    \n - Representa uma quebra de linha.
    \t - Representa um tab.

Grupos de caracteres

    [abc] - Aceita qualquer caractere dentro do grupo, nesse caso a, b e c.
    [^abc] - Não aceita qualquer caractere dentro do grupo, nesse caso a, b ou c.
    [0-9] - Aceita qualquer caractere entre 0 - 9.
    [^0-0] - Não aceita qualquer caractere entre 0 - 9

Quantificadores

    Os quantificadores podem ser aplicados a caracterres, gurpos, conjuntos ou metacaracteres.

    {n} - Quantifica um número especifico.
    {n,} - Quantifica um número mínimo.
    {n, m} - Quantifica um númoero mínimo e um número máximo.
    ? - Zero ou um.
    * - Zero ou mais.
    + - Um ou mais.

Grupos de Captura

    () - Determina um grupo de captura para realizar a extração de valores de uma determinada String.

*/