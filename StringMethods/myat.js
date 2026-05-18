let text="neha";
let indexValue=3
function myAt(text,index){
    let output;
    for(let i=0;i<text.length;i++){
        if(i===indexValue){
            output=text[i]

        }
    }
    return output

}
console.log(myAt(text,indexValue))