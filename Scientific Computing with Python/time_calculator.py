def add_time(start, duration, day=0):
    week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    daysLater = 0

    time = {
        'hour': int(start.split(':')[0]), 
        'minute':  int(start.split(':')[1].split()[0]), 
        'period': start.split()[1]
    }

    if time["period"] == "PM" :
        time["hour"] = time["hour"] + 12

    time["minute"] = time["minute"] + int(duration.split(':')[1])

    # add hour if minute is greater than 60
    if time["minute"] > 60 :
        time["minute"] = time["minute"] - 60
        time["hour"] = time["hour"] + 1

    # fill minutes with zero
    time["minute"] = str(time["minute"]).zfill(2)
    
    # add leading zeros
    time["hour"] = time["hour"] + int(duration.split(':')[0])

    # calculate days later
    daysLater = int(time["hour"] // 24)

    # convert 24 hour time to AM/PM
    if time["hour"] % 24 > 12 :
        time["hour"] = time["hour"] - 12
        time["period"] = "PM"
    elif time["hour"] % 24 == 12 :
        time["hour"] = 12
        time["period"] = "PM"
    elif time["hour"] % 24 == 0 :
        time["hour"] = 12
        time["period"] = "AM"
    else :
        time["hour"] = time["hour"] % 24
        time["period"] = "AM"

    # calculate and convert index of day into day of the week in string
    if day :
        day = day.lower().capitalize()
        day = week[(week.index(day) + daysLater) % 7]

    # print(day == False)
    
    # convert days later to string
    if daysLater == 1 :
        daysLater = '(next day)'
    elif daysLater > 1 :
        daysLater = f'({daysLater} days later)'

    # create return value
    new_time = f'{time["hour"]}:{time["minute"]} {time["period"]}'

    # add extra info to new_time
    if day and daysLater :
        new_time = new_time + f', {day} {daysLater}'
    elif day :
        new_time = new_time + f', {day}'
    elif daysLater :
        new_time = new_time + f' {daysLater}'

    return new_time

add_time("3:30 PM", "2:12")
add_time("11:55 AM", "3:12")
add_time("9:15 PM", "5:30")
add_time("11:40 AM", "0:25")
add_time("2:59 AM", "24:00")
add_time("11:59 PM", "24:05")
add_time("8:16 PM", "466:02")
add_time("5:01 AM", "0:00")
add_time("3:30 PM", "2:12", "Monday")
add_time("2:59 AM", "24:00", "saturDay")
add_time("11:59 PM", "24:05", "Wednesday")
add_time("8:16 PM", "466:02", "tuesday")