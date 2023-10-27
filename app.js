let num = Number(prompt("Enter number"));
let result = 1;
for (let i = 1; i <= num; i++) {
  result *= i;
}
document.write("Number: " + num + "\r\n" + "Factorial result: " + result);
