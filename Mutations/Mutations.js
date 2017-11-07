function mutation(arr) {
  //my
  var newarr=arr[1].toLowerCase().split("");
  for(var i in newarr){
    if(arr[0].toLowerCase().indexOf(newarr[i])==-1){
      return false;
    }
  }
  return true;
  
  //better
  //every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false 的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。
  return arr[1].toLowerCase().split("").every(function(item){
    return arr[0].toLowerCase().indexOf(item)!=-1;
  });
}