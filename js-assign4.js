// Closure in JS
function outerFunction() {
  let outerVar = "This is outer function.";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}
const closureFunc = outerFunction();
closureFunc();



// Generator function
function* numGen() {
  yield 1;
  yield 2;
}
const numberGenerator = numGen();

console.log(numberGenerator.next().value);
console.log(numberGenerator.next().value);



// First class function : we can store function in a variable
function Name(name) {
  return "My name is" + name ;
}
const nameFunction = Name;
console.log(nameFunction("harnoor"));
