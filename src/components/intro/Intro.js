import React from 'react';
import './Intro.css';
import Me from "../../img/image.png";


const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>Nayanika Saha</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Software Developer</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                        I am a passionate software developer who focuses on writing clean and efficient code. I am dedicated to developing solutions that leverage best practices, and deliver a top-notch user experience.As a recent post-graduate of Information Technology Solutions,I am looking for an entry-level Software Developer role with a value driven company.
                        <br />
                        Outside of work, I enjoy hiking, painting, exploring, and finding new books or TV series.
                    </p>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={Me} alt='' className='i-img'></img>
            </div>
        </div>
    )
}

export default Intro;