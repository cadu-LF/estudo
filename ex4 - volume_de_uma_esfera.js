function principal(){

    var r = Number(prompt(`Raio da esfera: `))

    var resp = volume(r)
    console.log(resp)
}

function volume(r){

    return 4/3 * r
}

principal()