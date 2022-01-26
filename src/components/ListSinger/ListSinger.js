import './ListSinger.scss';
import {Link} from 'react-router-dom'

function ListSinger(props) {

    const {singers} = props;
    console.log(singers);

    const showSingers = (singers) => {
        return singers.map((singer, index) => {
            return (
                <div key={index} className="col-sm-4">
                    <Link to={`singers/${singer.name}/${singer.id}`} className="list-singer_body-item">
                        <img src={singer.img} className="list-singer_body-item-img" alt={singer.name}></img>
                        <div className="list-singer_body-item-name">{singer.name}</div>
                        <div className="list-singer_body-item-overlay">
                            <i className="fas fa-play list-singer_body-item-overlay-icon play"></i>
                        </div>
                    </Link>
                </div>
            )
        })
    }

    return (
        <div className="container mt-4">
            <div className="list-singer_header">
                NGHỆ SĨ
            </div>
            <div className="list-singer_body mt-2">
                <div className="list-singer_body-wrap container">
                    <div className="row">
                        {showSingers(singers)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListSinger;