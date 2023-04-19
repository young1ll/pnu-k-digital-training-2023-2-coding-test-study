import sys

n = int(sys.stdin.readline().strip())
num = list(map(int,sys.stdin.readline().split()))
arr = sorted(set(num))

dct = {arr[i]:i for i in range(len(arr))}

for i in num:
    print(dct[i], end = ' ')
