let text="5";
let endValue=4
let addvalue="0"
function padStart(text,endValue,addvalue){
    let result=""
    if(text.length>=endValue){
        return text
    }
    else{
        let count=endValue-text.length
        for(let i=0;i<count;i++){
            result+=addvalue
            
        }
        result+=text
    }
    
    return result



    
}
console.log(padStart(text,endValue,addvalue))