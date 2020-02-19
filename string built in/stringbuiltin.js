var a,b,c,d,e,f,g;
a = " RamonE duDley  ";
b = "cArD";
c = "HouSe";

console.log(a.length);
console.log(a.charAt(a.length - 1));
console.log(c.charAt(c.length - 1));
console.log(a.concat(b).concat(c).concat(a));
console.log(a + b);
console.log(a.endsWith("yy")); //false
console.log(a.endsWith("ey")); //true
console.log(a.includes("b"));
console.log(a.includes("one"));
console.log(a.indexOf("b"));
console.log(a.indexOf("a"));
console.log(a.indexOf("e"));
console.log(a.lastIndexOf("e"));
console.log(a.toLowerCase());
console.log(a.toUpperCase());
console.log(b.repeat(5));
e = a.split(" ");
console.log(e);
console.log(a.startsWith("e"));
console.log(a.startsWith("R"));
console.log(a.substr(3,9));
console.log(a.substring(3,9));
console.log(a.trim());
console.log(a.replace(" ","<<").replace(" ","<<").replace(" ","<<"));