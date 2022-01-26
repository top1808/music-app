import * as types from '../constants/actionTypes'

const initialState = []

const mvSongs = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_GET_SONG_MV:
            state = action.mvSongs
            return [...state]
        default: return [...state]
    }
}

export default mvSongs