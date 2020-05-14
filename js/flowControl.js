// Flow control - make changes based on decision made my user
var fruits = ['strawberry', 'banana', 'grape', 'lemon'];
// Loops
// For loops
for(var i=0;i<fruits.length;i++){
  console.log(fruits[i]);
}

// Conditionals
var num = 10;
function oddEven(int){
  if(num % 2 == 0){
    console.log(num +' is even.');
  } else{ console.log(num + ' is odd.');}
}

oddEven(num);

// Else If
var msg = 'Hello World';
if(msg == null){
  console.log('No message found');
} else if(msg != 'Hello World'){
  console.log('Please just say hello!');
} 
else {
  console.log(msg);
}