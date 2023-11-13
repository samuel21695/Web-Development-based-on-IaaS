// // 반복문을 사용하지 않고 10번 출력하는 경우'
// console.log('소사무엘')
// console.log('소사무엘')
// console.log('소사무엘')
// console.log('소사무엘')
// console.log('소사무엘')
// console.log('소사무엘')
// console.log('소사무엘')
// console.log('소사무엘')
// console.log('소사무엘')
// console.log('소사무엘')

// ----------------------------------------
// 변수 하나 설정 후 참이면 실행해줘... 참이면 실행해줘..를 값이 false가 돨 떄 까지 만복
// let startValue = 1;
// let endValue = 10;
// let nameList = ["공미남", "공추남", "공평범남"]
// let conditionTypeOne = 1;
// let conditionTypeTwo = 10;

// for(let count = startValue; count <= endValue; count++) 
// if (count === conditionTypeOne) {
//   console.log(nameList[0])
//     } else {
//       if(count === conditionTypeTwo) {
//         console.log(nameList[1])
//       } else {
//         console.log(nameList[2])
//       }   
//     }   

// 변수를 객체로 만들기

let wrapping = {
  value: {
    start: 1,
    end: 10
  },
  nameList: ["공미남", "공추남", "공공칠빵"],
  conditionType : {
    one : 4,
    two : 6
  }
}

/**
 * * start : 시작값입니다.
 * * end: 끝값입니다.
 * * typeOne: 조건식 중 하나입니다.
 * * typeTwo: 조건식 중 다른 하나입니다.
 * * namelist : [배열로 되어있습니다.]
 * 
 * * 반복문이고, 시작 끝 값 잘 설정해주시고 조건식 두개있구요
 * * 이름은 세개 필요합니다.
 *  */


// 함수를 하나 만들어서 wrapping 시에 호출 전에는 실행이 되자 않는다.
function looptest(start, end, typeOne, typeTwo, namelistOne, namelistTwo, namelistThree) {
  // looptest(start ~)매개변수 생성
  
  for(let count = start; count <= end; count++) 
  if (count === typeOne) {
    console.log(namelistOne)
  } else {
    if(count === typeTwo) {
      console.log(namelistTwo)
    } else {
      console.log(namelistThree)
    }   
  }   


  // for(let count = wrapping.value.start; count <= wrapping.value.end; count++) 
  //     if (count === wrapping.conditionType.one) {
  //       console.log(wrapping.nameList[0])
  //     } else {
  //       if(count === wrapping.conditionType.two) {
  //         console.log(wrapping.nameList[1])
  //       } else {
  //         console.log(wrapping.nameList[2])
  //       }   
  //     }   

}

looptest();
// 함수 호출
looptest(wrapping.value.start, wrapping.value.end, wrapping.conditionType.one, wrapping.conditionType.two, wrapping.nameList[0], wrapping.nameList[1], wrapping.nameList[2]);


// for(let i = 0; i < 10; i++)
// if (i%2 == 0) {
//   console.log("공미남")
// } else {
//   console.log("공추남")
// }