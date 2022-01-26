
import Top100 from '../../components/Top100/Top100'
import {connect} from 'react-redux'
import {useEffect} from 'react'
import Footer from "../../components/Footer/Footer"
import {onGetVietNamSongsRequest, onGetUsUkSongsRequest,onGetKPopSongsRequest} from '../../actions/index'

function Top100Page(props) {

    const {vietNamSongs, usUkSongs,kPopSongs, match} = props
    const songPlayers = vietNamSongs
    useEffect(() => {
        props.onGetVietNamSongs()
        props.onGetUsUkSongs()
        props.onGetKPopSongs()
    },[])

    return (
        <div>
            <Top100 vietNamSongs={vietNamSongs} usUkSongs={usUkSongs} kPopSongs={kPopSongs} slug={match.params.slug}/>
            <Footer songPlayers={songPlayers}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        vietNamSongs: state.vietNamSongs,
        usUkSongs: state.usUkSongs,
        kPopSongs: state.kPopSongs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetVietNamSongs: () => dispatch(onGetVietNamSongsRequest()),
        onGetUsUkSongs: () => dispatch(onGetUsUkSongsRequest()),
        onGetKPopSongs: () => dispatch(onGetKPopSongsRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top100Page);