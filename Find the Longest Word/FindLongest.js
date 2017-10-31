function findLongestWord(str) {
    //my
    var newstr=str.split(" ");
    var arr=newstr.map(function(item){
        return item.split("").length;
    });
    arr.sort(function(a,b){
        return b-a;
    });
    return arr[0];

    //better
    return str.split(" ").reduce(function(x,y){
        return Math.max(x,y.length);
    },0);
}
