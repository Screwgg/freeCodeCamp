function chunkArrayInGroups(arr, size) {
  var newarr=[];
  //my
  var l=0;
  while(l<arr.length){
    newarr.push(arr.slice(l,l+size));  
    l+=size;
  }
  
  //better
  while(arr.length){
    newarr.push(arr.splice(0,size));
  }
  return newarr;
}