def arithmetic_arranger(numbers, showSum=False) :
    # If there are too many problems supplied to the function. The limit is five, anything more will return: Error: Too many problems.
    if len(numbers) > 5 :
        return 'Error: Too many problems.'

    first = ''
    second = ''
    third = ''
    fourth = ''

    for i in numbers :
        o = i.split()[1]

        # The appropriate operators the function will accept are addition and subtraction. Multiplication and division will return an error. Other operators not mentioned in this bullet point will not need to be tested. The error returned will be: Error: Operator must be '+' or '-'.
        if o != '+' and o != '-' :
            return "Error: Operator must be '+' or '-'."
        
        a = i.split()[0]
        b = i.split()[2]

        # Each operand (aka number on each side of the operator) has a max of four digits in width. Otherwise, the error string returned will be: Error: Numbers cannot be more than four digits.
        if len(a) > 4 or len(b) > 4 :
            return 'Error: Numbers cannot be more than four digits.'

        length = len(a)
        
        if len(i.split()[2]) > length :
            length = len(i.split()[2])

        length = length + 2

        # Each number (operand) should only contain digits. Otherwise, the function will return: Error: Numbers must only contain digits.
        try :
            a = int(i.split()[0])
            b = int(i.split()[2])
        except ValueError :
            return "Error: Numbers must only contain digits."

        if o == '+' :
            c = a + b
        elif o == '-' :
            c = a - b

        first = first + f'{a:>{length}}    '
        second = second + f'{o} {b:>{length - 2}}    '
        third = third + '-' * length + '    '
        fourth = fourth + f'{c:>{length}}    '

    first = first.rstrip()
    second = second.rstrip()
    third = third.rstrip()
    fourth = fourth.rstrip()

    if showSum :
        return f'{first}\n{second}\n{third}\n{fourth}'
    else :
        return f'{first}\n{second}\n{third}'

# arithmetic_arranger(['3801 - 2', '123 + 49'])
# arithmetic_arranger(['1 + 2', '1 - 9380'])
# arithmetic_arranger(['3 + 855', '3801 - 2', '45 + 43', '123 + 49'])
# arithmetic_arranger(['11 + 4', '3801 - 2999', '1 + 2', '123 + 49', '1 - 9380'])
# arithmetic_arranger(['44 + 815', '909 - 2', '45 + 43', '123 + 49', '888 + 40', '653 + 87'])
# arithmetic_arranger(['3 / 855', '3801 - 2', '45 + 43', '123 + 49'])
# arithmetic_arranger(['24 + 85215', '3801 - 2', '45 + 43', '123 + 49'])
# arithmetic_arranger(['98 + 3g5', '3801 - 2', '45 + 43', '123 + 49'])
# arithmetic_arranger(['3 + 855', '988 + 40'], True)
# arithmetic_arranger(['32 - 698', '1 - 3801', '45 + 43', '123 + 49', '988 + 40'], True)