// 배열이란?
const arr = ['apple', 'banana', 'orange']
console.log(arr)

// index
arr[0] // -> 'apple'
arr[1] // -> 'banana'
arr[2] // -> 'orange'

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

// length property
arr.length // -> 3
console.log(arr.length)

// 배열의 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 'apple' 'banana' 'orange'
}

// 배열은 객체 타입이다.
typeof arr // -> object
console.log(typeof(arr))

// 배열 리터럴, Array 생성자 함수, Array.of, Array.from 메서드
const arr2 = [1, 2, 3];

arr2.constructor === Array // -> true
Object.getPrototypeOf(arr2) === Array.prototype // -> true

//값의 순서와 length 프로퍼티
const arr3 = [1, 2, 3];

//반복문으로 자료구조를 순서대로 순화하기 위해서는 자료구조의 요소애 순서대로 접근할 수 있어야 하며
// 자료구조의 길이를 알 수 있어야 한다.
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]); // 1 2 3
}