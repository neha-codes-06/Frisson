function factorial(num){
    let answer=1;
    for(let i=2;i<=num;i++ ){
        answer=answer*i
    }
    return answer
}
console.log(factorial(5))