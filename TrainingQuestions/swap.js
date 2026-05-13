// 9. Swap Keys and Values
// {a:1, b:2} → {1:"a", 2:"b"}


let object={
    a:1,
    b:2
}
const result={}
for(let key in object){
    result[object[key]]=key

}
console.log(result)


// output=// {a:1, b:2} → {1:"a", 2:"b"}