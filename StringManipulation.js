def manipulateString(input_string):
    manipulated_string = input_string.upper()

    def logString():
        print("The manipulated string is:", manipulated_string)

    return logString

# Example usage
input_string = "Hello, world!"
log_string_callback = manipulateString(input_string)
log_string_callback()  # Output: The manipulated string is: HELLO, WORLD!
