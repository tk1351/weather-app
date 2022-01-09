import { format } from "date-fns";

const orderedFormatValue = 'eeee d MMM'

export const createOrderedDate = (date: Date): string => {
    return format(new Date(date), orderedFormatValue)
}