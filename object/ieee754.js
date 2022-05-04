0.1 + 0.2;
666.7 - 666.6;
33.3 * 3;
12.2 / 0.1;

// Infinity que pode ser positivo ou negativo, é retornado quando uma operação ultrapassa os limites do tipo number

1/0;
Math.pow(10, 1000);
Number.MAX_VALUE * 2;
Math.log(0);
-Number.MAX_VALUE * 2;

// NAN, ou Not a Number, é retornado quando realizamos uma operação numérica onde não é possível deteriminar o resultado.

10 * "javascript";
0/0;
Math.sqrt(-9);
Math.log(-1);
parseFloat("JavaScript");

isNaN(Nan) == true //muito utilizado para saber se o parametro é um number
