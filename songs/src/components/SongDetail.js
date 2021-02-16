import React from 'react';
import { connect }from 'react-redux';

const SongDetail = ({mySelectedSong}) =>{
    // console.log(props);
    if( !mySelectedSong ){
        return <div>Select a Song</div>
    }
    return(
         <div> 
             <h3>
                 Details For:
            </h3>
            <p>
                Title:{mySelectedSong.title}
                <br/>
                Duration:{mySelectedSong.duration}
            </p>
        </div>
    )
};

const mapStateToProps = state =>{
    return {mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);