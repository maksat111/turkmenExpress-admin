import jwt_decode from 'jwt-decode';

export const getDecodedToken = () => {
    let data = JSON.parse(localStorage.getItem('turkmenExpress-admin'));
    if (data) {
        const decoded = jwt_decode(data.access)
        return decoded
    } else {
        return null
    }
}