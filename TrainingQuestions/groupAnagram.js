
// // 2. Group Anagrams
// // ["eat","tea","tan","ate","nat","bat"]


// function groupAnagrams(arr){
//     let result={}
//     for(let i=0;i<arr.length;i++){
//         let sorted=arr[i].split("").sort().join("") // remove .split("").sort().join("")
//         if(!result[sorted]){
//             result[sorted]=[]
//             console.log(result[sorted])
//         }
//         result[sorted].push(arr[i])
//     }
//     return Object.values(result)
// }
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

// Output:
// [
//  ["eat","tea","ate"],
//  ["tan","nat"],
//  ["bat"]
// ]

function groupAnagrams(arr){
    let group={}

    for(let i=0;i<arr.length;i++){
        let word=arr[i]
        object={}
        for(let j=0;j<word.length;j++){
            let char=word[j]
            
           
            if(object[char]){
                object[char]++
            }
            else{
                object[char]=1
                // console.log(object[char])
            }
             

            let key=""
              key=key+char+object[char]
            //   console.log(key)
            if(group[key]){
                // console.log(group[key])
                group[key].push(word)
            }
            else{
                group[key]=[word]
            }


            }     
       
    }
    return Object.values(group)


}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

