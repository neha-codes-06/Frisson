function anagram(a,b){
    objectA={},updatedA="",updatedB="";
    for(let i=0;i<a.length;i++){
        if(a[i]===" "){
            continue
        }

        updatedA+=a[i]
        if(objectA[a[i]]){
            objectA[a[i]]++
        }
        else{
            objectA[a[i]]=1
        }
    }
    for(let i=0;i<b.length;i++){
        if(b[i]===" "){continue}
        updatedB+=b[i];
        if(objectA[b[i]]){
        objectA[b[i]]--
    }else{
        return false
    }
    }
    return updatedA.length===updatedB.length
}
console.log(anagram("ne ha","a h en"))
