// variable 변수
var a = 1
var b = "1"

console.log(typeof(a))
console.log(typeof(b))
console.log(a == b)

// Number 숫자
var x= 1
var y="2"
Number(y)

console.log(x)
console.log(y)

// 모두 숫자 타입이다. 자바스크립트는 정수 실수 음의 정수 상관 없이 모두 숫자 티입으로 지정한다.
var integar = 10 // 정수
var double = 10.12 // 실수
var negative = -20 // 음의 정수

console.log(typeof(integar))
console.log(typeof(double))
console.log(typeof(negative))
// 문자열 타입
var string;
string = '문자열' // 작은따옴표
string = "문자열" // 큰따옴표
string = `문자열` // 백틱(ES6)

console.log(string)
console.log(typeof(string))

// 불리언 타입
var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false

console.log(typeof(foo))

// 객체
var user = {
  name: "Samuel So",
  age: 24
}

var login = {
  Id: "happy",
  pw: 1234
}


const studentList = [
  "김우진",
  "김현",
  "방승희",
  "변호녕",
  "소사무엘",
];

console.log(typeof(user))
console.log(typeof(login))
console.log(typeof(studentList))
console.log(login.Id)