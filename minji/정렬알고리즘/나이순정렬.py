n = int(input())
n_list = []
for i in range(n):
    input_data = input().split()
    data = [int(input_data[0]), input_data[1]]
    n_list.append(data)
n_list = sorted(n_list, key=lambda name: name[0])
for name in n_list:
    print(name[0], name[1])
