function sort(arr){
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
      if(arr[j] > arr[i]){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}


var arr = [4,1,5,7,3,0]

sort(arr);