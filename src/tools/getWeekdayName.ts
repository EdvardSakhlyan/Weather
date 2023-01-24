const getWeekdayName = (date: string) : string => {
    const dateArray = new Date(date).toUTCString().split("");
    const empty = [];
    for(let i = 0 ; i < 3 ; i++)  empty[i] = dateArray[i]
    return empty.join('')
}

export const reformatDate = (date: string) : string =>  {
    const dateArray = date.split("")

    for(let item of dateArray) if (item === "-") item = "/"

    return dateArray.join('')
}

export default getWeekdayName