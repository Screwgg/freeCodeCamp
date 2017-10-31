function palindrome(str) {
  var rep=/[^A-Za-z0-9]/g;
  var newstr=str.toLowerCase().replace(rep,'');
  var revstr=newstr.split("").reverse().join("");
  return newstr==revstr;
}