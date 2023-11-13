#/// variable 변수
a = 1
b = "1"

print(a)
print(b)
print(a == b)

# Number(numeric) types 숫자 ()
# int (정수 클래스의 객체), float, complex
 
x = 1 #int
y = 2.8 #float
z = 1j #complex

print(type(x))
print(type(y))
print(type(z))

#문자열 타입 text type
s1 = "가나다라"
s2 = '마바사아'
s3 = """자차카"""
s4 = '''타파하'''

print(s1)
print(s2)
print(s3)
print(s4)
print(type(s1))
print(type(s2))
print(type(s3))
print(type(s4))

# 불린 bool
t = True
f = False

print(t)
print(f)
print(type(t))
print(type(f))

# 파이썬에서의 객체 딕셔너리
dic = {
  'name': 'tim',
  # Key: name, value: tim
  'phone': '010-1234-1234',
  'birth': '1212'
}
print(dic)
print(dic['name'])
print(dic['phone'])
print(type(dic))
print(type(dic['name']))

dic['age'] = 20
print(dic)

del dic['birth']
print(dic)

