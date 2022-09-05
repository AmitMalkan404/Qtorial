import React from "react";
import "./VideoModule.css";
import VideoGrid from "./VideoGrid";
import CameraTree from "./CameraTree";

const VideoModule = (props) => {
    return (<div className="video-module">
            <VideoGrid/>
            <CameraTree/>
            <div className="video-controls"/>
        </div>);
};


export default VideoModule;
