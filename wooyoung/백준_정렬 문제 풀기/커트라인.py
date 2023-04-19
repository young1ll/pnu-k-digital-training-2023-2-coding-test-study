#첫째 줄에는 응시자의 수 N과 상을 받는 사람의 수 k가 공백을 사이에 두고 주어진다.
N,k = map(int, input().split())

# list(map())을 이용해 공백을 기준으로 입력받는 숫자들을 바로 리스트로 만들어줌
# 둘째 줄에는 각 학생의 점수  x가 공백을 사이에 두고 주어진다
x = list(map(int, input().split()))
x_list = sorted(x,reverse=True)

print(x_list[k-1])