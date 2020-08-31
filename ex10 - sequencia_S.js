principal()

function principal(){

    var n = Number(prompt(`Informe um numero inteiro e positivo`))

    var resp = S(n)

    console.log(resp)
}


function S(nro){

    var result = 1
    for(var i = 2; i <= nro; i++){
        result += 1/i
    }

    return result
}