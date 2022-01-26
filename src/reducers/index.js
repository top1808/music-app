import { combineReducers } from "redux"
import carouselSongs from './carouselSongs'
import userList from './userList'
import songPlayer from './songPlayer'
import mvSongs from './mvSongs'
import mvPlayer from './mvPlayer'
import newSongs from "./newSongs"
import vietNamSongs from './vietNamSongs'
import usUkSongs from "./usUkSongs"
import kPopSongs from "./kPopSongs"
import singers from './singers'
import singer from './singer'

const myReducers = combineReducers({
    carouselSongs,
    userList,
    songPlayer,
    mvSongs,
    mvPlayer,
    newSongs,
    vietNamSongs,
    usUkSongs,
    kPopSongs,
    singers,
    singer
})

export default myReducers