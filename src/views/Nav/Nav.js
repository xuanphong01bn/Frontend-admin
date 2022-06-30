import React from "react";
import "./Nav.css";
import avatar from "../../assets/images/avatar.jpg";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faAccusoft, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {

    Link, NavLink
} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
class Nav extends React.Component {
    render() {
        return (
            <>

                {/* <div className="vertical_wrap"> */}

                <div className="vertical_bar ml-auto ms-auto">

                    <div className="profile_info">
                        <div className="img_holder">
                            <img src={avatar} />
                        </div>
                        <p className="title">Admin</p>
                        {/* <p className="sub_title">aniabukstein@gmail.com</p> */}
                    </div>
                    <ul className="menu">
                        <Link to="/" exact={true} className="link">
                            <li><a href="#" >
                                {/* <span className="icon"><i className="fas fa-solid fa-house-user"></i></span> */}

                                <span className="icon"><FontAwesomeIcon icon={faHouseUser} /></span>
                                <span className="text" >Trang chủ</span>
                            </a></li>
                        </Link>
                        <Link to="/list-product" className="link">
                            <li><a href="#">
                                <span className="icon"><FontAwesomeIcon icon={faCar} /></span>
                                <span className="text">Sản Phẩm</span>
                            </a></li>
                        </Link>
                        <Link to="/order" className="link">
                            <li><a href="#">
                                <span className="icon"><FontAwesomeIcon icon={faList} /></span>
                                <span className="text">Đơn hàng</span>
                            </a></li>
                        </Link>

                        {/* <li><a href="#">
                            <span className="icon"><FontAwesomeIcon icon={faAccusoft} /></span>
                            <span className="text">Tài khoản</span>
                        </a></li>
                        <li><a href="#">
                            <span className="icon"><FontAwesomeIcon icon={faScrewdriverWrench} /></span>
                            <span className="text">Cài đặt</span>
                        </a></li> */}
                    </ul>
                    <div>
                        <ul className="social " >
                            <li><a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        </ul>
                    </div>

                </div>
                {/* </div> */}

            </>

        )
    }
}
export default Nav;