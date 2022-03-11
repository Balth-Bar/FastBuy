export const formatQuantity = Quantity => {
    return '$' + Quantity.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const formartDate = (date) => {
    const formatDate = new Date(date).toUTCString();
    return formatDate
}