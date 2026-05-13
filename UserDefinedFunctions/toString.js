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
