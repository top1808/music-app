import * as types from './../constants/actionTypes'

const initialState = []

const carouselSongs = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_GET_CAROUSEL_SONG:
            state = action.songs
            return [...state]
        default: return [...state]
    }
}

export default carouselSongs