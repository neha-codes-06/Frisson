let roman = {
        "I": 1,
        "V": 5,
        "X":10,
        "XV":15
    };

function romantoInt(s1){
    let sum = 0;
    for(let i = 0; i < s1.length; i++){
        // console.log(roman[s1[i]])

        if(roman[s1[i]] < roman[s1[i+1]]){
        
            sum -= roman[s1[i]];
            // console.log(sum)
            
        } 
        else {
            sum += roman[s1[i]];
            // console.log(sum)
        }
    }
    return sum;
    
}
console.log(romantoInt("III"))