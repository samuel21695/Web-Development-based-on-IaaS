let example = {
  first : "나는",
  second : "날개달린",
  third : "호랑이다."
}
console.log(typeof(example)); // 타입 검사: object가 확인된다.
console.log(typeof(typeof(example)))
// 타입검사함수를 타입검사: string으로 처리되었음을 알 수 있다.
function b(object) {
  if(typeof(object) === "object") {
    // 조건식 : 매개변수 object가 타입검사를 통해 나타난 값이
    // 문자열 "object"와 같다면 참
    let keyList = Object.keys(object); // 지역변수 생성
    // 조건식이 참이어야 실해디는 부분이므로 위의 keyList 변수는 
    // 반드시 동작한다는 '보증'을 할 수 있다.
    console.log(keyList);
    // keyList를 간단히 조회하여, 객체의 key가 무엇이 있는지 배열로 확인 할 수 있다.
    return "이 매개변수는 객체입니다.";
    // 참이라면 해당 if()은 여기서 문자열을 반환하고 종료한다.
  } else {
    return "객체가 아닙니다.";
    // 참이 아니라면(false) 위의 문자열을 반환(return)한다.
  }
}
console.log(b(example));