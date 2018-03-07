const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];
console.log("hi");

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("sum");
element.appendChild(para);
element.innerHTML = integers.sort(function (a, b) { return b - a }).filter((n) => n < 19).map((n) => (n * 1.5) - 1).reduce(function (a, b) { return a + b });