
// 2. Group Anagrams
// ["eat","tea","tan","ate","nat","bat"]


function groupAnagrams(arr){
    let result={}
    for(let i=0;i<arr.length;i++){
        let sorted=arr[i].split("").sort().join("")
        if(!result[sorted]){
            result[sorted]=[]
            console.log(result[sorted])
        }
        result[sorted].push(arr[i])
    }
    return Object.values(result)
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

// Output:
// [
//  ["eat","tea","ate"],
//  ["tan","nat"],
//  ["bat"]
// ]