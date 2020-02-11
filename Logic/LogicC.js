function and(){
    var x = document.getElementById("tbool").value;
    var y = document.getElementById("tbool").value;
    if(x == "true"){x = true; }
    else if(x == "false"){ x = false; }
    else{ alert("please only enter true or false") }
    if(y == "true"){y = true; } 
    else if (y == "false"){y = false; }
    else{ alert("plese only enter true or false") }
    var z = x && y;
    document.getElementById("output").innerHTML = z;
}
function or(){
    var x = document.getElementById("tbool").value;
    var y = document.getElementById("tbool").value;
    if(x == "true"){x = true; }
    else if(x == "false"){ x = false; }
    else{ alert("please only enter true or false") }
    if(y == "true"){y = true; } 
    else if (y == "false"){y = false; }
    else{ alert("plese only enter true or false") }
    var z = x || y;
    document.getElementById("output").innerHTML = z;
}
function not(){
    var x = document.getElementById("tbool").value;
    var y = document.getElementById("tbool").value;
    if(x == "true"){x = true; }
    else if(x == "false"){ x = false; }
    else{ alert("please only enter true or false") }
    if(y == "true"){y = true; } 
    else if (y == "false"){y = false; }
    else{ alert("plese only enter true or false") }
    var z = x != y;
    document.getElementById("output").innerHTML = z;
}