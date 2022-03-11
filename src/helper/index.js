export const formatQuantity = Quantity => {
    return '$' + Quantity.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const formartDate = (date) => {
    if (typeof (date) !== "object") {
        date = new Date(date)
    }
    const setDate = parseInt(date)
    const formatDate = date.toISOString()
    const formartDate = formatDate.split("T")
    return formartDate[0]

}