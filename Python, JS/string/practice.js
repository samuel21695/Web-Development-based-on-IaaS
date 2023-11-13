let sosa = "소사무엘";


// let familyName = sosa[0];
// console.log(familyName);
// let personalName
// console.log(personalName);

// 문자열을 배열로
let nameArray = []
for(let i = 0; i < sosa.length; i++) {
  // console.log(sosa[i]);
  nameArray[i] = sosa[i];
  nameArray[0] = "공"
}
console.log(nameArray);

// //배열을 문자열로
let nameString = ""

for(let j = 0; j < nameArray.length; j++) {
  nameString = nameString + nameArray[j];
}
console.log(nameString)