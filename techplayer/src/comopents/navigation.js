import React, { Component } from 'react';
import './../assets/style.css';
import firebase from "firebase";
import {DB_CONFIG} from './../Config';
import _ from 'lodash';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.app = firebase.initializeApp(DB_CONFIG);
        this.database = this.app.database().ref();
        this.state = {
            music: ''
        };
    }
    componentDidMount(){
        this.database.on('value', snapshot => {
            var snapMusic = _.values(snapshot.val())
            this.setState({
                music: snapMusic,
                isPlaying: snapMusic[0].urlSong
            });
            console.log(this.state.music);
            console.log(this.state.isPlaying);

        });
    }
    handleClick(param,songName,artistName, e) {
        console.log(param);
        this.setState({ isPlaying: param, actualSong: songName, actualArtist: artistName }, function () {
            this.refs.audio.pause();
            this.refs.audio.load();
            this.refs.audio.play();
        });
    }
    MusicTable = () => {
        let table = [];
        for(let i=0;i<this.state.music.length;i++){
            table.push(
                <li key={this.state.music[i].urlSong.toString()} onClick={this.handleClick.bind(this, this.state.music[i].urlSong.toString(), this.state.music[i].song, this.state.music[i].artist)}>
                    <div className="playBtn">
                        <i className="fas fa-play-circle"></i>
                    </div>
                    <div className="trackName">
                        {this.state.music[i].song}
                    </div>
                    <div className="artistName">
                        - {this.state.music[i].artist}
                    </div>
                </li>
            )
        }
        return table;
    }
   
    start(){
        this._audio.play()
    }
    render() {
        return (
            <div>
                <div className="fancyNav" id="fancyNav">
                    <div className="toggleButton">
                        <div id="box">
                            <ul className="open">
                                <li className="linesBtn"></li>
                                <li className="linesBtn"></li>
                                <li className="linesBtn"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="logo-brand">
                        TECHOBS
                </div>
                    <div className="tracks-holder">
                         {this.MusicTable()}
                    </div>

                </div>
                <div className="miniFancyNav">
                    <div className="playMiniBtn playBtn">
                        <i className="fas fa-play-circle"></i>
                    </div>
                    <div className="pausedMiniBtn">
                        <i class="fas fa-pause-circle"></i>
                    </div>
                    <div className="nextMiniBtn">
                        <i class="fas fa-chevron-circle-right"></i>
                    </div>
                </div>
                <audio ref="audio" id="techMusic" src={this.state.isPlaying} controls>
                    Your browser does not support the audio element.
                </audio>
                <div className="maxPlayer">

                    <div className="audio-player">
                        <div className="content">
                            <div className="actions">
                                <div className="playMaxBtn" id="playMaxBtn">
                                    <i className="fas fa-play-circle"></i>
                                </div>
                                <div className="pausedMaxBtn" id="pausedMaxBtn">
                                    <i class="fas fa-pause-circle"></i>
                                </div>
                                <div className="nextMaxBtn" id="nextMaxBtn">
                                    <i class="fas fa-chevron-circle-right"></i>
                                </div>
                                <div className="mutedMaxBtn" id="mutedMaxBtn">
                                    <i class="fas fa-volume-off"></i>
                                </div>
                            </div>
                            <div className="songInfo">
                                <div className="trackName">
                                    {this.state.actualSong}
                            </div>
                                <div className="artistName">
                                    - {this.state.actualArtist}
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Navigation;
