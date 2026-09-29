let num1 = document.getElementById('num1').value;
let num2 = document.getElementById('num2').value;
//let sign = document.getElementById('item');
//let signChange = "hi"
//let sign = document.getElementById('sub');
//const button = document.getElementById('button');
let res = ""

//failure
//sign.addEventListener("change", function (event) {
//    signChange = event.target.value;
//})

//console.log(signChange);



document.getElementById("add").addEventListener("click", function() {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    res = Number(num1) + Number(num2)
    const rut = document.getElementById('result').innerHTML=res;
    //console.log(res);

})

document.getElementById("min").addEventListener("click", function() {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    res = Number(num1) - Number(num2)
    const rut = document.getElementById('result').innerHTML=res;
})

document.getElementById("mul").addEventListener("click", function() {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    res = Number(num1) * Number(num2)
    const rut = document.getElementById('result').innerHTML=res;

})

document.getElementById("div").addEventListener("click", function() {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    res = Number(num1) / Number(num2)
    const rut = document.getElementById('result').innerHTML=res;

})