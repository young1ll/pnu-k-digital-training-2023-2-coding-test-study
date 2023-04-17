n = int(input())
array = []
for _ in range(n):
    word = input()
    if array.__contains__(word)==True:
        array.remove(word)
        array.append(word)
    else:
        array.append(word)
array = sorted(array, key=lambda x: (len(x), x))
for i in array:
    print(i)