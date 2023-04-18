# 첫째 줄에 온라인 저지 회원의 수 N이 주어진다
N = int(input())

# 둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다.

member = []


for _ in range(N):
    age, name = input().split()
    member.append((int(age),name))


# 각 회원의 나이와 이름이 공백으로 구분되어 주어진다.
#age,name = input().split()

# 나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고
# 이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열이다.

#member.append(int(age),name)

# 입력은 가입한 순서로 주어진다.
# 나이순으로 정렬

member.sort(key=lambda x:x[0])
for i in member:
    print(i[0], i[1])