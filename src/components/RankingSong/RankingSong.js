import { Link } from 'react-router-dom';
import './RankingSong.scss';


function RankingSong(props) {
    
    const {vietNamSongs, usUkSongs, kPopSongs} = props
    console.log(kPopSongs)
    const rankingCategories = [
        {
            name: "Nhạc Việt",
            list: vietNamSongs
        },
        {
            name: "US-UK",
            list: usUkSongs
        },
        {
            name: "K-POP",
            list: kPopSongs,
        }
    ]


    const showRankingSong = (songs) => {
        return songs.map((song) => { 
            if (song.rank < 4) {
                return (
                    <li className="rank-song-item-body-item">
                        <span className="rank-song-item-body-item-number">{song.rank}.</span>
                        <div className="rank-song-item-body-img-wrap">
                            <img className="rank-song-item-body-item-img" src={song.img} alt=""></img>
                            <div className="rank-song-item-overlay">
                                <i className="fas fa-play rank-song-item-overlay-icon play"></i>
                            </div>
                        </div>
                        <div className="rank-song-item-body-item-des">
                            <div className="rank-song-item-body-item-name">{song.name}</div>
                            <div className="rank-song-item-body-item-author">{song.author}</div>
                        </div>
                        <i class="fas fa-ellipsis-h rank-song-item-body-item-option"></i>
                    </li>
                )
            }
        })
    }

    const showRankingCategories = (rankingCategories) => {
        return rankingCategories.map((rankingCategory, index) => {
            return (
                <div key={index} className="col-sm-4">
                    <div className="rank-song_body-item">
                        <div className="rank-song_body-item-header">{rankingCategory.name}</div>
                        <div className="rank-song_body-item-body">
                            <ul className="rank-song-item-body-list">
                                {showRankingSong(rankingCategory.list)}
                            </ul>
                            <Link to={`/top-100/${rankingCategory.name}`} type="button" className="btn rank-song-item-body-item-btn">XEM THÊM</Link>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="container mt-4">
            <div className="rank-song_header">
                BẢNG XẾP HẠNG
            </div>
            <div className="rank-song_body mt-2">
                <div className="row">
                    {showRankingCategories(rankingCategories)}
                </div>
                
            </div>
        </div>
    )
}

export default RankingSong;