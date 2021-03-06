import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            name: '',
            telephone: '',
            address: '',
            time_create: '',
            status: '',
            list_products: '',
        }
    }
    componentDidMount() {
        let a = this.props.detailItem;
        console.log('item :', a)
        console.log('list product :', a.list_products)
        this.setState({
            user_id: a.user_id,
            name: a.name,
            telephone: a.telephone,
            address: a.address,
            time_create: a.time_create,
            status: a.status,
            list_products: a.list_products,
        })

        // console.log('list user la: ', this.props.editItem)
        // this.findUser();
        // let a = this.props.editItem;
        // this.setState({
        //     user_id: a.user_id,
        //     name: a.name,
        //     telephone: a.telephone,
        //     address: a.address,
        //     time_create: a.time_create,
        // })
    }
    // findUser = () => {
    //     let a = this.props.listUser;
    //     let b = a.find(x => x.id === 4);
    //     console.log(b);
    // }
    toggle = () => {
        // alert('me toggle')
        this.props.toggleModal()
    }

    render() {
        let { a } = this.props.detailItem;
        let { list_products } = this.state
        console.log(this.state.list_products)
        // let { a } = this.props.editItem;
        // console.log('>>> check child props', this.props);
        // console.log('>>> check child open modal', this.props.isOpen);
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => this.toggle()}
                    className={'abcClassName'}
                    size='lg'
                    centered
                >
                    <ModalHeader toggle={() => this.toggle()}>Chi ti???t ????n h??ng</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 ">
                                    <label>UserId</label>
                                    <div >{this.state.user_id}</div>

                                </div>
                                <div className="col-6 ">
                                    <label>T??n</label>
                                    <div>{this.state.name}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 ">
                                    <label>S??T</label>
                                    <div>{this.state.telephone}</div>

                                </div>
                                <div className="col-6 ">
                                    <label>Tr???ng Th??i</label>
                                    <div>
                                        {this.state.status}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 ">
                                    <label>?????a ch???</label>
                                    <div>{this.state.address}</div>
                                </div>
                                <div className="col-6 ">
                                    <label>Th???i gian t???o ????n</label>
                                    <div>{this.state.time_create}</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 ">
                                    <label>Danh s??ch s???n ph???m</label>
                                    <div>{
                                        list_products && list_products.map((item, index) => {
                                            return (
                                                <>
                                                    <div>
                                                        <span className="col-1 text">S???n ph???m th??? : {index + 1}   </span>

                                                        <span className="col-1 text">S??? l?????ng : {item.quantity}   </span>
                                                        <span className="col-1 text"> M?? s???n ph???m: {item.product_id}   </span>
                                                        <span className="col-1 text" > T???ng ti???n: {item.total_price}   </span>

                                                    </div>

                                                </>
                                            )
                                        }

                                        )

                                    }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={() => this.handleEdit()}>L??u</Button>{' '} */}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }
}
export default ModalDetail;