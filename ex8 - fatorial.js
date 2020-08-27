function principal(){

    do{
        var n = Number(prompt(`Informe um nro positivo e inteiro: `))
    }
    while(n < 0)

    var resp = fat(n)
    console.log(resp)
}

function fat(n){

    var fat = n
    for(var i = 1; i < n; i++){
        fat = fat * i
    }

    return fat
}

principal()