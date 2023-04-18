#첫째 줄에 단어의 개수 N이 주어진다

n = int(input())

#둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다.
word = []

#길이가 짧은 것부터
#길이가 같으면 사전 순으로

for i in range(n):
    word.append(input())
set_word = list(set(word))

#print(set_word)
#['but', 'cannot', 'i', 'no', 'yours', 'more', 'wait', 'hesitate', 'it', 'im', 'wont']

sort_word = []
for i in set_word:
   sort_word.append((len(i), i))
#[(4, 'wont'), (4, 'more'), (4, 'wait'), (1, 'i'), (2, 'no'), (6, 'cannot'), (8, 'hesitate'), (2, 'it'), (3, 'but'), (5, 'yours'), (2, 'im')]

result = sorted(sort_word)
# [(1, 'i'), (2, 'im'), (2, 'it'), (2, 'no'), (3, 'but'), (4, 'more'), (4, 'wait'), (4, 'wont'), (5, 'yours'), (6, 'cannot'), (8, 'hesitate')]

for len_word,word in result:
    print(word)