import React from "react";
import './Video.css';

const Video = ({ video }) => {
    return (
        <div className="video-responsive">
            <iframe width="200"
                height="200"
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