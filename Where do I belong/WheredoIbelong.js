/**
 * Created by liuyiqi on 2017/11/7.
 */
function getIndexToIns(arr, num) {
    //my
    arr.push(num);
    arr.sort((a,b)=>a-b);
    return arr.indexOf(num);

    //another
    var pos=arr.sort((a,b)=>a-b).findIndex(item=>num<=item);//findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引
    return pos==-1?arr.length:pos;
}

console.log(getIndexToIns([3, 10, 5],34));
