import * as types from '../constants/actionTypes'

const initialState = {}


const singer = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_GET_SINGER:
            state = action.singer
            return state
        default: return state
    }
}

export default singer