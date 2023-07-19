// Object to String Conversion:
let obj = { key: "value" };
let str = JSON.stringify(obj);
console.log(str);
console.log(typeof(str)+"\n");

// Boolean to String Conversion:
let bool = true;
let str1 = bool.toString();
console.log(str1);
console.log(typeof(str1)+"\n");

// Number to Boolean Conversion:
let num1 = 0;
let bool1 = Boolean(num1); // false

let num2 = 5;
let bool2 = Boolean(num2); // true
console.log(bool1+" \n"+bool2+ "\n");

// String to Number Conversion:
let str2 = "2.15";
let num3= parseFloat(str2);
console.log(num3);
console.log(typeof(num3)+"\n");

// String to Boolean Conversion:
let str3 = "true";
let bool3 = Boolean(str3);

let str4= "false";
let bool4 = Boolean(str4);
console.log(bool3+"\n"+bool4+"\n");

// String to Integer Conversion:
let str5 = "15";
let integer = parseInt(str5);
console.log(typeof(integer)+"\n");

// Number to String Conversion:
let num4 = 786;
let str6 = num4.toString();
console.log(typeof(str6));

const d = new Date();
let text = d.toString();

console.log(text)
