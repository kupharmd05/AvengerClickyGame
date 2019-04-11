import React from "react";
import "./Header.css"

const Header = props => (
    <div className="header">
        <div className="title">One Click per Image</div>

    
        
        <div className="scores">
            Score: {props.score} Highscore: {props.topScore}
        </div>
    </div>
);

export default Header