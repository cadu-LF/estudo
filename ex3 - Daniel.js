function compara(cadeia1, cadeia2){
    if (cadeia1 == cadeia2){
        return 0 
    }
    else{
        //opercador ternário
        var Maior = (cadeia1.length > cadeia2.length) ? cadeia1.length : cadeia2.length

        /** O operador ternário faz isso: 
         * if (cadeia1.length > cadeia2.length){
         *      Maior = cadeia1.length
         * }
         * else{
         *      Maior = cadeia2.length
         * } */

        for(var i = 0; i < Maior; i++){
            if (cadeia1[i] != cadeia2[i]){
                return i + 1

            }
        }
    }
}

function principal(){
    var c1 = prompt('Informe a cadeia 1')
    var c2 = prompt('Informe a cadeia 2')
    var res = compara(c1, c2)
    console.log(`O resultado da comparação é ${res}`)
}