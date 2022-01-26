import './CarouselSong.scss';
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {onGetCarouselSongRequest} from './../../actions/index'


function CarouselSong(props) {
    
    const {songs} = props
    const [transform, setTransform] = useState(0)
    const maxWidth = 433*(songs.length - 3)

    useEffect(() => {
        props.onGetCarouselSong();
    }, [])

    const showSongs = () => {
        return songs.map((song, index) => {
            return (
                <img key={index} src={song.img} alt={song.name} className="carousel-song-img"></img>
            )
        })
    }

    const onNext = () => {
        if (transform > -maxWidth) {
            setTransform(transform - 433)
        }
    }

    const onPrev = () => {
        transform === 0 ? setTransform(0) : setTransform(transform+433)
    }

    return (
        <div className="carousel-song d-flex" >
            <div className="carousel-song-container">
                <div className="carousel-song-wrap d-flex" style={{transform: `translateX(${transform}px)`}}>
                    {showSongs()}
                </div>
            </div>
            <div className="list-song-btn-wrap" >
                <div className={transform === 0 ? "d-none" : "list-song-btn prev"} onClick={onPrev}><i className="fas fa-chevron-left"></i></div>
                <div className={transform === -maxWidth ? "d-none" : "list-song-btn next"}onClick={onNext}><i className="fas fa-chevron-right"></i></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        songs: state.carouselSongs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCarouselSong: () => {
            dispatch(onGetCarouselSongRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselSong);