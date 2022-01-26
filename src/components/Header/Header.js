import './Header.scss';
import logo from './../../img/logo.png';

function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-logo-link" href="/">
                        <img src={logo} alt="logo" className="navbar-logo-img"/>
                    </a>
                    <div className="navbar-search">
                        <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week"
                        className="form-control navbar-search-input" name="" id="" aria-describedby="helpId" placeholder="Nhập tên nghệ sĩ, bài hát"/>
                        <i className="fas fa-search navbar-search-icon"></i>
                    </div>
                    <div className="btn-group navbar-user">
                        <button className="btn dropdown-toggle shadow-none" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <img src={logo} className="navbar-user-avt" alt=""></img>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="triggerId">
                            <a className="dropdown-item" href="/">Tài khoản</a>
                            <a className="dropdown-item" href="/">Cài đặt</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Đăng xuất</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;