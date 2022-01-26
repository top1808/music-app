import './MV.scss';
import {Link} from 'react-router-dom'

function MV(props) {
    const {mvSongs} = props;
    const showMvSongs = (mvSongs) => {
        if (mvSongs) {
            return mvSongs.map((mvSong, index) => {
                return (
                    <div key={index} className="col-sm-4">
                        <Link to={`video-clip/${mvSong.id}`} className="mv-song-link">
                            <div className="mv_body-item">
                                <img src={mvSong.imgSong} className="mv_body-item-img" alt={mvSong.name}></img>
                                <div className="mv_body-item-des">
                                    <img src={mvSong.imgAuthor} className="mv_body-item-des-img" alt=""></img>
                                    <div className="mv_body-item-des-wrap">
                                        <div className="mv_body-item-des-name">{mvSong.name}</div>
                                        <div className="mv_body-item-des-author">{mvSong.author}</div>
                                    </div>
                                </div>
                                <div className="mv_body-item-overlay">
                                    <i className="fas fa-play mv_body-item-overlay-icon play"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
    }
    return (
        <div className="container mt-4">
            <Link to="/MV/Nhạc Việt"className="mv_header">
                MV HOT
            </Link>
            <div className="mv_body mt-2">
                <div className="mv_body-wrap">
                    <div className="row flex-nowrap">
                        {showMvSongs(mvSongs)}
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

export default MV;