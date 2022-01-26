import * as types from '../constants/actionTypes'

const initialState = []


const newSongs = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_GET_NEW_SONG:
            state = action.newSongs
            return [...state]
        default: return [...state]
    }
}

export default newSongs