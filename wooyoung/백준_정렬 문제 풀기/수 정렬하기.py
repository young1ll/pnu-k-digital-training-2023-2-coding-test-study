n = int(input())

li = []
for i in range(n):
    li.append(int(input()))

li.sort()  # 오름차순 정렬

for i in li:
    print(i)