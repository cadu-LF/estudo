principal()

function principal(){
    // declarar o vetor
    var vetor = []
    // menu de opções
    do {
        var opcao = Number(prompt(`Escolha uma das opções: \n [1] Cadastrar \n[2] Média \n[3] Maior e menor idade 
        \n[4] Qtd de mulheres \n [5] Sair`))
        //verificar a opção q o usuário escolheu
        switch(opcao){
            case 1: cadastra(vetor)
                    break
            case 2: media(vetor)
                    break
            case 3: idade(vetor)
                    break
            case 4: qtdMulheres(vetor)
                    break
            case 5: console.log(`Grato por usar nosso software`)
                    break
            default: console.log(`Opção inválida`)
        }
    }
    while(opcao != 5)

} 

function cadastra(vet){
    // cria um objeto
    var objeto = new Object()
    objeto.idade = Number(prompt(`Informe a idade`))
    objeto.sexo = prompt(`Informe o sexo`)
    objeto.salario = Number(prompt(`Informe o salário`))
    objeto.filhos = Number(prompt(`Informe a quantidade de filhos`))
    // colocar o objeto dentro do vet
    vet.push(objeto) // o vet manda pro vetor declarado na linha 5
}

function media(vet){
    var media = 0

    for(var i = 0; i < vet.length; i++){
        media += vet[i].salario
    }

    console.log(`Média do salário = ${media / vet.length}`) 
}

function idade(vet){

    var maior = vet[0].idade
    var menor = vet[0].idade

    for(var i = 1 ;i < vet.length; i++){
        if (vet[i].idade < menor){
            menor = vet[i].idade
        }
        if (vet[i].idade > maior){
            maior = vet[i].idade
        }
    }

    console.log(`Maior idade = ${maior} - Menor idade = ${menor}`)
}

function qtdMulheres(vet){
    var qtd = 0
    for(var i = 0; i<vet.length; i++){
        if((vet[i].sexo == 'f') && (vet[i].filhos == 3) && (vet[i].salario < 500)){
            qtd++
        }
    }

    console.log(`Qtde de mulheres = ${qtd}`)
}