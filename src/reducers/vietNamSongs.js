import * as types from '../constants/actionTypes'

const initialState = []

const sortRank = (songs) => {
    songs.sort((a, b) => {
        return a.rank - b.rank
    })
}

const VietNamSongs = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_GET_VIET_NAM_SONG:
            sortRank(action.vietNamSongs)
            state = action.vietNamSongs
            return [...state]
        default: return [...state]
    }
}

export default VietNamSongs