export const getToken = () => {
    let data = JSON.parse(localStorage.getItem('turkmenExpress-admin'));
    if (data) {
        return data.access
    } else {
        return null
    }
}

export const getTokenLink = () => {
    let data = JSON.parse(localStorage.getItem('turkmenExpress-adminlink'));
    if (data) {
        return data.access
    } else {
        return null
    }
}