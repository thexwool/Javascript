const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/1 * * * * *', function(){
    console.log('Exercutando Tarefa 1!', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Tarefa 1 cancelada!')
}, 10000)