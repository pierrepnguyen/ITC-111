var val1, val2;

function loadDisplay(num){
  document.getElementById('display2').value += num.value.toString();
}

function clearDisplay(){
  document.getElementById('display2').value = "";
  document.getElementById('display1').innerHTML = "";
}

function bckspDisplay(){
  document.getElementById('display2').value = document.getElementById('display2').value.slice(0,-1);
}

function setOp(trg){
  val1 = document.getElementById('display2').value + " " + trg.value;
  document.getElementById('display1').innerHTML = val1;
  document.getElementById('display2').value = "";
}

function doMath(){
  val2 = document.getElementById('display2').value;
  var result;
  switch(val1.slice(-1)){
    case '+':
      result = parseInt(val1) + parseInt(val2);
      break;
    case '-':
      result = parseInt(val1) + parseInt(val2);
      break;
    case '*':
      result = parseInt(val1) + parseInt(val2);
      break;
    case '/':
      result = parseInt(val1) + parseInt(val2);
      break;
    case '&radic;':
      result = Math.sqrt(parseInt(val2));
      break;
    case 'p':
      result = Math.pow(parseInt(val1), parseInt(val2));
      break;
  }
  document.getElementById('display1').innerHTML = "";
  document.getElementById('display2').value = result;
  val1 = null;
  val2 = null;
  result = null;
}