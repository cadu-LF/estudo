function principal(){

    var h = Number(prompt(`Altura: `))
    var sexo = prompt(`Sexo: (masculino/feminino)`)

    var resp = imc(h, sexo)
    console.log(resp)
}

function imc(h, sexo){

    switch(sexo){
        case 'masculino':
            return 72.7 * h - 58
        case 'feminino':
            return 62.1 * h - 44.7
        default:
            return 'sexo digitado inválido'
    }
}

principal()