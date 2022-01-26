import VideoClip from "../../components/VideoClip/VideoClip"
import {connect} from 'react-redux'
import {onGetMvPlayerRequest, onGetSongMVRequest} from "../../actions/index"
import {useEffect} from 'react'

function VideoClipPage(props) {

    const {mvPlayer, match,listVideo,history} = props
    const id = Number(match.params.id)
    const {name, imgAuthor, author, path} = mvPlayer

    window.addEventListener('popstate', function(event) {
        history.push("/MV/Nhạc Việt")
    });

    useEffect(() => {
        props.onGetMvPlayer(id)
        props.onGetListVideo()
    },[])

    const onClose = () => {
        props.history.push("/MV/Nhạc Việt");
    }

    const onPlayMv = (id) => {
        props.onGetMvPlayer(id)
    }

    const onEnded = (value) => {
       
    }

    const showVideo = (mvPlayer) => {
        if (mvPlayer) {
            return (
                <div className="video-clip-container">
                    <div className="video-clip_background"></div>
                    <div className="video-clip">
                        <div className="video-clip_header d-flex justify-content-between align-items-center">
                            <div className="video-clip_info-wrap d-flex align-items-center">
                                <img src={imgAuthor} alt="" className="video-clip_img"/>
                                <div className="video-clip_des">
                                    <div className="video-clip_name">{name}</div>
                                    <div className="video-clip_author">{author}</div>
                                </div>
                                <div className="video-clip-favourite">
                                    <i className={true ? "fas fa-heart" : "far fa-heart"}></i>
                                </div>
                                <div className="video-clip-option">
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                            <div className="video-clip_btn-close" onClick={onClose}>
                                <i className="far fa-times-circle"></i>
                            </div>
                        </div>
                        <div className="video-clip_body container">
                                <VideoClip id={id} path={path}  listVideo={listVideo} onPlayMv={onPlayMv} onEnded={onEnded}/>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {showVideo(mvPlayer)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        mvPlayer: state.mvPlayer,
        listVideo: state.mvSongs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetMvPlayer: (id) => {
            dispatch(onGetMvPlayerRequest(id))
        },
        onGetListVideo: () => {
            dispatch(onGetSongMVRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoClipPage)