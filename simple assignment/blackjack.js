
function deal(a, b){
   if (a <= 21 && b <= 21){
       
    document.getElementById("output").innerHTML = Math.max(a, b);
   return Math.max(a, b);
}
   else{
    document.getElementById("output").innerHTML = 0;
    return(0);
}

}
