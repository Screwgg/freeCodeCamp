function diffArray(arr1, arr2) {
    //my
    let newarr = []

    function infirst(arr1, arr2) {
      arr1.forEach(item1 => {
        if(arr2.indexOf(item1) === -1) {
          newarr.push(item1)
        }
      })
    }

    infirst(arr1, arr2)
    infirst(arr2, arr1)

    return newarr

    //better　
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))
}
