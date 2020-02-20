function compare(){
var x = [12, 4, 18, 7, 9, 13, 3, 10];
var y = [1, 6, 18, 19, 5, 17, 20, 9];
var z = [];
for (var i = 0; i < x.length; i++){
    for (var j = 0; j < y.length; j++){
        if (x[i] == y[j]) {
            z[z.length] = x[i];
            
        }
    }
}
console.log(z);
}compare();