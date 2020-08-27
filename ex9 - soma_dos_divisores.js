function principal(){

    var n = Number(prompt(`infore um numero positivoe inteiro`))

    var resp = soma(n)
    console.log(resp)
}

function soma(n){

    var div = n

    for(var i = 1; i < n; i++){

        if (n % i == 00){
            div += i
        }
    }
    return div
}

principal()