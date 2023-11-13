
let wrapping = {
  value: {
    start: 0,
    end: 101
  },
  age: ''
}

/**
 * * start: 시작값입니다.
 * * end: 끝 
 * 
 *  */

function looptest(start, end) {
  
  
  for(let count = start; count < end; count++)
  console.log("나는 " + (count+1999) +"년도에 "+ count + "살 입니다.")
}

looptest(wrapping.value.start, wrapping.value.end)
