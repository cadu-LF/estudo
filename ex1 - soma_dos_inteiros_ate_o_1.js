function principal(){

    var n = Number(prompt(`Informe um número (positivos e natural)`))
    var resp = op(n)
    console.log(resp)
}

function op(n){
    var soma = n
    for(var i = 0; i <= n; i++){
        soma = soma + i
    }
    return soma
}

principal()