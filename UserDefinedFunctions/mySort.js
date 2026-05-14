/*custom sort without using built-in method
 This method corrects the positioning of array from ascending
  to descending and descending to ascending.
*/

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



//output=[1, 3, 4, 6, 7, 8, 9]
