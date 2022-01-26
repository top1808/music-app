import './SideBar.scss';
import logo from './../../img/logo.png';
import ToggleSideBar from "../ToggleSideBar/ToggleSideBar";
import {useState} from 'react'
import {Link, Route} from 'react-router-dom'

function SideBar() {
    const [transform, setTransform] = useState(-100);

    const menus = [
        {
            name: "Cá nhân",
            to: "/individual",
            icon: "far fa-user",
            exact: false,
        },
        {
            name: "Trang chủ",
            to: "/",
            icon: "fas fa-home",
            exact: true
        },
        {
            name: "Nhạc mới",
            to: "/new-song",
            icon: "fas fa-music",
            exact: false
        },
        {
            name: "Top 100",
            to: "/top-100/Nhạc Việt",
            icon: "fas fa-crown",
            exact: false
        },
        {
            name: "MV",
            to: "/MV/Nhạc Việt",
            icon: "fas fa-video",
            exact: false
        },
        {
            name: "Nghệ Sĩ",
            to: "/singers",
            icon: "fas fa-users",
            exact: false
        },
    ]

    const MenuLink = ({label, icon,to, exact}) => {
        return (
            <Route
                path={to}
                exact={exact}
                children={({match}) => {
                    var active = match ? 'active' : ''
                    return (
                        <li className={`nav-item side-bar-item ${active}`}>
                            <Link to={to} className="side-bar-item-link">
                                <i className={icon + " side-bar-item-icon"}></i>
                                {label}
                            </Link>
                        </li>
                    )
                }}
            />
        )
    }
    
    const showMenus = (menus) => {
        return menus.map((menu,index) => {
            return (
                <MenuLink
                    key={index}
                    label={menu.name}
                    icon={menu.icon}
                    to={menu.to}
                    exact={menu.exact}
                />
            )
        })
    }
    
    const onSetTransform = (transform) => {
        setTransform(transform)
    }

    const onCloseSideBar = () => {
        setTransform(-100)
    }


    return (   
        <div className="position-fixed side-bar-wrap">
            <ToggleSideBar setTransform={onSetTransform}/>
            <div className="side-bar" style={{transform: `translateX(${transform}%)`}}>
                <img src={logo} alt="" className="side-bar-img"></img>
                <div className="side-bar-close" onClick={onCloseSideBar}><i className="fas fa-window-close"></i></div>
                <ul className="nav flex-column">
                    {showMenus(menus)}
                </ul>
                <div className="side-bar-login d-flex flex-column text-center">
                    Đăng nhập để tạo những Playlist cho bản thân nào!
                    <Link to="Login" className="side-bar-login-link">
                        <button type="button" className="btn side-bar-login-btn">
                            Đăng nhập
                        </button>
                    </Link>
                </div>
            </div>
            <div className={transform === 0 ? "overlay" : "d-none"} onClick={onCloseSideBar}></div>
        </div>
    )
}

export default SideBar;