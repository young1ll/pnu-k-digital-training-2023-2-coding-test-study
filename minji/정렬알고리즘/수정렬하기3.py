import sys

n = int(sys.stdin.readline().rstrip())
num_list = [0] * 10000
for i in range(n):
    data = int(sys.stdin.readline().rstrip())
    num_list[data-1] += 1
for i in range(10000):
    if num_list[i] != 0:
        for j in range(num_list[i]):
            print(i+1)