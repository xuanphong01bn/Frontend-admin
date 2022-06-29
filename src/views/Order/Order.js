import React from "react";
import "./Order.scss"
class Order extends React.Component {
    render() {
        return (
            <div className="biggest-include">
                <div className="page-title">Quản lí đơn hàng</div>
                <div className="container-fluid include">
                    <div className="page-content">
                        <div className="row">
                            <div className="col-4">Mã sản phẩm</div>
                            <div className="col-2">Giá thành</div>
                            <div className="col-2">Tình trạng</div>
                            <div className="col-2">Thao tác</div>


                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Order;