var dict = {
  fName: 'tom',
  lName: 'thompson',
  age: 29,
  isMarried: true,

  displayFullName: function(){ return this.fName +' '+ this.lName; }
}

console.log(dict.displayFullName());