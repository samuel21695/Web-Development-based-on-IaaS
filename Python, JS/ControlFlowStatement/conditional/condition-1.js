let a = 1;
let b = "1";


if(a === b) {
  console.log('참이다');
} else {
    console.log('거짓이다');
    if(typeof(a) === "number") {  
      console.log('숫자열 입니다');
    }
      if(typeof(b) !== "number") {
        console.log( '숫자열이 아닙니다.');
      }
        if(typeof(a) === typeof(b)) {
          console.log( '두 데이터 타입은 같습니다.');
        } else {
          console.log( '두 데이터 타입은 같지 않습니다.');
        }
        
}
