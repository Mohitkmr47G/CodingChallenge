def double_elements(arr, callback):
    doubled_arr = []
    for num in arr:
        doubled_num = callback(num)
        doubled_arr.append(doubled_num)
    return doubled_arr

# Example callback function that doubles a number
def double_number(num):
    return num * 2

# Example usage
input_array = [1, 2, 3, 4, 5]
doubled_result = double_elements(input_array, double_number)
print(doubled_result)  # Output: [2, 4, 6, 8, 10]
