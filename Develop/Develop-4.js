var devNumber = 1;
var devString = "1";
var devBoolean = true;
var devArray = [1, 2, 3];
var devObject = { name: "dev", age: 20 };

// 타입검사를 모두 진행한 예제입니다. 
// 이상한점을 찾아보시기 바랍니다.
// 모두 정상작동합니다.
console.log(devNumber, typeof(devNumber));
console.log(devString, typeof(devString));
console.log(devBoolean, typeof(devBoolean));
console.log(devArray, typeof(devArray));
console.log(devObject, typeof(devObject));

var wrapObject = {
  devNumber: 1,
  devString: "1",
  devBoolean: true,
  devArray: [1, 2, 3],
  devObject: { name: "dev", age: 20},
};
// dot notation
console.log(wrapObject.devNumber);
// bracket notation
console.log(wrapObject["devNumber"])