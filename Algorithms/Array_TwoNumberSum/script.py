## simple, but inefficient way
## two for loops
def Array_TwoNumberSum(array, expSum):
  for i in range(len(array) -1):
    number1 = array[i]
    for k in range(i + 1, len(array)):
      number2 = array[k]
      if number1 + number2 == expSum:
        return [number1, number2]
  return []


## test with the sample input from description
print(Array_TwoNumberSum([4, 1, -5, 7, 12, 23, -3, 13], 10))