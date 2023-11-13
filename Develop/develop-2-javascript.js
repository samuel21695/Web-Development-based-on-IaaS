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

// 쓰고싶을 때만 쓰는 함수
// delveoplPractics 뒤에 순서를 지켜서 해야한다.
function developPractics(array, name, startText, endText) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === name) {
      console.log(startText + array[i] + endText);
    } else {
      console.log(array[i]);
    }
  }
}

developPractics(studentList, "홍문기", "나는", "이다!");