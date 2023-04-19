n = int(input())

li = []
for i in str(n):
    li.append(i)


li.sort(reverse=True)  # 내림차순

#  정렬된 목록을 공백 없이 단일 정수로 인쇄!!!
for i in li:
    print(i, end='')