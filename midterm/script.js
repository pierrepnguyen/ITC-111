function changeContent(id){
  if(id == "elon"){
    document.getElementById('elon').style.display = "block"
    document.getElementById('jeff').style.display = "none"
  } else if(id == "jeff"){
    document.getElementById('elon').style.display = "none"
    document.getElementById('jeff').style.display = "block"
  }
}