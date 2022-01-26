import './ListVideo.scss';
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {useEffect} from 'react'
import {onGetSongMVRequest} from '../../actions/index'

function ListVideo(props) {

    const {mvSongs, slug} = props
    const categories = ["Nhạc Việt", "US-UK", "KPOP"]

    useEffect(() => {
        props.onGetSongMV()
    }, [])


    const showMvSongs = (mvSongs) => {
        if (mvSongs) {
            return mvSongs.map((mvSong,index) => {
                return (
                    <div key={index} className="col-sm-4 mt-4" >
                        <Link to={{
                            pathname: `/video-clip/${mvSong.id}`,
                            search: mvSong.name
                        }} 
                            className="list-video_body-item"
                        >
                            <img src={mvSong.imgSong} className="list-video_body-item-img" alt=""></img>
                            <div className="list-video_body-item-des">
                                <img src={mvSong.imgAuthor} className="list-video_body-item-des-img" alt=""></img>
                                <div className="list-video_body-item-des-wrap">
                                    <div className="list-video_body-item-des-name">{mvSong.name}</div>
                                    <div className="list-video_body-item-des-author">{mvSong.author}</div>
                                </div>
                            </div>
                            <div className="list-video_body-item-overlay">
                                <i className="fas fa-play list-video_body-item-overlay-icon play"></i>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
    }

    const showListVideoCategory = (categories, slug) => {
        if (categories) {
            return categories.map((category) => {
                if (category === slug) {
                    switch (slug) {
                        case "Nhạc Việt":
                            return showMvSongs(mvSongs)
                        case "US-UK":
                            return showMvSongs(mvSongs)
                        case "KPOP":
                            return showMvSongs(null)
                        default: return <h1>NotFound</h1>
                    }
                }
            })

        }
    }

    const showCategories = (categories) => {
        if (categories) {
            return categories.map((category, index) => {
                return (
                    <NavLink key={index} to={`/MV/${category}`} className="list-video_header-item">{category}</NavLink>
                )
            }
            )
        }
    }


    return (
        <div className="container mt-4">
            <div className="list-video_header d-flex align-items-center">
                <div className="list-video_label mt-4 ms-2">MV</div>
                <div className="list-video_header-wrap d-flex mt-4">
                    {showCategories(categories)}
                </div>
            </div>
            <div className="list-video_body mt-4">
                <div className="list-video_body-sort">
                    <div className="dropdown open">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                    Tất cả
                                </button>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <button className="dropdown-item" href="#">Rap</button>
                            <button className="dropdown-item disabled" href="#">Nhạc trẻ</button>
                        </div>
                    </div>
                </div>
                <div className="list-video_body-wrap">
                    <div className="row">
                       {showListVideoCategory(categories, slug)}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        mvSongs: state.mvSongs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetSongMV: () => {
            dispatch(onGetSongMVRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListVideo);