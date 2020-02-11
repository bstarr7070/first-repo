function equalto(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x == y;
    document.getElementById("output").innerHTML = z ;
}
function notequal(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x != y;
    document.getElementById("output").innerHTML = z ;
}
function greater(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x > y;
    document.getElementById("output").innerHTML = z ;
}
function less(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x < y;
    document.getElementById("output").innerHTML = z ;
}
function greaterequal(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x >= y;
    document.getElementById("output").innerHTML = z ;
}
function lessequal(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x <= y;
    document.getElementById("output").innerHTML = z ;
}
