function destroyer(arr) {
  var args=Array.prototype.slice.call(arguments).slice(1);

  //my
  return arr.filter(function(item){
    for(var i in args){
      if(item==args[i]){
        return false;
      }
    }
    return item;
  });
  
  //better
  return arr.filter(function(item){
    return !args.includes(item);
  });
  

  //在javascript里有一种array-like的对象，就是和Array很像，比如拥有push，slice等方法，拥有length属性，如var foo = {0:'hello',1:'world',length:2,slice:Array.prototype.slice}
  //argument不是真正的数组对象，而Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组，或Array.from(arguments)


  /*用bind()可以使这个过程变得简单，在下面这段代码里面，slice 是 Function.prototype 的 apply() 方法的绑定函数，并且将 Array.prototype 的 slice() 方法作为 this 的值。
  var unboundSlice = Array.prototype.slice;
  var slice = Function.prototype.apply.bind(unboundSlice);

  slice(arguments);
  */
}