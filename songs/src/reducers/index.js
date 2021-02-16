// import { selectSong } from "../actions";
import { combineReducers } from 'redux';

const songsReducer =()=>{

    return [
        {title:'No Scrubs' ,duration:'4:05'},
        {title:'Marcarena' ,duration:'2:35'},
        {title:'Little things' ,duration:'3:15'},
        {title:'Memories' ,duration:'3:33'}
    ]
};

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type == 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});