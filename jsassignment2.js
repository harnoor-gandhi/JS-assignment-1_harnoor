function showTime() {
  let dateTime= new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time)
  // Set setTimeout function
  let display = setInterval(showTime, 3000);
  
  function timeout() {
    console.log('Timeout');
  }
  
  let id = setTimeout(timeout, 5000);
  console.log('First line');
}
// Set Interval function
function greet() {
  console.log('Print after every 3 seconds\n Hi');
}
setInterval(greet, 3000);


function greet(first, last) {
  console.log('Hello' + ' ' + first + ' ' + last);
}

setTimeout(greet, 1000, "Hi", 'This is timeout ');
