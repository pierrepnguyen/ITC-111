// Selecting elements
const clear = document.querySelector('.clear'); // selects clear button
const dateElement = document.getElementById('date'); // shows today's date
const list = document.getElementById('list'); // where to-do items live
const input = document.getElementById('input'); // get user input

// Classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// Get items from localStorage
let data = localStorage.getItem('TODO');

// Functionality
if(data){
  LIST = JSON.parse(data);
  id = LIST.length; // set id to last in list
  loadList(LIST); // load list into content
} else{ //if data = null
  LIST = [];
  id = 0;
}

function loadList(arr){
  arr.forEach(function(item){
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

clear.addEventListener('click', function(){
  localStorage.clear();
  location.reload();
});

const options = {weekday:'long', month:'short', day:'numeric'};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-US', options);

function addToDo(toDo, id, done ,trash) {
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  const item = `<li class="item">
                  <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                  <p class="text ${LINE}">${toDo}</p>
                  <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
              </li>`
  const position = "beforeend"
  list.insertAdjacentElement(position, item);
}


document.addEventListener("keyup", function(event){
if(event.keyCode == 13){
  const toDo = input.nodeValue;
  if(toDo){
    addToDo(toDo, id, false, false)
      LIST.push({
        name : toDo,
        id : id,
        done : false,
        trash : false
      });
      localStorage.setItem("TODO",JSON.stringify(LIST));
        id++;
  }
  input.value = "";
}
});

function completeToDo(element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
  LIST[element.id].trash = true;
};

function removeToDo(element){
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
};

list.addEventListener("click", function(event){
  const element = event.target;
  const elementJob = element;

  if(elementJob == "complete"){
    completeToDo(element);
  } elseif (elementJob == "delete"){
    removeToDo(element);
  }
})