principal()

function principal(){

    var vetor = []
    var A =[]
    var B = []

    entrada(vetor)
    parImpar(vetor, A, B)

    console.log(`Vetor principal: ${vetor}`)
    console.log(`Vetor dos pares: ${A}`)
    console.log(`Vetor dos ímpares: ${B}`)
}


function entrada(vet){

    for(var i = 0; i < 10; i++){
        vet.push(Number(prompt(`Informe o elemento ${i + 1} do vetor`)))
    }

}


function parImpar(vet, par, impar){

    for(var i = 0; i < vet.length; i++){
        if(vet[i] % 2 == 0){
            par.push(vet[i])
        }
        else{
            impar.push(vet[i])
        }
    }
}