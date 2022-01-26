import * as types from '../constants/actionTypes'

const data = JSON.parse(localStorage.getItem('songPlayer'))
const initialState = []


const songPlayer = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_GET_SONG:
            state.unshift(action.song)
            localStorage.setItem('songPlayer', JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
}

export default songPlayer