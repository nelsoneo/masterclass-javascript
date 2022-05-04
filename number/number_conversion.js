//o metodo toString() pode ser utilizado para convertir de um tipo a outro

(0xA).toString(10);
(0b1010).toString(16);
(010).toString(2);
(10).toString(8);


//o metodo parseInt permite converter uma string para um número, para isso basta indicar o numero e sua base, caso não seja informada será 10 (decimal)

parseInt("10", 10);
parseInt("9.9", 10);
parseInt("A", 16);
parseInt("11",2);
parseInt("010",8)
parseInt("Neo") //retorna NaN significa que não é possivel converter para um número com base 10 (decimal), neste caso sirve para validar si um string é um Number de

// o metodo parseFloat é um pouco mais específico e converte apenas números no sistema de numeração decimal, base 10.

parseFloat("10");
parseFloat("2.5");
parseFloat("0xff");
parseFloat("0b10");
parseFloat("neo");  // se retorna NaN significa que não é possivel convertir a um número, por tanto sirve para validar também se a string é um number
