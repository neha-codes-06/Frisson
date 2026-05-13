let num=[22,73,71,55,45,33]
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