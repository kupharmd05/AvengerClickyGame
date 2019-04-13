import React from "react";
import "./Header.css";

const style = {
    textStyle: {
        color: "red",
        margin: 20
    }
}

function Header(props) { 
    return(
    <div className="jumbotron">
        <div className="row">
            <div className="col-md-4">
                <div className="title">One Click per Image</div>
            </div>
            <div className="col-md-4">
                Avengers Click Game
        </div>
            <div className="col-md-4">
                <div className="score">
                    <span>Score: {props.score} </span><span style={style.textStyle}>Highscore: {props.topScore}</span>
                </div>

            </div>
        </div>
    </div>
)};

export default Header