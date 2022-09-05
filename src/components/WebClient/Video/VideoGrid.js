import React from "react";
import ReactPlayer from 'react-player';
import "./VideoGrid.css";

const VideoGrid = (props) => {
    return (<div className="video-grid-class">
        <div className={"slot"}>
            <ReactPlayer url='https://www.youtube.com/watch?v=NOk5RDR7v9E' playing={true} muted={true} controls={false} />
        </div>
        <div className={"slot"}>
            <ReactPlayer url='https://www.youtube.com/watch?v=1-iS7LArMPA' playing={true} muted={true} controls={false}/>
        </div>
        <div className={"slot"}>
            <ReactPlayer url='https://www.youtube.com/watch?v=vvOjJoSEFM0' playing={true} muted={true} controls={false}/>
        </div>
        <div className={"slot"}>
            <ReactPlayer url='https://www.youtube.com/watch?v=b8Z0CuNwai8' playing={true} muted={true} controls={false}/>
        </div>
    </div>);
};
export default VideoGrid;
