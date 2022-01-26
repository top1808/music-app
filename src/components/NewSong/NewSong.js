import './NewSong.scss';
import {connect} from 'react-redux'
import {onGetNewSongsRequest} from '../../actions/index'
import {useEffect} from 'react'

function NewSong(props) {

    const {newSongs} = props

    const onPlay = (id) => {
        props.onPlay(id)
    }

    useEffect(() => {
        props.onGetNewSong()
    },[])

    const showNewSong = (newSongs) => {
        return newSongs.map((song, index) => {
            return (
                <div key={index} className="new-song_body-item col-sm-4" onClick={() => onPlay(song.id)}>
                    <img src={song.img} className="new-song_body-item-img" alt=""></img>
                    <div className="new-song_body-item-name">{song.name}</div>
                    <div className="new-song_body-item-overlay">
                        <i className="fas fa-play new-song_body-item-overlay-icon play"></i>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="container mt-4">
            <div className="new-song_header">
                MỚI RA MẮT
            </div>
            <div className="new-song_body">
                <div className="row">
                    {showNewSong(newSongs)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        newSongs: state.newSongs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetNewSong: () => dispatch(onGetNewSongsRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSong);