import * as types from '../constants/actionTypes'

const initialState = {}

const mvPlayer = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_GET_MV_PLAYER:
            state = action.mvSong
            return state
        default: return state
    }
}

export default mvPlayer