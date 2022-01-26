
import './SingerSong.scss';
import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

function SingerSong(props) {

    const {history, singer} = props

    const onClose = () => {
        history.push("/singers");
    }

    const showSingerDes = (name, des, img) => {
        return (
            <div key={321} className="singer-song_header row justify-content-between">
                <div className="col-sm-6">
                    <div className="singer-song_info-name">{name}</div>
                    <div className="singer-song_info-des">{des}.</div>
                    <div className="singer-song_header-btn-wrap mt-4">
                        <button type="button" className="btn btn-danger">
                            <i className="fas fa-play"></i>&nbsp;&nbsp;
                            Phát nhạc</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-danger">
                            <i className="fas fa-user-plus"></i>&nbsp;&nbsp;
                            Quan tâm</button>
                    </div>
                </div>
                <img className="col-sm-5 singer-song_img" src={img} alt=""/>
            </div>
        )
    }

    const showListSong = (songs) => {
        if (songs) {
            return songs.map((song, index) => {
                return (
                    <div key={index} className="singer-song_body-songs-item">
                        <img className="singer-song_body-songs-item-img" src={song.img} alt={song.name} />
                        <div className="singer-song_body-songs-item-name">{song.name}(Single)</div>
                        <div className="singer-song_body-songs-item-author">{song.author}</div>
                        <div className="singer-song_body-item-overlay">
                            <i className="fas fa-play singer-song_body-item-overlay-icon play"></i>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div className="singer-song_container">
                    <div className="singer-song_background"></div>
                    <div className="singer-song_btn-close" onClick={onClose}>
                        <i className="far fa-times-circle"></i>
                    </div>
                    <div className="singer-song mt-100">
                        <div className="container">
                            {showSingerDes(singer.name, singer.des, singer.img)}
                            <div className="singer-song_body container">
                                <div className="singer-song_body-songs mt-4">
                                    <div className="singer-song_body-songs-header">Bài Hát</div>
                                    <div className="singer-song_body-songs-body">
                                        {showListSong(singer.songs)}
                                    </div>
                                </div>
                                <div className="singer-song_body-songs mt-4">
                                    <div className="singer-song_body-songs-header">MV</div>
                                    <div className="singer-song_body-songs-body">
                                        {showListSong(singer.songs)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default SingerSong;