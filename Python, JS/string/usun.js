// 타입이 섞이면 문자열로 나오는 경향이 있음
let a = 1 + "1";
console.log(a);
console.log(typeof(a)); // string

// 
let b = "김현님" + "이" + "방에 들어가셨다.";
console.log(b) 

// 
let c = "1" + true;
console.log(c);
console.log(typeof(c));

// 만약에 세번째면 정
let d = "이은혜";
d[0][2] = "정";
console.log(d);

array = []
for (i = 0; i < d.length; i++) {
  array[i] = d[i]
  array[2] = "정"
}
console.log(array)
  
