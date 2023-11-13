// 1번 함수
// 어떠한 숫자 값을 판단한다.
function calFunc(first, second) {
  // 위 매개변수 두개는 데이터 타입이 숫자여야만 한다.
  // 둘 중 큰 값을 결정하여 리턴한다.
  let value;
  // 실행구문
  return value;
}

// 2번 함수
// 태그를 제작하는 과정에서 위 1번함수의 결정된 값을 활용한다.
function makeElement(tagName, sizeValue) {
  // tagName 매개변수는 반드시 문자열이어야 한다.
  // sizeValue 매개변수는 반드시 숫자여야 한다.
  // 태그요소를 생성하고, style값 중,
  // width 값과 height 값을 매개변수 sizeValue + px형태로 활용한다.
  let makeElement;
  // 실행구문
  return makeElement;
}
// 3번 함수
// 제작된 태그를 부모태그에 해당하는 객체에 아래의 실행함수로 작동시킨다.
function appendParent(parentElement, makeItemElement) {
  // 위 매개변수 두개는 데이터타입이 객체여야만 한다.
  parentElement.appendChild(makeItemElement);
}
