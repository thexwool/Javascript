/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diaUtil(dia){
    switch(dia){
        case 1: case 7:
            console.log("Fim de Semana")
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log("Dia Útil")
            break
        default:
            console.log("Dia Inválido")
    }
}

diaUtil(0)
diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)
diaUtil(8)
diaUtil(31)