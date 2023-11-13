obj = {
  "academyName": "그린컴퓨터아트학원",
  "location": "둔산점",
  "address": "대전광역시 서구 대덕대로 182 오라클빌딩 3층",
  "telNumber": "042-476-2111",
  "classroomNumber": " 305호",
  "lectureName": "it's different",
  "studentList": ["김우진",
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
  ]
}

print(list(obj.keys())[6][4])
target_key = list(obj.keys())[6]

print(obj.get(target_key)[4])
print("나는 " + obj["address"] + "의 " + obj["academyName"] + obj["classroomNumber"] +"에 있는 " + obj["lectureName"] + " 강의에 훈련중인 " + obj.get(target_key)[4] +" 입니다.")

for i in obj["studentList"]:
  if i == "소사무엘":
    print(i)

print(obj["studentList"][4])