// let text="neha"
// let output=text.split("")
// console.log(output)


let text="neha";
function mySplit(text){
    let result=[]
    for(let i=0;i<text.length;i++){
        result.push(text[i])
    }
    return result

}
console.log(mySplit(text))