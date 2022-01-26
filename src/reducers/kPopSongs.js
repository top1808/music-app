import * as types from '../constants/actionTypes'

const initialState = []

const sortRank = (songs) => {
    var temp;
   for (var i = 0; i < songs.length - 1; i++) {
       for (var j = i+1 ; j < songs.length; j++) {
            if (songs[i].rank > songs[j].rank) {
                temp = songs[i]
                songs[i] = songs[j]
                songs[j] = temp
            }
       }
   }
}

const kPopSongs = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_GET_K_POP_SONG:
            sortRank(action.kPopSongs)
            state = action.kPopSongs
            return [...state]
        default: return [...state]
    }
}

export default kPopSongs