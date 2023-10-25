export default (timestamp: number, fullDate: boolean = false): string => {
    const now = new Date()
    const date = new Date(timestamp * 1000)

    if (fullDate) {
        const options: Intl.DateTimeFormatOptions = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour12: true,
        }

        // return date.toLocaleString('en-US', options)
        return date.toLocaleString('en-US', options)
    }

    const diff = now.getTime() - date.getTime()

    const oneMinute = 60 * 1000
    const oneHour = 60 * oneMinute
    const oneDay = 24 * oneHour

    if (diff < oneDay) {
        if (diff < oneHour) {
            const minutesAgo = Math.floor(diff / oneMinute)
            if (minutesAgo < 1) {
                return 'Just now'
            } else if (minutesAgo === 1) {
                return '1 minute ago'
            } else {
                return `${minutesAgo} minutes ago`
            }
        } else {
            // const hoursAgo = Math.floor(diff / oneHour)
            return `Today at ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
        }
    } else if (diff < 2 * oneDay) {
        return `Yesterday at ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
    } else {
        return date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
    }
}
