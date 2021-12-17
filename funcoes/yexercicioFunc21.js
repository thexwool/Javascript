/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function valorPlanoSaude(idade){
    const valorPlano = 100

    if(idade < 10){
        return valorPlano + 80
    }else if(idade <= 30){
        return valorPlano + 50
    }else if(idade <= 60){
        return valorPlano + 95
    }else if(idade > 60){
        return valorPlano + 130
    }else{
        return 'Idade inválida'
    }
}

console.log(valorPlanoSaude(8))
console.log(valorPlanoSaude(15))
console.log(valorPlanoSaude(35))
console.log(valorPlanoSaude(52))
console.log(valorPlanoSaude(80))