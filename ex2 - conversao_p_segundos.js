function principal(){

    var tempo = prompt(`Informe o tempo: hh:mm:ss`).split(':')

    for(var i = 0; i < 3; i++){
        tempo[i] = Number(tempo[i])
    }
    

    var resp = conversor(tempo)
    console.log(resp)
}

function conversor(tempo){

    var seg = tempo[0] * 3600
    seg = seg + tempo[1] * 60
    seg = seg + tempo[2]
    return seg
}

principal()