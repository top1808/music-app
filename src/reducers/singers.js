import * as types from '../constants/actionTypes'

const initialState = []


const singers = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_GET_SINGERS:
            state = action.singers
            return [...state]
        default: return [...state]
    }
}

export default singers