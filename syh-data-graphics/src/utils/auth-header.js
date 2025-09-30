export default function authHeader(isLoginData = false) {
    const token = JSON.parse(localStorage.getItem('access_token'));
    let headers = {};
    console.log(isLoginData)
    console.log(token)
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
        console.log(headers);
    }

    if (isLoginData) {
        headers['Content-Type'] = "application/x-www-form-urlencoded"
    }
    return headers;
}
