// Set Interval function

function greet1() {
  console.log('Print after 3 seconds');
}

setInterval(greet1, 3000);



function showTime() {
  let dateTime= new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time)
}

let display = setInterval(showTime, 3000);


// Set setTimeout function
function timeout() {
  console.log('Timeout');
}

let id = setTimeout(timeout, 3000);
console.log('first message');



function greet(name, name1) {
  console.log('Hello' + ' ' + name + ' ' + name1);
}

setTimeout(greet, 2000, 'name1 ', 'name2');

