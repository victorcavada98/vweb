import React, { Component } from 'react';
import Nav_Slider from './slider-nav';

import Video from './video'
import Projects from './projects'
import About from './about.js'
import Work from './work.js'

const Slider = () => {


		return(
			<div>


				<div className="cd-hero">
					<ul className="cd-hero-slider">

						//video.js
						<Video />

						//projects.js
						<Projects />

						//about.js
						<About />

						//work.js
						<Work />

						<li>
								<div className="cd-full-width">

									<h2>Slide title here</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, explicabo.</p>
									<a href="#0" className="cd-btn">Start</a>
									<a href="#0" className="cd-btn secondary">Learn More</a>
								</div>
						</li>
					</ul>

						<Nav_Slider />
					</div>
			</div>
				);


}

export default Slider;
