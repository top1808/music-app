import * as types from './../constants/actionTypes'
import callApi from './../util/apiCaller'

export const onGetUserRequest = () => {
    return dispatch => {
        return callApi('user', 'GET', null)
            .then((response) => {
                dispatch(onGetUser(response.data));
            })
    }
}
export const onGetUser = (userList) => {
    return {
        type: types.ON_GET_USER,
        userList
    }
}

export const onGetCarouselSongRequest = () => {
    return dispatch => {
        return callApi('carousel-song', 'GET', null)
            .then((response) => {
                dispatch(onGetCarouselSong(response.data));
            })
    }
}
export const onGetCarouselSong = (songs) => {
    return {
        type: types.ON_GET_CAROUSEL_SONG,
        songs
    }
}

export const onGetSongPlayerRequest = () => {
    return dispatch => {
        return callApi('song', 'GET', null)
            .then((response) => {
                dispatch(onGetSongPlayer(response.data));
            })
    }
}
export const onGetSongPlayer = (song) => {
    return {
        type: types.ON_GET_SONG_PLAYER,
        song
    }
}

export const onGetSongRequest = (id) => {
    return dispatch => {
        return callApi(`new-songs/${id}`, 'GET', null)
            .then((response) => {
                dispatch(onGetSong(response.data));
            })
    }
}
export const onGetSong = (song) => {
    return {
        type: types.ON_GET_SONG,
        song
    }
}

export const onGetSongMVRequest = () => {
    return dispatch => {
        return callApi('mv', 'GET', null)
            .then((response) => {
                dispatch(onGetSongMV(response.data));
            })
    }
}

export const onGetSongMV = (mvSongs) => {
    return {
        type: types.ON_GET_SONG_MV,
        mvSongs
    }
}

export const onGetNewSongsRequest = () => {
    return dispatch => {
        return callApi('new-songs', 'GET', null)
            .then((response) => {
                dispatch(onGetNewSongs(response.data));
            })
    }
}

export const onGetNewSongs = (newSongs) => {
    return {
        type: types.ON_GET_NEW_SONG,
        newSongs
    }
}

export const onGetMvPlayerRequest = (id) => {
    return dispatch => {
        return callApi(`mv/${id}`, 'GET', null)
            .then((response) => {
                dispatch(onGetMvPlayer(response.data));
            })
    }
}

export const onGetMvPlayer = (mvSong) => {
    return {
        type: types.ON_GET_MV_PLAYER,
        mvSong
    }
}

export const onGetVietNamSongsRequest = () => {
    return dispatch => {
        return callApi('vietnam-songs', 'GET', null)
            .then((response) => {
                dispatch(onGetVietNamSongs(response.data));
            })
    }
}

export const onGetVietNamSongs = (vietNamSongs) => {
    return {
        type: types.ON_GET_VIET_NAM_SONG,
        vietNamSongs
    }
}

export const onGetUsUkSongsRequest = () => {
    return dispatch => {
        return callApi('us-uk-songs', 'GET', null)
            .then((response) => {
                dispatch(onGetUsUkSongs(response.data));
            })
    }
}

export const onGetUsUkSongs = (usUkSongs) => {
    return {
        type: types.ON_GET_US_UK_SONG,
        usUkSongs
    }
}

export const onGetKPopSongsRequest = () => {
    return dispatch => {
        return callApi('k-pop-songs', 'GET', null)
            .then((response) => {
                dispatch(onGetKPopSongs(response.data));
            })
    }
}

export const onGetKPopSongs = (kPopSongs) => {
    return {
        type: types.ON_GET_K_POP_SONG,
        kPopSongs
    }
}

export const onGetSingersRequest = () => {
    return dispatch => {
        return callApi('singers', 'GET', null)
            .then((response) => {
                dispatch(onGetSingers(response.data));
            })
    }
}

export const onGetSingers = (singers) => {
    return {
        type: types.ON_GET_SINGERS,
        singers
    }
}

export const onGetSingerRequest = (id) => {
    return dispatch => {
        return callApi(`singers/${id}`, 'GET', null)
            .then((response) => {
                dispatch(onGetSinger(response.data));
            })
    }
}

export const onGetSinger = (singer) => {
    return {
        type: types.ON_GET_SINGER,
        singer
    }
}




