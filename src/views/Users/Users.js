import React from "react";
import axios from "axios";
import "./Users.scss";
import { faEye, faPenToSquare, faTrashAlt, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

    Link, NavLink
} from "react-router-dom";
import ModalUser from "./ModalUser";
import { toast } from "react-toastify";
import { createNewUserService } from "../../services/service";
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: [],
            isOpenModalUser: false
        }
    }
    /** Life cycle 
     * Run component
     * 1. Run construct -> init state
     * 2. Did mount (gán giá trị cho state (gọi api))
     * 3. Render
     * 
     * 
     * 
     */
    async componentDidMount() {
        await this.getAllUserFromReact();

    }
    getAllUserFromReact = async () => {
        let res = await axios.get('http://localhost:8000/users', {
            headers: {
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTc1NTA2MTksImV4cCI6MTY1NzYzNzAxOSwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.YtTg2YdgO2-XiAy8ZjN2GoleqbgClaRbudZ0ngMRVEo'
            }
        });
        console.log('>>>check res: ', res.data.data);

        this.setState({
            listUser: res.data.data,
        })
    }
    handleAddNewUser = () => {
        // alert('xong cái này mấy cái kia làm tương tự')
        // let a = this.state.isOpenModalUser;
        this.setState({
            isOpenModalUser: true,
        })
    }
    // ChangeState = () => {
    //     this.setState({
    //         isOpenModalUser: false,
    //     })
    // }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    createNewUser = async (data) => { // data được truyền từ component con
        try {
            let res = await createNewUserService(data);
            console.log('res create user: ', res);
            await this.getAllUserFromReact();
            this.setState({
                isOpenModalUser: false,
            })
            toast.success('Thêm thành công')
        } catch (e) {
            console.log(e);
            toast.error('Lỗi trùng lặp')
        }
    }
    render() {
        let { listUser } = this.state;
        return (
            <div className="content">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    test={'abc'}
                    // ChangeState={this.ChangeState}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />

                <div className="page-title">Danh sách người dùng</div>
                <div className="container-fluid">
                    <div className="btn-warning col-2" style={{ cursor: 'pointer', marginBottom: '10px', padding: '5px 5px' }}
                        onClick={() => this.handleAddNewUser()}
                    >Thêm mới người dùng</div>
                    <div className="page-content">
                        <div className="row title ">
                            <span className="col-1 ">Id</span>
                            <span className="col-2 ">Tên</span>
                            <span className="col-2 ">SĐT</span>
                            <span className="col-3 ">Email</span>
                            <span className="col-2 ">Địa chỉ</span>
                            <span className="col-2 ">Thao tác</span>

                        </div>
                        <div className="row detail-user">
                            {listUser && listUser.length > 0 &&
                                listUser.map((item, index) => {
                                    return (
                                        <>
                                            <div className="col-1 text ">{item.id}</div>
                                            <div className="col-2 text ">{item.username}</div>
                                            <div className="col-2 text ">{item.telephone}</div>
                                            <div className="col-3 text ">{item.email}</div>
                                            <div className="col-2 text">
                                                {item.address}
                                            </div>
                                            <div className="col-2">Adding thao tác</div>
                                        </>


                                    )

                                })}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Users;