function principal(){

    var nros = []
    do{

        nros.push(prompt(`Infome um numero: `))
        var resp = prompt(`deseja sair? s/n`)

    }
    while(resp != 's')

    for(var i = 0; i < nros.length; i++){
        nros[i] = Number(nros[i])
    }

    resp = media(nros)
    console.log(resp)
}

function media(nros){

    var media = 0
    for(var i = 0; i < nros.length; i++){
        media += nros[i]
    }

    return media / i
}

principal()