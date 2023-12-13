var angkastring = '42';
// merubah menjadi interger
var angkainteger = parseInt(angkastring);
// merubah menjadi float (desimal)
var angkaFloat = parseFloat(angkainteger);

document.write("<h3>conversion</h3>");
document.write("string: " + angkastring + "<br>");
document.write("integer: " + angkainteger + "<br>");
document.write("float: " + angkaFloat + "<br>");

//coercion (imolint type conversion)
var angka = 10
var string = "29";
var hasil = angka + string;

document.write("<h3>coercion</h3>")
document.write("angka: " + angka + "<bn>");
document.write("string: " + string + "<br>");
document.write("hasil:" + hasil + "<br>");

var boolean = true;
var number = 42;
var result = boolean + number;

document.write("boolean: " + boolean + "<br>");
document.write("number: " + number + "<br>");
document.write("result: " + result + "<br>");

