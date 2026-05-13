function groupBy(array,a){
    const output=[]
    const result = {};
    for(let i=0; i<array.length; i++){
        let item = array[i];
        
        const key = item[a];
        
        // console.log(a);
        
        if(!result[key]){
            result[key] = [];
            // console.log(result[key])
            
            
        }
        result[key].push(item);
        
            // console.log(result[key])
        
    }
    return result
   
}

console.log(groupBy(
  [
    { name: "A", age: 20 }, 
    { name: "B", age: 20 }, 
    { name: "C", age: 21 }
  ], 
  "age"
))  
