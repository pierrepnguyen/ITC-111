function changeLinkText(link) {
  if(link == "home"){
    document.getElementById('default').style.display = "block";
    document.getElementById('ceLinks').style.display = "none";
    document.getElementById('aLinks').style.display = "none";
    document.getElementById('rcsLinks').style.display = "none";
    document.getElementById('ls_Head').innerHTML = "Links";
    document.getElementById('rs_Head').innerHTML = "Intro to Programming w/HTML, CSS, & JavaScript";
  } else if(link == "ce"){
    document.getElementById('default').style.display = "none";
    document.getElementById('ceLinks').style.display = "block";
    document.getElementById('aLinks').style.display = "none";
    document.getElementById('rcsLinks').style.display = "none";
    document.getElementById('ls_Head').innerHTML = "Class Exercise";
    document.getElementById('rs_Head').innerHTML = "Exercise Description";
  }else if(link == "asgn"){
    document.getElementById('default').style.display = "none";
    document.getElementById('ceLinks').style.display = "none";
    document.getElementById('aLinks').style.display = "block";
    document.getElementById('rcsLinks').style.display = "none";
    document.getElementById('ls_Head').innerHTML = "Assignments";
    document.getElementById('rs_Head').innerHTML = "Assignment Description";
  }else if(link == "rcs"){
    document.getElementById('default').style.display = "none";
    document.getElementById('ceLinks').style.display = "none";
    document.getElementById('aLinks').style.display = "none";
    document.getElementById('rcsLinks').style.display = "block";
    document.getElementById('ls_Head').innerHTML = "Recourses";
    document.getElementById('rs_Head').innerHTML = "Recourses Description";
  } else { 
    document.getElementById('default').style.display = "block";
    document.getElementById('ceLinks').style.display = "none";
    document.getElementById('aLinks').style.display = "none";
  }
}

function changeDivRightText(txt) {
  // the 'if' condition sets the text to display if Link 1a is clicked
  if (txt == 'A01') {
    document.getElementById('html').src = 'classEx01.html';
    // the 'else if' condition sets the text to display if Link 1b is clicked
  } else if (txt == 'A02') {
    document.getElementById('html').innerHTML = 'Content from Link 1b';
    // the 'else' is the text to display by default
  } else {
    document.getElementById('html').innerHTML = 'Content loaded when default link is clicked';
  }
}
