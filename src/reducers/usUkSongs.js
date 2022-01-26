import * as types from '../constants/actionTypes'

const initialState = []

const sortRank = (songs) => {
    songs.sort((a, b) => {
        return a.rank - b.rank
    })
}

const usUkSongs = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_GET_US_UK_SONG:
            sortRank(action.usUkSongs)
            state = action.usUkSongs
            return [...state]
        default: return [...state]
    }
}

export default usUkSongs