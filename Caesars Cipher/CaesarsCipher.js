function rot13(str) {
    //my
    return str.split("").map(function(item){
        if(item>='A'&&item<='M'){
            return String.fromCharCode(item.charCodeAt()+13);
        }
        else if(item>='N'&&item<='Z'){
            return String.fromCharCode(item.charCodeAt()-13);
        }
        else{
            return item;
        }
    }).join("");

    //better
    return str.replace(/[A-Z]/g,function(item){
        console.log(item.charCodeAt());
        return String.fromCharCode((item.charCodeAt()-65+13)%26+65);
    });
}

console.log(rot13("SERR PBQR PNZC"));
