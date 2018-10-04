import React, { Component } from 'react';
import './../assets/style.css';

class Navigation extends Component {
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
                        <li>
                            <div className="playBtn">
                                <i className="fas fa-play-circle"></i>
                            </div>
                            <div className="trackName">
                                I Go Out
                        </div>
                            <div className="artistName">
                                - Deborah de Luca
                        </div>
                        </li>
                        <li>
                            <div className="playBtn">
                                <i className="fas fa-play-circle"></i>
                            </div>
                            <div className="trackName">
                                All deepsound
                        </div>
                            <div className="artistName">
                                - Nusha
                        </div>
                        </li>
                    </div>

                </div>
                <div className="miniFancyNav">
                    <div className="playMiniBtn">
                        <i className="fas fa-play-circle"></i>
                    </div>
                    <div className="pausedMiniBtn">
                        <i class="fas fa-pause-circle"></i>
                    </div>
                    <div className="nextMiniBtn">
                        <i class="fas fa-chevron-circle-right"></i>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Navigation;
