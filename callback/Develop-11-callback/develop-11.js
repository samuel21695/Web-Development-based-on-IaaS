// 정적인 함수 선언 방식(정해놓는 방식)
function three(number) {
  if(typeof(number) === "number") {
    return `${number / 10}`;
  }
}
const threeResult = three(100);
// 정적으로 타입 검사 후, 동적으로 로직 작성
// 호출할 때 로직을 작성하기 떄문에 장단점이 공존한다.
function four(number, callback) {
  if(typeof(number) === "number") {
    return callback(number);
  }
}

const fourResult = four(1, function(number) {
  return `${number / 10}`;
})
console.log(fourResult);