const getWeekdayName = (date: string) : string => {
    return new Date(date).toLocaleString('en-us', {weekday: 'long'})
}

export const reformatDate = (date: string) : string =>  {
    const dateArray = date.split("")

    for(let item of dateArray) if (item === "-") item = "/"

    return dateArray.join('')
}

export default getWeekdayName