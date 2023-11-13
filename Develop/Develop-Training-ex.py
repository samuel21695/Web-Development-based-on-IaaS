dictionary_example = {
  "academyName": "그린컴퓨터아트학원",
  "location": "둔산점",
  "address": "대전광역시 서구 대덕대로 182 오라클빌딩 3층",
  "telNumber": "042-476-2111",
  "classroomNumber": 305,
  "lectureName": "it's different",
  "studentList": [
      "피카츄",
      "라이츄",
      "파이리",
      "꼬부기"
  ]
}

print(dictionary_example["address"])
print(
  "나는 {}의 {}에 있는 {}강의실에서 {}에서 훈련중인 {}입니다."
    .format(
      dictionary_example["address"],
      dictionary_example["academyName"],
      dictionary_example["classroomNumber"],
      dictionary_example["lectureName"],
      dictionary_example["studentList"][0],
    ))