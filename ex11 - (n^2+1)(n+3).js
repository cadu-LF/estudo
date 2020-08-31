principal()

function principal(){

    var n = Number(prompt(`Informe um valor positivo e inteiro`))

    var resp = seq(n)

    console.log(resp)
}

function seq(nro){

    var result = 0

    for(var i = 1; i <= nro; i++){
        result += (Math.pow(i, 2) + 1) / (i + 3)
    }

    return result
}