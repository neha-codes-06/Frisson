/*
custom at function
This function return the element at the given index in the array.
*/
let fruits=["apple","mango","kiwi","pineapple","orange"];
let target=4;
function myAt(fruits,target){
    for(let i=0;i<fruits.length;i++){
        if(i===target){
            return fruits[i]

        }
    }

}
console.log(myAt(fruits,target))