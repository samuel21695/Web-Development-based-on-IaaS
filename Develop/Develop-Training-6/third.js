// 아래의 fs는 file system의 약자로, Node.js의 내장 함수이다.
// javascript 내장함수가 아닌 것에 주의
const fs = require('fs');

const studentList = [
  "김우진", "김현", "방승희", "변호녕", "소사무엘", "송영준", "신동현", "오승민", "유승민", "윤준현", "이민구", "이유안", "이은정", "정영식", "최성민", "최은철", "홍문기"];// Node.js file system에서 지원하는 함수로,
// 파일을 쓰기(write)하는 함수이다.
// * fs.writeFile("./test/파일명.txt", "내용", function(){});

// 1. 배열(학생이름)만큼 학생이름.html 파일이 생성되도록 코드를 작성하세요.


// 2. html 파일 내에는 <h1>태그가 새겨져 있어 학생이름이 파일 내에 작성되어 있게끔 기능을 활용하세요.

// 3. 위 두개의 기능이 완료되면 함수로 팩토링하여 언제든지 활용할 수 있게끔 코드를 다듬으세요.
// 힌트 let text = 앞 + 내용 + 뒤;

function makeFile (array, tag) {
  for (i=0; i < array.length; i++) {
    let dir = `./test/${array[i]}.html`;
    let cont = `<${tag}>${array[i]}</${tag}>`;
    fs.writeFile(dir, cont, function(){});
  }
}