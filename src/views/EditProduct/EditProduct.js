import React from "react";
import { toast } from "react-toastify";
class EditProduct extends React.Component {
    handleSubmit = () => {
        toast.success('Thêm xong !')
    }
    render() {
        return (
            <div className="biggest-include">
                <div>Sửa sản phẩm</div>
                <div className="container-fluid">
                    <div className="row">
                        <form className="col-12">
                            <label>Tên sản phẩm</label><br />
                            <input type="text" placeholder="Mazda 3" name="name" /><br />

                        </form>

                    </div>
                    <div className="row">
                        <form className="col-12"><label>Giá </label><br />
                            <input type="text" placeholder="30000" name="name" /> $</form>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label>Mô tả chi tiết</label><br />
                            <textarea id="w3review" name="w3review" rows="4" cols="50" className="textarea"
                                placeholder="Mô tả chi tiết"
                            ></textarea>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label>Chọn ảnh</label><br />
                            <label for="myfile">Select a file:</label>
                            <input type="file" id="myfile" name="myfile" multiple="multiple" /><br></br>

                        </div>
                    </div>
                    <div className="row">
                        <div><input type="submit" value=" Thêm " onClick={() => this.handleSubmit()} /></div>
                    </div>

                </div>
            </div>
        )
    }
}
export default EditProduct;