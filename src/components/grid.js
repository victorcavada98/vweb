import React, { Component } from 'react';
import Grid_Expand from './grid_expand'

const Grid = () => {
	
	if( Grid_Expand )
		return(

			<div className="grid">		
				<ul className="gridder">
				    <li className="gridder-list" data-griddercontent="#content1">
				        <img src="http://www.powertorque.com.au/wp-content/uploads/2016/09/New-cascadia_-300x200.png" />
				    </li>
				    <li className="gridder-list" data-griddercontent="#content2">
				        <img src="http://www.primemovermag.com.au/images/uploads/primemover/featured/Freightliner-Coronado-3.jpg" />
				    </li>
				    <li className="gridder-list" data-griddercontent="#content3">
				        <img src="http://www.futuretrucking.co.za/wp-content/uploads/2016/10/21ft-Freightliner-Cascade-300x200.jpg" />
				    </li>
				    
				
					<li className="gridder-list" data-griddercontent="#content4">
				        <img src="http://st.motortrend.com/uploads/sites/5/2015/05/Freightliner-Inspiration-truck-251-300x200.jpg" />
				    </li>
				    <li className="gridder-list" data-griddercontent="#content5">
				        <img src="https://www.nada.org/assets/0/21474836471/21474836589/21474836657/21474836855/d70ecc13-32b4-40a1-9924-afa8cc4d56df.jpg" />
				    </li>
				    <li className="gridder-list" data-griddercontent="#content6">
				        <img src="http://www.primemovermag.com.au/images/uploads/primemover/featured/Freightliner-Coronado-3.jpg" />
				    </li>
				
					<li className="gridder-list" data-griddercontent="#content7">
				        <img src="http://images.schoolbusfleet.com/post/M-FreightlinerAutonomousTruck.jpg" />
				    </li>
				    <li className="gridder-list" data-griddercontent="#content8">
				        <img src="https://d2uhsaoc6ysewq.cloudfront.net/683/Sleeper-Trucks-Freightliner-Cascadia-125-7801069-thumb.jpg" />
				    </li>
				    <li className="gridder-list" data-griddercontent="#content9">
				        <img src="https://s-media-cache-ak0.pinimg.com/originals/d0/4c/5d/d04c5d7161537e6bf4791f67820f3bef.jpg" />
				    </li>

				    
				</ul>

				{Grid_Expand}
			</div>

				
		);


}

export default Grid;