function esperarPor(tempo = 2000){
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(), tempo)
    })
}
/*
esperarPor()
    .then(() => console.log('Executando promise...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...'))
*/
function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(1), 5000)
    })
}

async function executar(){
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}`)

    return valor + 3
}

executar().then(console.log) // precisa usar o then pois funções marcadas como async retornam uma promise