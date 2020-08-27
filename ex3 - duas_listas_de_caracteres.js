function principal(){

    var cadeia1 = prompt(`Informe os caracteres da cadeia 1`)
    var cadeia2 = prompt(`Informe os caracteres da cadeia 2`)

    var resp = compara(cadeia1, cadeia2)
    console.log(resp)
}


function compara(cadeia1, cadeia2){

    if(cadeia1 == cadeia2){
        return 0
    }
    else{
        
        if(cadeia1.length > cadeia2.length){
            
            for(var i = 0; i < cadeia1.length; i++){
                
                if(cadeia1[i] != cadeia2[i]){
                    console.log(`achou o elemento diferente: cadeia1 = ${cadeia1[i]} - cadeia2 = ${cadeia2[i]}`)
                    return i + 1
                }
            }
        }
        else{
    
            for(var i = 0; i < cadeia2.length; i++){

                if(cadeia2[i] != cadeia1[i]){
                    console.log(`achou o elemento diferente: cadeia2 = ${cadeia2[i]} - cadeia1 = ${cadeia1[i]}`)
                    return i + 1
                }
            }
        }
    }
}

principal()