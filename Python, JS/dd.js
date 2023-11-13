

var x = 2;
var result;

if (x % 2) { // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변화한다.
	result = '홀수';
} else {
	result = '짝수';
}

console.log(result); // 짝수