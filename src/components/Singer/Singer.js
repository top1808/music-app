import './Singer.scss';
import {Link} from 'react-router-dom'

function Singer(props) {

    const {singers} = props;
    console.log(singers);

    const showSingers = (singers) => {
        return singers.map((singer, index) => {
            return (
                <div key={index} className="col-sm-3">
                    <Link to={`singers/${singer.name}/${singer.id}`} className="singer_body-item">
                        <img src={singer.img} className="singer_body-item-img" alt={singer.name}></img>
                        <div className="singer_body-item-name">{singer.name}</div>
                        <div className="singer_body-item-overlay">
                            <i className="fas fa-play singer_body-item-overlay-icon play"></i>
                        </div>
                    </Link>
                </div>
            )
        })
    }

    return (
        <div className="container mt-4">
            <Link to="/singers" className="singer_header">
                NGHỆ SĨ
            </Link>
            <div className="singer_body mt-2">
                <div className="singer_body-wrap container">
                    <div className="row flex-nowrap">
                        {showSingers(singers)}
                    </div>
                </div>
                {/* <div className="list-song-btn-wrap">
                    <div className="list-song-btn prev"><i className="fas fa-chevron-left"></i></div>
                    <div className="list-song-btn next"><i className="fas fa-chevron-right"></i></div>
                </div> */}
            </div>
        </div>
    )
}

export default Singer;