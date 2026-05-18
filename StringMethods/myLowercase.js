let str="NEHA SUNDRIYAL";
function myLowercase(str){
    let result=""
    for(let i=0;i<str.length;i++){
        
        let char=str[i]
        let code=char.charCodeAt(0)
        // console.log(code)
        code=code+32
        let lower=String.fromCharCode(code)
        result+=lower
        

}
return result

}
console.log(myLowercase(str))