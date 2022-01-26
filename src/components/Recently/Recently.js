import './Recently.scss';

function Recently() {
    return (
        <div className="container mt-4">
            <div className="recently_header">
                NGHE GẦN ĐÂY
            </div>
            <div className="recently_body">
                <div className="recently_body-item">
                    <img src="https://photo-zmp3.zadn.vn/banner/7/4/6/6/74665ef4c064f3597034abafa4bf1870.jpg" className="recently_body-item-img" alt=""></img>
                    <div className="recently_body-item-name">Top 100 bài hát</div>
                    <div className="recently_body-item-overlay">
                        <i className="fas fa-play recently_body-item-overlay-icon play"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recently;