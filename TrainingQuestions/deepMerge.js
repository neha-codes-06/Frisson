// 7. Deep Merge Objects (Important)
// deepMerge(
//   {a:1, b:{c:2}},
//   {b:{d:3}}
// )

function deepMerge(obj1,obj2){
    
    for(let key in obj2){
        console.log(key)
        if(key in obj1 ){
            // console.log(obj2[key])
            obj1[key]={...obj1[key],...obj2[key]}
            
        }
    }
    return obj1    
}
console.log(deepMerge(
  {a:1, b:{c:2}},
  {b:{d:3}}
));


// output={a:1, b:{c:2, d:3}}









