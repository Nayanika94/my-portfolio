import React from "react";
import './Video.css';

const Video = ({ video }) => {
    return (
        <div className="video-responsive">
            <iframe width="315"
                height="315"
                src={video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; 
                    autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    );
};

export default Video;