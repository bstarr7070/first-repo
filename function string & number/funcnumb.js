function stringTimes(word, n){
    console.log(word.repeat(n));
}
var a, b, c;
stringTimes("flapjack", 0);

function makes10 (a, b){
    if( (a == 10 || b == 10) || (a + b == 10)){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
makes10(2,8); makes10(2,10); makes10(2,2);