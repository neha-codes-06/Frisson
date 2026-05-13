function firstNon(str){
    let frequency={};
    for(let i=0;i<str.length;i++){
        if(frequency[str[i]]){
            frequency[str[i]]++
            
        }
        else{
            frequency[str[i]]=1
            
        }
        console.log(frequency)
    }
    for(let i=0;i<str.length;i++){
        if(frequency[str[i]]===1){
            return str[i]
            
        }
    }
    
    
    
}
console.log(firstNon("nehasundriyal"))