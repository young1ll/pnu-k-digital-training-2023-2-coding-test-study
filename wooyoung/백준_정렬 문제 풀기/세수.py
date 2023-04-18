#첫째 줄에 세 정수 A, B, C가 공백으로 구분되어 주어진다. (1 ≤ A, B, C ≤ 100)

a, b, c = map(int, input().split())

array = [a, b, c]

array_reverse = sorted(array, reverse=True)

print(array_reverse[1])