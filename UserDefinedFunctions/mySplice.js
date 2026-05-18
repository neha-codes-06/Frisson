let fruits=["banana","mango","apple","kiwi","guava"]
let index=2;
let count=0;

function mySplice(fruits,index,count){
    let result=[]
    for(let i=0;i<fruits.length;i++){
        if(i===index ){
            
            fruits[index+1]="papaya";

        }

    }
    return fruits

}
console.log(mySplice(fruits,index,count));