export const formatDate = ( timestamp ) => {
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6)

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'UTC'
    }

    const formattedDate = new Intl.DateTimeFormat('uk-UA', options).format(date).replace('р. о', ',')
    return  formattedDate
}