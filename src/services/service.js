import axios from "axios";
const createNewUserService = (data) => {
    return axios.post('http://localhost:8000/users', data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTc5MDY3OTcsImV4cCI6MTY1Nzk5MzE5NywiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.nUAdqPoSPIHfPPTuiYDd-6_x6BymCWp4FkTQ1OW7WD4'
        }
    });
}
const deleteUserService = (userID) => {
    axios.delete(`http://localhost:8000/users/${userID}`, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTc5MDY3OTcsImV4cCI6MTY1Nzk5MzE5NywiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.nUAdqPoSPIHfPPTuiYDd-6_x6BymCWp4FkTQ1OW7WD4'
        }
    });
}
const editUserService = (data, id) => {
    return axios.put(`http://localhost:8000/users/${id}`, data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTc5MDY3OTcsImV4cCI6MTY1Nzk5MzE5NywiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.nUAdqPoSPIHfPPTuiYDd-6_x6BymCWp4FkTQ1OW7WD4'
        }
    });
}
export { createNewUserService, deleteUserService, editUserService }