/*
custom toString function
this function return a string representation of the array elements separated by commas.
*/
let fruits = ["Banana", "Orange", "Apple", "Mango"];
function toString(fruits){
    let output="";
    for(let i=0;i<fruits.length;i++){
        output+=fruits[i]
        if(i<fruits.length-1){
            output+=","

        }
        
    }
    return output

    


}
console.log(toString(fruits))
//output="Banana,Orange,Apple,Mango"