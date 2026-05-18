let str="neha sundriyal"
function myUppercase(str){
    let result=""
    for(let i=0;i<str.length;i++){
        if(str[i]==" "){
            result+=str[i]
            continue
        }
        let char=str[i]
        let code=char.charCodeAt(0)

       
        code=code-32
        // console.log(code)
        let upper=String.fromCharCode(code)
        result+=upper
        
}
    return result

}
console.log(myUppercase(str))


