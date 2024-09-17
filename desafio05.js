/* 
     Escreva um programa que inverta os caracteres de um string.

        IMPORTANTE:
        a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
        b) Evite usar funções prontas, como, por exemplo, reverse;

*/

function textoReverso(texto){
    let tentativa = ''
    let transform = Array.from(texto)
    let tamanho = transform.length
    while(tamanho > 0){
        tamanho--
        tentativa += texto[tamanho]
        
    }
    console.log(tentativa)
}

textoReverso('texto')
textoReverso('Amor')
textoReverso('Ferrari')