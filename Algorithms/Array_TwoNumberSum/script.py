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

## second method saving already occured numbers in dictionary
## method saving
def Array_TwoNumberSum_Save(array, expSum):
  occured = {}
  for i in array:
    missingNum = expSum - i
    if missingNum in occured:
      return [missingNum, i]
    else:
      occured[i] = True
  return []

##third method including sorting the array in the first place
## method sorting
def Array_TwoNumberSum_Sort(array, expSum):
  array.sort()
  i = 0
  k = len(array) -1
  while i < k:
    arrsumm = array[i] + array[k]
    if arrsumm == expSum:
      return [array[i], array[k]]
    elif arrsumm < expSum:
        i+=1
    elif arrsumm > expSum:
      k-=1
  return []




## test with the sample input from description
## two for method
print(Array_TwoNumberSum([4, 1, -5, 7, 12, 23, -3, 13], 10))
print(Array_TwoNumberSum([4, 1, -5, 7, 12, 23, -3, 14], 10))

## test second variation with the sample input from description
## saving method
print(Array_TwoNumberSum_Save([4, 1, -5, 7, 12, 23, -3, 13], 10))
print(Array_TwoNumberSum_Save([4, 1, -5, 7, 12, 23, -3, 14], 10))

## test third variation with the sample input from description
## sort method
print(Array_TwoNumberSum_Sort([4, 1, -5, 7, 12, 23, -3, 13], 10))
print(Array_TwoNumberSum_Sort([4, 1, -5, 7, 12, 23, -3, 14], 10))