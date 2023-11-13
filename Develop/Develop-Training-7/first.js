function calcFunc(first, second) {
  if (first>second) {
    let value = first;
    return value;
  }
  if (first===second) {
    let value = "값이 같습니다."
    return value;
  }
  if (first<second) {
    let value = second;
    return value;
  }
}

module.exports = calcFunc