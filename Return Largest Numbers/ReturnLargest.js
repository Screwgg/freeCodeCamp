
function largestOfFour(arr) {
    
    //my
    var newarr=[];
    arr.map(function(item){
        var m=0;
        for(var i in item){
            m=Math.max(m,item[i]);
        }
        newarr.push(m);
    });
    return newarr;
    

    //better
    return arr.map(function(item){
        return item.reduce(function(max,current){
            return (current>max)?current:max;
        },0);
    })

    //advanced and confused | https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-return-largest-numbers-in-arrays/16042
    function largestOfFour(arr) {
        return arr.map(Function.apply.bind(Math.max, null));
    }
}

    /*Function.prototype.bind() - MDN
    fun.bind(thisArg[, arg1[, arg2[, ...]]])
       
        thisArg
        当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用new 操作符调用绑定函数时，该参数无效。
        
        arg1, arg2, ...
        当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。
        
        返回值
        返回由指定的this值和初始化参数改造的原函数拷贝

    bind() 函数会创建一个新函数（称为绑定函数），新函数与被调函数（绑定函数的目标函数）具有相同的函数体（在 ECMAScript 5 规范中内置的call属性）。当新函数被调用时 this 值绑定到 bind() 的第一个参数，该参数不能被重写。
    */
