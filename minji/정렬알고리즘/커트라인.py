n = list(map(int, input().split()))
score = list(map(int, input().split()))
score.sort(reverse=True)
print(score[n[1]-1])