/**
 * CSS의 @media, mediaquery에 대한 간략 내부구조를 프로그래밍 언어로
 * 작성한 예싱입니다.
 */
const wantMaxWidth = 600;
/**
 * 아래의 함수의 정확한 논리와 의미는 추후에 확인하기로 하고
 * 소괄호에 마치 "@media (max-widh:600px)" 처럼 작성되어있는 것에 주목하자.
 */
const mediaQuery = '(max-width: ${mediaQuery}px';

// 아래의 함수는 최소기능만 작동하게끔 직접 만든 함수이므로 개발자의 함수(사용자 정의 함수)입니다.
// 함수를 '선언' 했을 뿐 호출될 때까지 전혀 실행되지 않는다는 점이 주요 관점입니다.
function handleMediachange(event) {
  if (event.matches) {
    console.log('문서 가로폭이 ${wantMaxWidth}px보다 작습니다.');
  } else {
    console.log('문서 가로폭이 ${wantMaxWidth}px보다 큽니다.');
  }
}
// 어떤 값인진 모르지만, 매개변수로 사용된 무언가가 존재한다는 것을 추론할 수 있습니다.
handleMediachange(mediaQuery);