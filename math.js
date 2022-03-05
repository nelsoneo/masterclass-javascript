// Math é um objeto global que contém constantes matemática e métodos para a realização de operações envolvnendo números

/*Constante*/

Math.E;
Math.LN10;
Math.LN2;
Math.LOG10E;
Math.LOG2E;
Math.PI;
Math.SQRT1_2;
Math.SQRT2;

/* OPERACIONES 

* abs: Converte o sinal de número para positivo
* ceil: Arredonda o número para cima.
* floor: Arredonda o número para baixo.
* round: Arredonda o número para cima se a parte ddecimal for de 5 a 9 e para baixo se for de 0 a 4
* sign: Retorna 1 se o número for positivo e -1 se for negativo.
* trunc: Eimina a parte decimal do número tornando-o um inteiro.

*/

Math.abs(10);
Math.abs(-10);
Math.ceil(1.1);
Math.ceil(-1.1);
Math.floor(9.9);
Math.floor(-9.9);
Math.round(4.5);
Math.round(-4.5);
Math.sign(5);
Math.sign(-5);
Math.trunc(2.3);
Math.trunc(-2.3);

/* more OPERACIONES

* cbrt: Retorna a raiz cúbida do número.
* cos: REtorna o coseno de um ângulo.
* exp: Retorna E elevado a um expoente.
* hypot: Retorna a raiz quadrada dos quadrados dos números.
* log: Retorna o logaritmo do númoero em base natura.
* pow: Retorna o número elevado a um determinado expoente.
* sin: Retorna o seno de un ângulo.
* sqrt: Retorna a raiz quadrada do número.
* tan: Retorna a tangente de un ângulo.

*/

Math.cbrt(8);
Math.cos(Math.PI / 3);
Math.exp(1);
Math.hypot(3.4);
Math.log(1);
Math.pow(2,10);
Math.sin(Math.PI / 2);
Math.sqrt(4);
Math.tan(Math.PI / 4);

/* more OPERACIONES 

* min: Retorna o menor número passado por parâmetro.
* max: Retorna o maior número passado por parâmetro.
* random: Retorna um número ranômico entre 0 e 1, não incluindo o 1

*/

Math.min(1,2,3,4,5,6)
Math.max(1,2,3,4,5,6)
Math.trunc(Math.random() * 10)
