
import {connect} from 'react-redux'
import {useEffect} from 'react'
import {onGetSingersRequest } from '../../actions/index'
import ListSinger from '../../components/ListSinger/ListSinger'

function ListSingerPage(props) {
  
    useEffect(() => {
        props.onGetSingers()
    },[])

    return (
        <ListSinger singers={props.singers}/>
    )
}

const mapStateToProps = (state) => {
    return {
        singers: state.singers,
       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetSingers: () => dispatch(onGetSingersRequest()),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListSingerPage);