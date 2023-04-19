n = int(input())
k = []
for _ in range(n):
    k.append(list(map(int, input().split())))
k = sorted(k, key=lambda x: [x[1], x[0]])
for x in range(len(k)):
    print(k[x][0], k[x][1])