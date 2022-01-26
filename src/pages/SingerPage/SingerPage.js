
import {connect} from 'react-redux'
import {useEffect} from 'react'
import {onGetSingerRequest } from '../../actions/index'
import SingerSong from '../../components/SingerSong/SingerSong'

function SingerPage(props) {
  
    const id = props.match.params.id

    useEffect(() => {
        props.onGetSinger(id)
    },[])

    return (
       <SingerSong history={props.history} singer={props.singer}/>
    )
}

const mapStateToProps = (state) => {
    return {
        singer: state.singer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetSinger: (id) => dispatch(onGetSingerRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingerPage);
