
import './VideoClip.scss';
import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

function VideoClip(props) {

    const {path,listVideo, id} = props;   
    const [video, setVideo] = useState("")

    

    useEffect(() => {
        setVideo(path)
    },[path])

    const onEnded = (value) => {
        // videoActive.onClick = () => onPlayMv()
    }

    const showVideo = (video) => {
        if (video && video === path) {
            return (
                <video width="100%" controls autoPlay className="video-clip_body-screen" onEnded={() => onEnded()}> 
                    <source src={video} type="video/mp4"/>
                    Your Browser is not supported video
                </video>
            )
        }
    }  

    const onPlayMv = (id) => {
        props.onPlayMv(id) 
    }

    const showListVideo = (listVideo, path) => {
        return listVideo.map((video,index) => {
            return (
                <li key={index}>
                    <NavLink 
                        to={{
                            pathname: `/video-clip/${video.id}`,
                            search: video.name
                        }}
                        onClick={() => onPlayMv(video.id)} 
                        className="video-clip_list-item-link d-flex align-items-center"
                        >
                        <img src={video.imgAuthor} alt="" className="video-clip_list-item-img" />
                        <div className="video-clip_list-item-des">
                            <div className="video-clip_list-item-name">{video.name}</div>
                            <div className="video-clip_list-item-author">{video.author}</div>
                        </div>
                    </NavLink>
                </li>
            )
        })
    }

    return (
        <div className="row">
            <div className="col-sm-9">
                {showVideo(video)}       
            </div>
            <div className="col-sm-3">
                <div className="video-clip_list-container">
                    <div className="video-clip_list-header">
                        Danh sách phát
                    </div>
                    <ul className="video-clip_list">
                        {showListVideo(listVideo, video)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VideoClip;