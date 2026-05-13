function maxProduct(arr){
    
    let newArr=arr.sort((a,b)=>a-b);
    console.log(newArr)
    let product1=newArr[newArr.length-1]*newArr[newArr.length-2]
    let product2=newArr[0]*newArr[1]
    // console.log(product1)
    // console.log(product2)
    if(product1>product2){
        return product1
        
        
    }
    else{
        return product2
    }
}

console.log(maxProduct([22,-36,4,5,-63,29]))