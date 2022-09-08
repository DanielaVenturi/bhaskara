function clicar_calcular(){
let valorDoA = Number(document.getElementById("valorA").value);
let valorDoB = Number(document.getElementById("valorB").value);
let valorDoC = Number(document.getElementById("valorC").value);

const delta =  valorDoB ** 2 - (4 * valorDoA * valorDoC)

if(delta > 0){
    const contaUm = (- valorDoB + delta / (2 * valorDoA));
    const contaDois =  (- valorDoB - delta / (2 * valorDoA));

    document.getElementById("resultado").innerHTML = `resultado = ${contaUm}, ${contaDois} `

}

}

