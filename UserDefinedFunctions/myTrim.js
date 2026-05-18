let arr=["     hello world     "];
function myTrim(arr){
   
    let result=[]
    let word=""
    for(let i=0;i<arr.length;i++){
        let value=arr[i]
        for(let j=0;j<value.length;j++){
            let char =value[j]
            if(char!==" "){
                word+=char
            }
            else{
                if(word!==""){
                    result.push(word)
                    word=""
                }
            }
            
        }


        
    }
    return result
    

    
    

}
console.log(myTrim(arr))



//output="hello world"