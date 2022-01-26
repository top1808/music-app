import './Top100.scss';
import {NavLink} from 'react-router-dom'

function Top100(props) {

    const categories = ["Nhạc Việt", "US-UK", "K-POP"]
    const {vietNamSongs, usUkSongs,kPopSongs, slug}  = props

    const showCategory = (categories) => {
        return categories.map((category, index) => {
            return (
                <NavLink to={`/top-100/${category}`} className="top-100_category">{category}</NavLink>
            )
        })
    }

    const showListSong = (songs) => {
        if (songs) {
            return songs.map((song, index) => {
                return (
                    <li key={index} className="top-100_list-item d-flex align-items-center justify-content-between">
                        <div className="d-flex d-flex align-items-center">
                            <div className="top-100_list-item-rank">{song.rank}.</div>
                            <img src={song.img} className="top-100_list-item-img" alt=""></img>
                            <div className="top-100_list-item-des">
                                <div className="top-100_list-item-name">{song.name}</div>
                                <div className="top-100_list-item-author">{song.author}</div>
                            </div>
                        </div>
                        {/* <div className="top-100_list-item-time-song">04:12</div> */}
                        <div className="top-100_list-item-options">
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </li>
                )
            })
        }
    }

    const showListSongCategories = (categories, slug) => {
        return categories.map((category) => {
            if (category === slug) {
                switch (slug) {
                    case "Nhạc Việt":
                        return showListSong(vietNamSongs)
                    case "US-UK":
                        return showListSong(usUkSongs)
                    case "K-POP":
                        return showListSong(kPopSongs)
                    default: return <h1>NotFound</h1>
                }
            }
        })
    }

    return (
        <div className="container mt-100">
            <div className="top-100_header">
                BẢNG XẾP HẠNG
            </div>
            <div className="d-flex align-items-center">
                {showCategory(categories)}
            </div>
            <div className="top-100_body mt-2 ">
                <ul className="top-100_list mt-4">
                    {showListSongCategories(categories, slug)}
                </ul>
            </div>
        </div>
    )
}

export default Top100;