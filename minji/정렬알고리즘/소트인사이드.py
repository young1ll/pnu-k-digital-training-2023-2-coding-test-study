n = input()
array = []
for i in range(len(n)):
    array.append(n[i])
array.sort(reverse=True)
for i in array:
    print(i, end='')