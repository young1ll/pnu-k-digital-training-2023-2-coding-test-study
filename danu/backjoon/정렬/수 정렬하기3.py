import sys

n = int(sys.stdin.readline())

a = [0]*10001

for _ in range(n):
    num = int(sys.stdin.readline())
    a[num] += 1

for i in range(10001):
    if a[i] != 0:
        for j in range(a[i]):
            print(i)

'''
n = int(input())

a = [0]*10001

for _ in range(n):
    num = int(input())
    a[num] += 1

for i in range(10001):
    if a[i] != 0:
        for j in range(a[i]):
            print(i)
시간초과
'''