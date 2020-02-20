var l, h, a;
function calculateA(){
  var  l = document.getElementById("num1").value;
   var h = document.getElementById("num2").value;
    var a = l * h;
    document.getElementById("output").innerHTML = a;


}
function calculateP(){
    var  l = document.getElementById("num1").value;
     var h = document.getElementById("num2").value;
      var a = (2 * l) + (2 * h);
      document.getElementById("output").innerHTML = a;
  
  
  }