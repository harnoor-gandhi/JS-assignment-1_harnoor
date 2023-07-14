let num1 = 11
let num2 = 12
let num3 = 13
let num4 = 14
console.log("Addition" + (num1 + num2))
console.log("Subracttion" + (num3 - num4))
console.log("Multiplication" + (num3*num2))
console.log("Modulus" + (num3%num2))
console.log("Exponent" + (num2**num4))
console.log("Pre-increment" + (++num1))
console.log("Pre-decrement" + (--num4))

// Assignment Operators:
num4-=num2
console.log(num4)

num1+=num2
console.log(num1)

num2/=num4
console.log(num2)

num2*=num1
console.log(num3)

num3**=num4
console.log(num3)

num2%=num3
console.log(num1)

// Logical Operators:
let m = 15
let n = 30

if((m > 15) && (n > 30 )){
    console.log("success")
}
else if ((m > 15) || (n < 30 )){
    console.log("lose")
}

// Terinary Operator:
let age=12
console.log(age>18 ? "big boy" : "small boy")


// Comparision Operators:
let x = 4
console.log( typeof x)
let y = 62

if (x == y){
    console.log("x is equal to y")
}    
else (x != y);{
    console.log("x is not equal to y")
}    

if (x < y){
    console.log("x is greater than y")
}    
else (x > y);{
    console.log("x is less than y")
}    

if (x <= y){
    console.log("x is greater than or euqal to y")
}    
else (x >= y);{
    console.log("x is less than or euqal to y")
}    

let a= "harnoorsingh"
let b = 10

if (a === b){
    console.log("They are equal")
}    
else if (a !==b){
    console.log("They are not equal")
}    


// String Addition:
let fname = "Harnoor"
let mname = " Singh"

console.log("Full: " + fname + mname )
console.log(fname.length)

