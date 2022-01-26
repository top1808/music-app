import * as types from '../constants/actionTypes'

const initialState = []


const userList = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_GET_USER:
            state = action.userList
            return [...state]
        default: return [...state]
    }
}

export default userList