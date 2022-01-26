import CarouselSong from "../../components/CarouselSong/CarouselSong"
import Recently from "../../components/Recently/Recently";
import NewSong from "../../components/NewSong/NewSong"
import RankingSong from "../../components/RankingSong/RankingSong";
import Singer from "../../components/Singer/Singer";
import MV from "../../components/MV/MV";
import Footer from "../../components/Footer/Footer"
import {onGetSongPlayerRequest,onGetSongRequest, onGetVietNamSongsRequest, 
        onGetUsUkSongsRequest, onGetKPopSongsRequest, onGetSingersRequest, 
        onGetSongMVRequest} from '../../actions/index'
import {connect} from 'react-redux'
import {useEffect} from 'react'



function HomePage(props) {

    useEffect(() => {
        props.onGetSongPlayer()
        props.onGetVietNamSongs()
        props.onGetUsUkSongs()
        props.onGetKPopSongs()
        props.onGetSingers()
        props.onGetMvSongs()
    },[])


    const onPlay = (id) => {
        props.onGetSong(id)
    }

    return(
        <div>
            <div>
            <CarouselSong/>
            <Recently/>
            <NewSong onPlay={onPlay}/>
            <RankingSong vietNamSongs={props.vietNamSongs} usUkSongs={props.usUkSongs} kPopSongs={props.kPopSongs}/>
            <Singer singers={props.singers}/>
            <MV mvSongs={props.mvSongs}/>
            </div>
            <Footer songPlayers={props.songPlayers}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        songPlayers: state.songPlayer,
        vietNamSongs: state.vietNamSongs,
        usUkSongs: state.usUkSongs,
        kPopSongs: state.kPopSongs,
        singers: state.singers,
        mvSongs: state.mvSongs,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        onGetSongPlayer: () => {
            dispatch(onGetSongPlayerRequest())
        },
        onGetSong: (id) => {
            dispatch(onGetSongRequest(id))
        },
        onGetVietNamSongs: () => dispatch(onGetVietNamSongsRequest()),
        onGetUsUkSongs: () => dispatch(onGetUsUkSongsRequest()),
        onGetKPopSongs: () => dispatch(onGetKPopSongsRequest()),
        onGetSingers: () => dispatch(onGetSingersRequest()),
        onGetMvSongs: () => dispatch(onGetSongMVRequest()),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);