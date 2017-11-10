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

				</ul>

				{Grid_Expand}
			</div>


		);


}

export default Grid;
