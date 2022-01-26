import './Footer.scss';
import {useState,useEffect, useRef} from 'react'


function Footer(props) {
    const [indexCurrentSong, setIndexCurrentSong] = useState(0)
    const [repeat, setRepeat] = useState(false)
    const [random, setRandom] = useState(false)
    const [isPlay, setIsPlay] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [isFavourite, setIsFavourite] = useState(false)
    const [progress, setProgress] = useState(0)
    const [volume, setVolume] = useState(100)
    const [time, setTime] = useState(-1)

    const {songPlayers} = props
    
    useEffect(() => {
        if (songPlayers) {
            setIndexCurrentSong(0)
        }
    },[songPlayers])
    
    const audioElm = useRef(null)

    
    
    const onFavourite = () => {
        setIsFavourite(!isFavourite)
    }
    
    const randomSong = () => {
        var randomSong;
        do {
            randomSong = Math.floor(Math.random() * songPlayers.length)
        } while (randomSong === indexCurrentSong)
        setIndexCurrentSong(randomSong)
    }
    
    const onRepeat = () => {
        setRepeat(!repeat)
    }
    
    const onRandom = () => {
        setRandom(!random)
    }
    
    const onPlay = () => {
        setIsPlay(!isPlay)
    }
    
    const onInput = (e) => {
        if (audioElm.current) {
            const seekTime = Math.floor(e.target.value / 100 * audioElm.current.duration)
            audioElm.current.currentTime = seekTime
        }
    }
    
    const onTimeUpdate = () => {
        if (audioElm.current) {
            const progressPercent = Math.floor(audioElm.current.currentTime / audioElm.current.duration * 100);
            setProgress(progressPercent)
        }
    }
    
    const showProgress = (seconds) => {
        if (audioElm.current) { 
            var minutes = 0;
            if (seconds === 60) {
                minutes = Number(minutes + 1);
                seconds = 0
            }
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            if (seconds < 10) {
                seconds = "0" + seconds
            }
            return minutes + ":" + seconds
            
        }
    }
    
    const showTimeSong = () => {
        if (audioElm.current) {
            var minutes = Math.floor(Number(audioElm.current.duration) / 60)
            var seconds = Math.floor(Number(audioElm.current.duration) % 60)
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            if (seconds < 10) {
                seconds = "0" + seconds
            }
            return minutes + ":" + seconds
            
        }
    }
    
    const onEnded = () => {
        if (!repeat) {
            onNext();
            audioElm.current.currentTime = 0
        }
        if (random) {
            randomSong();
        }
    }
    
    const onSetVolume = (e) => {
        setVolume(e.target.value) 
    }
    
    const onNext = ()  => {
        if (random) {
            randomSong();
        } else {
            indexCurrentSong === songPlayers.length - 1 ? setIndexCurrentSong(0) : setIndexCurrentSong(indexCurrentSong + 1)
        }
    }
    
    const onBack = () => {
        if (random) {
            randomSong();
        } else {
            indexCurrentSong === 0 ? setIndexCurrentSong(songPlayers.length - 1) : setIndexCurrentSong(indexCurrentSong - 1)
        }
    }
    
    const onToggleVolume = () => {
        setIsMuted(!isMuted);
    }
    
    useEffect(() => {
        showSongPlayers(songPlayers)
        showTimeSong()
    }, [indexCurrentSong])
    
    useEffect(() => {
        if (audioElm.current) {
            if (isMuted) {
                setVolume(0)
            } else {
                // onSetVolume()
            }
            audioElm.current.volume = volume / 100
        }
        setTime(time + 1)
    },[volume,isMuted])
    
    useEffect(() => {
        if (audioElm.current) {
            if (isPlay) {
                audioElm.current.play()
                .then(() => {
                    
                })
                .catch(() => {
                    onNext()
                })
            } else {
                audioElm.current.pause()
            }
        }
    })
    
    const showSongPlayers = (songPlayers) => {
        if (songPlayers) {
            return songPlayers.map((songPlayer,index) => {
                return (
                    <div key={index} className={indexCurrentSong === index ? "" : "d-none"}>
                        <div className="song">
                            <img className="song-img" src={songPlayer.img} alt={songPlayer.name}/>
                            <div className="song-des">
                                <div className="song-name">{songPlayer.name}</div>
                                <div className="song-author">{songPlayer.author}</div>
                            </div>
                            <div className="song-favourite" onClick={onFavourite}>
                                <i className={isFavourite ? "fas fa-heart" : "far fa-heart"}></i>
                            </div>
                            <div className="song-option">
                                <i className="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <audio ref={audioElm} src={songPlayers[indexCurrentSong].path} onTimeUpdate={onTimeUpdate} onEnded={onEnded} />
                    </div>
                )
            })
        }
    }

    return (
        <footer className="footer">
            <div className="song_container">
                {showSongPlayers(songPlayers)}
                <div className="song-player">
                    <div className="song-player-btn-wrap">
                        <i className={repeat ? "btn btn-redo fas fa-redo active" : "btn btn-redo fas fa-redo"} onClick={onRepeat}></i>
                        <i className="btn  btn-backward fas fa-step-backward" onClick={onBack}></i>
                        <div className="btn-play-song" onClick={onPlay}>
                            <i className={isPlay ? "btn-pause fas fa-pause" : "btn-play fas fa-play"} ></i>
                        </div>
                        <i className="btn btn-forward fas fa-step-forward" onClick={onNext}></i>
                        <i className={random ? "btn btn-redo fas fa-random active" : "btn btn-redo fas fa-random"} onClick={onRandom}></i>
                    </div>
                    <input className="progress" type="range" value={progress} step="1" min="0" max="100" onInput={onInput}></input> 
                        {/* <span className="time-wrap current-time">{showProgress(time)}</span>
                        <span className="time-wrap max-time">{showTimeSong()}</span> */}
                </div>
                <div className="volume_wrap" >
                    <i className={isMuted ? "fas fa-volume-mute volume-icon" : "fas fa-volume-up volume-icon" } onClick={onToggleVolume}></i>
                    <input className="volume" type="range" value={volume} onInput={onSetVolume} step="1" min="0" max="100"/>
                </div>
            </div>
        </footer>
    )
}


export default Footer;