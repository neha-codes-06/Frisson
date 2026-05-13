
let arr=[9,3,8,1,4,7,6]
function mySort(arr){
    
       for(let j=0;j<arr.length;j++){
        for(i=0;i<arr.length-j-1;i++){
            if(arr[i]>arr[i+1]){
                let tempValue=arr[i];
                arr[i]=arr[i+1]  
                arr[i+1]=tempValue
                
        }    

        }
    }
    return arr

}
console.log(mySort(arr))















































