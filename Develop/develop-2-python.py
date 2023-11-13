def developPractics(array, name, start_text, end_text):
    for item in array:
        if item == name:
            print(f"{start_text}{item}{end_text}")
        else:
            print(item)
    
developPractics(studentList, "홍문기", "나는", "이다!")