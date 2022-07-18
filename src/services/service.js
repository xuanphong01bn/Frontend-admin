import axios from "axios";
const createNewUserService = (data) => {
    return axios.post('http://localhost:8000/users', data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgxNzMyNzAsImV4cCI6MTY1ODI1OTY3MCwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.MGyqDHIp2ja_OFXdUUaMOnQER6dZYfAn9SBINU6Hogg'
        }
    });
}
const deleteUserService = (userID) => {
    axios.delete(`http://localhost:8000/users/${userID}`, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgxNzMyNzAsImV4cCI6MTY1ODI1OTY3MCwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.MGyqDHIp2ja_OFXdUUaMOnQER6dZYfAn9SBINU6Hogg'
        }
    });
}
const editUserService = (data, id) => {
    return axios.put(`http://localhost:8000/users/${id}`, data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgxNzMyNzAsImV4cCI6MTY1ODI1OTY3MCwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.MGyqDHIp2ja_OFXdUUaMOnQER6dZYfAn9SBINU6Hogg'
        }
    });
}
const createNewAdminService = (data) => {
    return axios.post('http://localhost:8000/admins', data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgxNzMyNzAsImV4cCI6MTY1ODI1OTY3MCwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.MGyqDHIp2ja_OFXdUUaMOnQER6dZYfAn9SBINU6Hogg'
        }
    });
}
const deleteAdminService = (id) => {
    return axios.delete(`http://localhost:8000/admins/${id}`, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgxNzMyNzAsImV4cCI6MTY1ODI1OTY3MCwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.MGyqDHIp2ja_OFXdUUaMOnQER6dZYfAn9SBINU6Hogg'
        }
    });
}
const editAdminService = (data, id) => {
    return axios.put(`http://localhost:8000/admins/${id}`, data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgxNzMyNzAsImV4cCI6MTY1ODI1OTY3MCwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.MGyqDHIp2ja_OFXdUUaMOnQER6dZYfAn9SBINU6Hogg'
        }
    });
}
const createNewCarService = (data) => {
    return axios.post('http://localhost:8000/products', data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgxNzMyNzAsImV4cCI6MTY1ODI1OTY3MCwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.MGyqDHIp2ja_OFXdUUaMOnQER6dZYfAn9SBINU6Hogg'
        }
    });
}
const createNewOrderService = (data, id) => {
    return axios.post(`http://localhost:8000/bills/${id}`, data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgxNzMyNzAsImV4cCI6MTY1ODI1OTY3MCwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.MGyqDHIp2ja_OFXdUUaMOnQER6dZYfAn9SBINU6Hogg'
        }
    });
}
const editCarService = (data, id) => {
    return axios.put(`http://localhost:8000/products/${id}`, data, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgxNzMyNzAsImV4cCI6MTY1ODI1OTY3MCwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.MGyqDHIp2ja_OFXdUUaMOnQER6dZYfAn9SBINU6Hogg'
        }
    });
}
export {
    createNewUserService, deleteUserService, editUserService, createNewAdminService, deleteAdminService,
    editAdminService, createNewCarService, createNewOrderService, editCarService
}