var num1 = Number(prompt("Enter number 1 "))
var num2 = Number(prompt("Enter number 2 "))      
var num3 = Number(prompt("Enter number 3 "))
var num4 = Number(prompt("Enter number 4 "))

alert(" *** Arithmetic Operators"+"\nplus-minus-multiplication: "+ ((num1+num2)-(num3*num4)) +"\ndivision: " + (num1/num2)+"\nModulus: " + (num3%num2)+"\nExponent: " + (num2**num4)+"\nPre-increment: " + (++num1)+"\nPre-decrement: " + (--num4)) 

alert(" *** Assignment Operators"+"\nnum1+=num2 :  "+num1+"\nnum4-=num2 : " + num4+"\nnum3*=num1 :  " + num3+    "\nnum2/=num4 : " + num2 + "\nnum1%=num3 : " + num1 +"\nnum1**=num4 : " + num3 )
