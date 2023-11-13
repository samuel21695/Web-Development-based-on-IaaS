// ? StudentList === 학생들 이름 목록
// ? lentth === 길이값, 총원
const studentList = [
  "김우진",
  "김현",
  "방승희",
  "변호녕",
  "소사무엘",
  "송영준",
  "신동현",
  "오승민",
  "유승민",
  "윤준현",
  "이민구",
  "이유안",
  "이은정",
  "정영식",
  "최성민",
  "최은철",
  "홍문기"
];


for (let i = 0; i< studentList.length; i++) {

  if(studentList[i] === "소사무엘") {

    console.log("<h1>" + studentList[i] + "<h1>");

  } else {

    console.log("<p>" + studentList[i] + "<p>");

  }

}


// * for는 반복문을 의미한다.\

// 파일을 비동기적으로 생성

const fs = require('fs');

fs.writeFile('student.txt', '소사무엘, 김우진', (err) => {
  if (err) console.log('Error', err);
  else console.log('File created');
});

// 파일을 동기적으로 생성
const fs = require('fs');

fs.writeFileSync('test2.txt', 'test2.txt 파일 속에 들어갈 내용');