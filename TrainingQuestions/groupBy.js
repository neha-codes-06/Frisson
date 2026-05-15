// 6. Group By Property
// groupBy(
//   [
//     {name:"A", age:20},
//     {name:"B", age:20},
//     {name:"C", age:21}
//   ],
//   "age"
// )

// If key is not present then show me the erorr "Provided key is not present."

function groupBy(array,a){
  
   
    const result = {};
    for(let i=0; i<array.length; i++){
        
      // if(key in array[i]){
        
      //  }
      //  else{

      //   throw new Error("Property not found");
      //  }
      
        let key=array[i][a];

        if(!(key in array[i])){
          console.log("Property not found")
        }
        // console.log(key)  
        // console.log(key);
      

       
        if(!result[key]){
            result[key] = [];
            // console.log(result[key])
          
            
            
        }
      
      
        result[key].push(array[i]);
        
      
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


// output = [
//   {20: [{name:"A", age:20}, {name:"B", age:20}]},
//   {21: [{name:"C", age:21}]}
// ]

