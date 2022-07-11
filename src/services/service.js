import axios from "axios";
const createNewUserService = (data) => {
    return axios.post('http://localhost:8000/users', data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTc1NTA2MTksImV4cCI6MTY1NzYzNzAxOSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.YtTg2YdgO2-XiAy8ZjN2GoleqbgClaRbudZ0ngMRVEo'
        }
    });
}
const deleteUserService = (userID) => {
    axios.delete(`http://localhost:8000/users/${userID}`, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTc1NTA2MTksImV4cCI6MTY1NzYzNzAxOSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.YtTg2YdgO2-XiAy8ZjN2GoleqbgClaRbudZ0ngMRVEo'
        }
    });
}
export { createNewUserService, deleteUserService }