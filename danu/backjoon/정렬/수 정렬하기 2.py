import sys

n = int(sys.stdin.readline())
a = []

for _ in range(n):
    a.append(int(sys.stdin.readline()))

for i in sorted(a):
   print(i)