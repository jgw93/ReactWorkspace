//Number 타입으로만 이루어진 배열
let arr1=[1,2,3,4,5]
console.log(arr1[2])

//String 타입으로만 이루어진 배열
let arr2=["h","e","l","l","o"]
console.log(arr2[1])

//Number와 String 자료형들로 구성된 배열
let arr3=[1,"h",2,"e"]
console.log(arr3[1])

//다양한 자료형들로 구성된 배열
let arr4=[true,1,undefined,false,"h",2,null,"i"]
console.log(arr4[2])

//값을 String 타입만을 사용한 객체
let obj1={a:"apple",b:"banana",c:"carrot"}
console.log(obj1['a'],obj1.b)

//값을 Number 타입만을 사용한 객체
let obj2={a:1,b:2,c:3,d:4}
console.log(obj2['a'],obj2.b)

//값을 다양한 자료형들을 함께 사용한 객체
let obj3={a:"apple",b:100,c:[1,2,3,4]}
console.log(obj3.a,obj3.c[2])

//값으로 객체를 사용한 객체
let obj4={a:{a1:1,a2:2},b:{b1:3,b2:4},c:{c1:5,c2:6}}
console.log(obj4.b.b1)

//대입연산자(Assignment operators) 
let a=4; 
let b=2; 
console.log(a, b)

console.log("--------------------------")
console.log("산술 연산자(Arithmetic operators)") 
console.log(a+b) 
console.log(a-b)
console.log(a/b) 
console.log(a%b) 
console.log(a**b)

console.log("--------------------------")
console.log("산술연산+대입연산자") 
a+=b; // a=a+b 
console.log(a) 
a-=b; 
console.log(a) 
a*=b; 
console.log(a) 
a/=b; 
console.log(a)

console.log("--------------------------")

// 증감 연산자(++, --) 
a=1; 
b=a++; //postfix 
console.log(a, b)
let c=1;
let d=++c; //prefix 
console.log(c, d)

// 비교연산자(Comparison operators) 
a=1; 
b=2; 
console.log(a>b) 
console.log(a<b) 
console.log(a>=b) 
console.log(a<=b) 
console.log(a==b) 
console.log(a!=b) 
console.log(a===b) //데이터 타입까지 비교 
console.log(a!==b)

// 논리연산자 
a=true; 
b=false; 
console.log(a && b) 
console.log(a || b)

// 삼항연산자 
a=10; 
b=20 
console.log(a > b? a:b) 