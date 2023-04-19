'''
n = int(input())
conf = []
for i in range(n):
    start, end = map(int, input().split())
    conf.append((start, end))

# 종료 시간을 기준
conf = sorted(conf, key=lambda x: x[1])

# 회의실 사용 가능한 회의 수 계산
cnt = 1
end_time = conf[0][1]
for i in range(1, n):
    if conf[i][0] >= end_time:
        cnt += 1
        end_time = conf[i][1]

print(cnt)
'''


'''
n = int(input())
conf = []

for i in range(n):
    start, end = map(int, input().split())
    conf.append((start, end))

# 종료 시간을 기준 정렬
for i in range(n-1):
    for j in range(i+1, n):
        if conf[i][1] > conf[j][1]:
            conf[i], conf[j] = conf[j], conf[i]

# 회의실 사용 가능한 회의 수 계산
cnt = 1
end_time = conf[0][1]
for i in range(1, n):
    if conf[i][0] >= end_time:
        cnt += 1
        end_time = conf[i][1]

print(cnt)
'''
#시간초과


n = int(input())
arr = []

for _ in range(n):
    arr.append(list(map(int,input().split())))
arr=sorted(arr,key=lambda a:a[0])
arr=sorted(arr,key=lambda a:a[1])
last=0
cnt=0
for i,j in arr:
    if i >= last:
        cnt +=1
        last =j
print(cnt)