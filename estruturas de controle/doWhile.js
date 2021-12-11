function getIntRandom(min, max){
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

do{
    opcao = getIntRandom(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while(opcao != -1)

console.log('Até a próxima!')