//객체 선언
var sosa = {
  name: "소사 무엘",
  age: 48,
  hometown: "대전",
  like : "향마루",
  hate : "소",
  talmo: false,
  glasses: "라식",
}

// 키 프로퍼티
console.log(sosa.age);
//프로퍼티 값 바꾸기
sosa.talmo = true;
console.log(sosa.talmo)
//새로운 키 프로퍼티 추가하기
sosa.couple = true;
console.log(sosa)
//표로 표시
console.table(sosa)