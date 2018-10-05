import React, { Component } from 'react';
import './../assets/style.css';
import firebase from "firebase";
import {DB_CONFIG} from './../Config';
import _ from 'lodash';
import Particles from 'react-particles-js';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.app = firebase.initializeApp(DB_CONFIG);
        this.database = this.app.database().ref();
        this.state = {
            music: '',
            seconds: 0
        };
        this.checkOver = this.checkOver.bind(this);
    }
    componentWillMount(){
        this.database.on('value', snapshot => {
            var snapMusic = _.values(snapshot.val())
            this.setState({
                music: snapMusic,
                isPlaying: snapMusic[0].urlSong,
                sizeParticles: 5,
                speedParticles: 5
            });
            console.log(this.state.music);
            console.log(this.state.isPlaying);
        });
    }  

    handleClick(param,songName,artistName, index, e) {
        console.log(param);
        console.log(index);
        this.setState({ isPlaying: param, actualSong: songName, actualArtist: artistName, actualIndex: index }, function () {
            this.refs.audio.pause();
            this.refs.audio.load();
            this.refs.audio.play();  
        });
        console.log("Audio play: " + this.refs.audio.duration);
      
    } 

    nextTrack(param, e){
        console.log("Next param for search" + param);
        console.log(this.state.music[param]);
        this.handleClick(this.state.music[param].urlSong, this.state.music[param].song, this.state.music[param].artist, param );
        if(param > this.state.music.length-1){
            param=0;
            this.nextTrack(param);
        }
    }
    
    MusicTable = () => {
        let table = [];
        for(let i=0;i<this.state.music.length;i++){
            table.push(
                <li key={this.state.music[i].urlSong.toString()} refs={this.state.music[i].urlSong.toString()} onClick={this.handleClick.bind(this, this.state.music[i].urlSong.toString(), this.state.music[i].song, this.state.music[i].artist, i)}>
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
    
    checkOver(){
        this.nextTrack(((this.state.actualIndex == this.state.music.length - 1) ? this.state.actualIndex = 0 : this.state.actualIndex + 1));
    }
    render() {
        
        return (
            
            <div>
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 5,
                                density: {
                                    enable: true,
                                    value_area: 400
                                }
                            },
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#3CA9D1",
                                    blur: 5
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: this.state.speedParticles,
                                direction: "none",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            },
                            size: {
                                value: this.state.sizeParticles,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: this.state.speedParticles,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 100,
                                    line_linked: {
                                        opacity: 1
                                    }
                                },
                                bubble: {
                                    distance: 100,
                                    size: 40,
                                    duration: 2,
                                    opacity: 8,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 6
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                        retina_detect: true
                    }}
                    style={{
                        width: '',
                        height: '100%',
                        background: 'black'
                    }}
                />
               
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
                    <div className="tracks-holder" id="tracks-holder">
                         {this.MusicTable()}
                    </div>

                </div>
                <div className="miniFancyNav">
                    <div className="playMiniBtn playBtn" id="playMiniBtn">
                        <i className="fas fa-play-circle"></i>
                    </div>
                    <div className="pausedMiniBtn" id="pausedMiniBtn">
                        <i className="fas fa-pause-circle"></i>
                    </div>
                    <div className="nextMiniBtn" id="nextMiniBtn">
                        <i className="fas fa-chevron-circle-right" onClick={this.nextTrack.bind(this, ((this.state.actualIndex == this.state.music.length - 1) ? this.state.actualIndex = 0 : this.state.actualIndex + 1))}></i>
                    </div>
                    <div className="mutedMiniBtn" id="mutedMiniBtn">
                        <i className="fas fa-volume-off"></i>
                    </div>
                </div>
                <audio onEnded={() => this.nextTrack.bind(this, ((this.state.actualIndex == this.state.music.length - 1) ? this.state.actualIndex = 0 : this.state.actualIndex + 1))} ref="audio" id="techMusic" src={this.state.isPlaying} controls>
                    Your browser does not support the audio element.
                </audio>
                <div className="circleFull"></div>
                <div className="circleBorder"></div>
                <div className="logo-brand-max">
                    TECHOBS
                    
                </div>
                <div className="songInfoMini">
                    <div className="trackName">
                        {this.state.actualSong}
                    </div>
                    <div className="artistName">
                        - {this.state.actualArtist}
                    </div>
                </div>
                {/* <input id="seekslider" type="range" min="0" max="100" value="0" step="1"></input> */}
                
                <div className="maxPlayer">

                    <div className="audio-player">
                        <div className="content">
                            <div className="actions">
                                <div className="playMaxBtn" id="playMaxBtn">
                                    <i className="fas fa-play-circle"></i>
                                </div>
                                <div className="pausedMaxBtn" id="pausedMaxBtn">
                                    <i className="fas fa-pause-circle"></i>
                                </div>
                                <div className="nextMaxBtn" id="nextMaxBtn" onClick={this.nextTrack.bind(this, ((this.state.actualIndex == this.state.music.length-1) ? this.state.actualIndex = 0: this.state.actualIndex+1))}>
                                    <i className="fas fa-chevron-circle-right"></i>
                                    
                                </div>
                                <div className="mutedMaxBtn" id="mutedMaxBtn">
                                    <i className="fas fa-volume-off"></i>
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
