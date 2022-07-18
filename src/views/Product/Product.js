import React from "react";
import axios from "axios";
import "./Product.scss";
import { faEye, faPenToSquare, faTrashAlt, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

    Link, NavLink
} from "react-router-dom";
import { toast } from "react-toastify";
import { createNewUserService, deleteUserService } from "../../services/service";
import { createNewCarService } from "../../services/service";
import ModalCar from "./ModalCar";
import { faTurkishLiraSign } from "@fortawesome/free-solid-svg-icons";
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: [],
            isOpenModalCar: false,
        }
    }
    async componentDidMount() {
        await this.getAllCarFromReact();

    }
    getAllCarFromReact = async () => {
        let res = await axios.get('http://localhost:8000/products ', {
            headers: {
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTgxNzMyNzAsImV4cCI6MTY1ODI1OTY3MCwiYXVkIjoibXlhZG1pbnMiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWV9.MGyqDHIp2ja_OFXdUUaMOnQER6dZYfAn9SBINU6Hogg'
            }
        });
        console.log('>>>check res: ', res.data.data);
        this.setState({
            listProduct: res.data.data,
        })
    }
    handleAddNewCar = () => {
        this.setState({
            isOpenModalCar: true,
        })

    }
    toggleCarModal = () => {
        this.setState({
            isOpenModalCar: !this.state.isOpenModalCar,
        })
    }
    createNewCar = async (data) => { // data được truyền từ component con
        try {
            let res = await createNewCarService(data);
            console.log('res create car: ', res);
            await this.getAllUserFromReact();
            this.setState({
                isOpenModalCar: false,
            })
            toast.success('Thêm thành công')
        } catch (e) {
            console.log(e);
            toast.error('Lỗi')
        }
    }
    render() {
        let { listProduct } = this.state;
        return (
            <div className="content">
                <ModalCar
                    isOpen={this.state.isOpenModalCar}
                    toggleCarModal={this.toggleCarModal}
                    createNewCar={this.createNewCar}
                />
                <div className="page-title">Danh sách sản phẩm</div>
                <div className="container-fluid">
                    <div className="btn-warning col-2" style={{ borderRadius: '5%', border: '1px solid grey', cursor: 'pointer', marginBottom: '10px', padding: '5px 5px' }}
                        onClick={() => this.handleAddNewCar()}
                    >Thêm mới sản phẩm</div>
                    <div className="page-content">
                        <div className="row title ">
                            <span className="col-2 ">STT</span>
                            <span className="col-4 ">Tên</span>
                            <span className="col-2 ">Năm</span>
                            <span className="col-4 ">Thao tác</span>

                        </div>
                        <div className="row detail-user">
                            {listProduct && listProduct.length > 0 &&
                                listProduct.map((item, index) => {
                                    return (
                                        <>
                                            <div className="col-2 text ">{index + 1}</div>
                                            <div className="col-4 text ">{item.name}</div>
                                            <div className="col-2 text "> {item.year}</div>

                                            <div className="col-4">
                                                <span><button className="btn-primary edit" onClick={() => this.handleEditUser(item)} ><FontAwesomeIcon icon={faEye} /></button></span>
                                                <span><button className="btn-primary edit" onClick={() => this.handleEditUser(item)} ><FontAwesomeIcon icon={faPenToSquare} /></button></span>
                                                <span>
                                                    <button className="btn-danger" onClick={() => this.handleDeleteUser(item)}><FontAwesomeIcon icon={faTrashCan} /></button> </span>
                                            </div>
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
export default Product;