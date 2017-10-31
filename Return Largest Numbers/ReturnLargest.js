
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
