principal()

function principal(){

    var x = Number(prompt(`X`))
    var z = Number(prompt(`Z`))

    var resp = potenc(x, z)

    console.log(resp)
}


function potenc(n1, n2){

    var valor = n1
    for(var i = 2; i <= n2; i++){
        valor *= n1
    }

    return valor
}