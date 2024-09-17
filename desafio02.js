/* 
    Técnica:
        2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

        IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function ehFibonacci(valor){
    let fibonacci = false///////////////
    if(valor < 0){
        console.log('valor inválido')
    }
    if(valor == 0){
        console.log('É um fibonatti')
    }
    else{
        let numAnterior = 0
        let numAtual = 1
        
        while ( numAtual <= valor){
           if(numAtual == valor){
                fibonacci = true
           }
           [numAnterior , numAtual ] = [ numAtual, numAnterior + numAtual]             
           
        }
    }
    if(fibonacci){
        console.log("O valor digitado é um fibonacci")
    }else {
        console.log("O valor digitado não é um fibonacci")
    }
}

ehFibonacci(144)
ehFibonacci(12)
