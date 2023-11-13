//  외부 함수 (outer Function)
function container() {
  // 내부 함수 (inner Function)
  // 총 3개를 제작했다.
  function itemOne() {
    return "<h1>";
  }
  function itemTwo() {
    return "hello";
  }
  function itemThree() {
    return "</h1>";
  }
  // 함수 세개를 + 기호로 결합한 값을 반환했다.
  return itemOne() + itemTwo() + itemThree();
}
// 아래의 console.log()는 무엇이 출력될까?
console.log(container());