/* 
    Técnica:
        3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
        • O menor valor de faturamento ocorrido em um dia do mês;
        • O maior valor de faturamento ocorrido em um dia do mês;
        • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

        IMPORTANTE:
        a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
        b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

*/
const dados  = require('./dados.json')

let anteriorMaior = 0
let anteriorMenor = 100000
let maiorValor
let menorValor
let diaMelhorVenda
let diaPiorVenda
let valorTotal = 0
let dias = 1
let media = 0
let acimaMedia = Array()

function mostrandoDadosDaEmpresa(dados){
    dados.faturamentoDiario.filter(value => {
        
        let valorAtual = value.valor
        
        valorTotal += value.valor

        dias = value.dia

        media = valorTotal / dias 
        

        if(valorAtual > anteriorMaior){
            anteriorMaior = valorAtual
            maiorValor = valorAtual
            diaMelhorVenda = value.dia
        }

        if(valorAtual < anteriorMenor ) {
            anteriorMenor = valorAtual
            menorValor = valorAtual
            diaPiorVenda = value.dia
        }
    })

    dados.faturamentoDiario.filter(value => {
        let valorAtual = value.valor
        if( valorAtual > media){
            let dados = {
                dia : value.dia,
                valor : value.valor
            }

            acimaMedia.push(dados)
        }
    })

    console.log(`O melhor dia de venda foi ${diaMelhorVenda} que conseguimos arrecadar R\$ ${maiorValor.toFixed(2)} `)

    console.log(`O pior dia de venda foi ${diaPiorVenda} que só conseguimos arrecadar R\$ ${menorValor.toFixed(2)} `)
    
    console.log(`A média desse mês foi R\$ ${media.toFixed(2)}`)

    console.log('Os valores acima da média são: ')
    
    for (const element of acimaMedia) {
        console.log(`No dia ${element.dia} arrecadamos R\$ ${element.valor.toFixed(2)}` )
    }
}

mostrandoDadosDaEmpresa(dados)