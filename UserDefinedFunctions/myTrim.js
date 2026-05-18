let str="     hello world     ";
function myTrim(str){
    let result=[]
    let output=''
    let word=""
    for(i=0;i<str.length;i++){
        if(str[i]!==" "){
            word+=str[i]

        }
        else{
            if(word!==""){
                
            
            result.push(word)
            word=""
       
             }
             }
    }
    for(let i=0;i<result.length;i++){
        // console.log(result[i])
        // output+=result[i]+" "
        
    }

    
    return output
    
    
    

}
console.log(myTrim(str))

