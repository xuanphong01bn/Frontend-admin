import React from "react";
import "./Order.scss";
import { faEye, faPenToSquare, faTrashAlt, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

    Link, NavLink
} from "react-router-dom";
class Order extends React.Component {
    handleDelete = () => {
        window.confirm('Bạn chắc chắn huỷ đơn ?');
    }
    render() {
        return (
            <div className="content">
                <div className="page-title">Bảng danh sách đơn hàng</div>
                <div className="container-fluid">
                    <div className="page-content">
                        <div className="row title ">
                            <span className="col-4 ">Mã đơn</span>
                            <span className="col-2 ">Thành tiền</span>
                            <span className="col-2 ">Số lượng</span>
                            <span className="col-2 ">Trạng thái</span>
                            <span className="col-2 ">Thao tác</span>


                        </div>
                        <div className="row detail-order">
                            <div className="col-4 text ">#abcdef</div>
                            <div className="col-2 text ">35000$</div>
                            <div className="col-2 text ">1</div>
                            <div className="col-2 text ">Đang lấy hàng</div>
                            <div className="col-2 text">
                                <Link to="/detail-order">
                                    <span><button className="btn-primary edit" onClick={() => this.handleWatch()} ><FontAwesomeIcon icon={faEye} /></button></span>
                                </Link>

                                <span>
                                    <button className="btn-danger" onClick={() => this.handleDelete()}><FontAwesomeIcon icon={faTrashCan} /></button>
                                </span>
                            </div>
                        </div>



                    </div>





                </div>
            </div>
        )
    }
}
export default Order;