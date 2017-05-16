import React, { Component } from 'react';

  const Video = () => {


		return(

      <li className="selected cd-bg-video">

        <div className="cd-full-width">

            <div className="cd-bg-video-wrapper autoplayer" data-video="./assets/video/video">
                <iframe src="" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>

            <div className="cd-full-width"><h2 className="fcolor">V i c t o r C a v a d a <span id="js-rotating" className="morphext">Full Stack</span></h2></div>

        </div>

      </li>
    )
}

export default Video;
