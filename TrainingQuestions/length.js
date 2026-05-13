Array.prototype.myLength = function(

) {
    let count = 0;
    while (this[count] !== undefined) {
        count++;
    }
    return count;
}

console.log(arr1.myLength("neha"));

