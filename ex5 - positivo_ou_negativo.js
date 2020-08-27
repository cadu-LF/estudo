function principal(){
    var n = Number(prompt(`Informe um número inteiro: `))

    var resp = ver(n)
    console.log(resp)
}

function ver(n){

    if(n > 0){
        return 'positivo'
    }
    else{
        if (n < 0){
            return 'negativo'
        }
        else{
            return 'neutro'
        }
    }
}

principal()