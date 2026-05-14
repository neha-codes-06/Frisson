/*custom every without using built-in method
 This method check every  conditions should be true.
 if some conditions are true and some are false so it return false .All conditions should be true
*/

let num=[2,3,6,5,4,3]
function myEvery(num){
    for(let i=0;i<num.length;i++){
        if(num[i]<18){
            return false
            break
            

            
           
           
        }
        
        
    }
    return true


}
console.log(myEvery(num))