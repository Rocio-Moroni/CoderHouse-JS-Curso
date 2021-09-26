/* CLASE 3: CICLOS, BUCLES o ITERACIONES.

> ESTRUCTURA FOR: Garantiza la repetición de un conjunto de instrucciones hasta que cierta variable numérica tenga un valor específico.

    for (inicialización ; condición ; iteración) {
    sentencia;
    }

    Ejemplo1:
        for (let i = 0; i < 20; i++) {
            console.log(i);
        }

    Ejemplo2:
        let numeroDeUsuarios = 20;
        for (let i = 1; i <= numeroDeUsuarios; i++) {
            console.log(i);
        }

    Ejemplo3:
        let dias = ['lunes' , 'martes' , 'miercoles' , 'jueves' , 'viernes' , 'sabado' , 'domingo'];
        for ( i = 0 ; i <= dias.length - 1 ; i++ ) {
            console.log(dias[i]);
        }

> ESTRUCTURA WHILE: Mientras la condición se evalúe como verdadera, se repetirá el bloque de instrucciones definido (cabe aclarar que hay que prestar especial cuidado al momento de codificar el condicional). Cuando usamos while, asumimos que en algún momento la repetición va a finalizar; si la comparación no se realiza adecuadamente, podemos generar el llamado “bucle infinito”. Puede no realizar repetición alguna si el condicional resulta falso (false) en el primer ciclo.

    while(condición) {
    sentencia;
    }

    Ejemplo1:
        let i = 0;
        while(i < 10) {
            console.log(i);
            i++;
        }

    Ejemplo2:
        let dias = ['lunes' , 'martes' , 'miercoles' , 'jueves' , 'viernes' , 'sabado' , 'domingo'];
        let  numeroDias = dias.length - 1;
        i = 0;
        while (i <= numeroDias) {
            console.log(dias[i]);
            i++;
        }

> ESTRUCTURA DO...WHILE: A veces existe la necesidad de emplear una estructura que garantice al menos una interpretación del bloque de instrucciones de la estructura; en ese caso, usamos do...while, que funciona de forma similar al while, sólo que el condicional se evalúa al final de la iteración y no al comienzo, permitiendo ejecutar al menos una vez el conjunto de instrucciones.

    do {
        sentencia;
    }
    while(condicion);

    Ejemplo1:
        let num1;
        let num2;
        do{
            num1 = Math.floor(Math.random() * (7 - 1)) + 1;
            num2 = Math.floor(Math.random() * (7 - 1)) + 1;
            console.log(num1,num2);
        } while(num1 != 3 || num2 != 3);


*/