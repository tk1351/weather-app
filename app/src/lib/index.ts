import { format } from "date-fns";

const orderedFormatTodayValue = 'eeee d MMM'
const orderedFormatWeekValue = 'e d MMM'

export const createOrderedDate = (date: Date, ordered: 'today' | 'week') => {
    if (ordered === 'today') {
        return format(new Date(date), orderedFormatTodayValue)
    }
    if (ordered === 'week') {
        return format(new Date(date), orderedFormatWeekValue)
    }
}