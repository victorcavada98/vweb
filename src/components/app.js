import React, { Component } from 'react';
import Grid from './grid'
import Grid_Expand from './grid_expand'
import Slider from './slider'


export default class App extends Component {
  render() {
    return (
      <div>
     	 <div id='ban'>

      	 </div>

      	 <Slider />


	    <div className="overwrite">
	      	<Grid_Expand />
      	</div>
      </div>
    );
  }
}
