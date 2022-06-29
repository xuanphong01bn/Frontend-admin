import React from "react";
import "./Product.scss";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faAccusoft, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare, faTrashAlt, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {

    Link, NavLink
} from "react-router-dom";
import { toast } from "react-toastify";
class Product extends React.Component {
    handleEdit = () => {
        // toast.success('Edit done');
    }
    handleDelete = () => {
        window.confirm('Bạn chắc chắn xoá ?');
    }
    render() {
        return (
            <>

                <div className="content">
                    <div>Danh sách sản phẩm</div>
                    <Link to="/addnewproduct">
                        <button className="btn-warning col-4 align-items-right addnew">Thêm mới sản phẩm</button>
                    </Link>
                    <div className="container-fluid include">

                        <div className="row title ">
                            <span className="col-6 title">Sản phẩm</span>
                            <span className="col-3 title">Thành tiền</span>
                            <span className="col-3 title">Thao tác</span>
                        </div>
                        <div className="row detail-product">
                            <span className="col-6 title">Mazda cx-5</span>
                            <span className="col-3 title">35000$</span>
                            <span className="col-3 title">
                                <Link to="/edit-product">
                                    <span><button className="btn-primary edit" onClick={() => this.handleEdit()} ><FontAwesomeIcon icon={faPenToSquare} /></button></span>
                                </Link>
                                <span>
                                    <button className="btn-danger" onClick={() => this.handleDelete()}><FontAwesomeIcon icon={faTrashCan} /></button>

                                </span>

                            </span>
                        </div>




                    </div>
                </div>
            </>
        )
    }

}
export default Product;