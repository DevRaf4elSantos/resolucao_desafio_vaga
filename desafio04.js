/* 
        4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
                • SP – R$67.836,43
                • RJ – R$36.678,66
                • MG – R$29.229,88
                • ES – R$27.165,48
                • Outros – R$19.849,53

                Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

*/

function calculePercentual(sp, rj, mg, es , outros){
    let somatorio = sp + rj + mg + es + outros
    
    let dados = [sp, rj, mg, es, outros]
    
    let nomeEstados = [ 'São Paulo', 'Rio de Janeiro', 'Minas Gerais' ,'Espirito Santo', 'Outros']
    
    dados.map(valor => {
        console.log( `O estado de ${nomeEstados[dados.indexOf(valor)]} representa ${(valor / somatorio * 100 ).toFixed(2)}%`) 
    })
}

const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

calculePercentual(sp, rj, mg, es, outros)