function sum(a,b){ //function statement
    return a+b;
}
console.log(sum(10,20))

const sum1=(a,b) => {
    console.log("Hi");
    return a+b;
}
console.log(sum1(10,20))

const multiply=(a,b) => a*b;
console.log(multiply(10,20))

const sum2=a => a+3  // 함수인자 1개 
console.log(sum2(10));

const func1 = () => console.log("Hi");
func1()
