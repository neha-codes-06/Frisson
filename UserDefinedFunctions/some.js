/*custom some without using built-in method
 This method check if some conditions are true.
 if some conditions are true then it return true
*/

let num=[12,33,19,7,8];

function mySome(num){
    for(let i=0;i<num.length;i++){
        if(num[i]>18){
            return true


        }
    }
    return false


}

console.log(mySome(num))
//output=true