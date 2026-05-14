/*
This question is to check whether the given string is palindrome or not.
Palindrome checks the given string is same as reverse of the string or not.
*/

let str="racecar";
function isPalindrome(str){
    let left=0
    let right=str.length-1
    
    while(left<right){
        if(str[left]===str[right]){
            left++
            right--
        }
        else{
            return false


        }

    }
    return true
   

}
console.log(isPalindrome(str))