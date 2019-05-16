import { combineReducers } from "redux";

const songReducer = () => {
    return [
        { title: "Hello", duraton: "1:05" },
        { title: "Minh", duraton: "2:05" },
        { title: "Diep", duraton: "18:04" },
        { title: "MINHMNNN", duraton: "12:75" }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

//combine reducer will combine all reducer together, put all state together
export default combineReducers({
    // this 2 line of code is state of project
    songs: songReducer,
    selectedSong: selectedSongReducer
});


//initial state of APP
state = {
    songs: [
        { title: "Hello", duraton: "1:05" },
        { title: "Minh", duraton: "2:05" },
        { title: "Diep", duraton: "18:04" },
        { title: "MINHMNNN", duraton: "12:75" }
    ],
    selectedSong:null
}
   
