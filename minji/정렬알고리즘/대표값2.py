array = []
for _ in range(5):
    array.append(int(input()))
avg = sum(array)//5
mean = sorted(array)
print(avg)
print(mean[2])