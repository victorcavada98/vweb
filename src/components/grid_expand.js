import React, { Component } from 'react';
import Grid from './grid'


const Grid_Expand = () => {

		return(	

				<div>
					
				
					<div id="content1" className="item gridder-content"> 
						Content goes here1... 
					</div>
					<div id="content2" className="item gridder-content">
					 	Content goes here2... 
					 </div>
					<div id="content3" className="item gridder-content">
						 Content goes here3... 
					</div>
					<div id="content4" className="item gridder-content"> 
						Content goes here4... 
					</div>
					<div id="content5" className="item gridder-content"> 
						Content goes here5... 
					</div>
					<div id="content6" className="item gridder-content"> 	
						Content goes here6... 
					</div>
					<div id="content7" className="item gridder-content"> 	
						Content goes here7... 
					</div>
					<div id="content8" className="item gridder-content"> 
						Content goes here8... 
					</div>
					<div id="content9" className="gridder-content"> 
						<div class="padding">
						    <div className=" expand col-lg-8">
					    	
								<div className="col-md-4"><img src="https://s-media-cache-ak0.pinimg.com/originals/d0/4c/5d/d04c5d7161537e6bf4791f67820f3bef.jpg"/></div>
								<div className="col-md-4"><img src="https://s-media-cache-ak0.pinimg.com/originals/d0/4c/5d/d04c5d7161537e6bf4791f67820f3bef.jpg"/></div>	
								<div ClassName="row">
								<div className="col-md-8 baja">
									<img  src="https://i.kinja-img.com/gawker-media/image/upload/s--gX-gv1lO--/c_scale,f_auto,fl_progressive,q_80,w_800/18ncdal20bt2qjpg.jpg"/>
								</div>
								</div>		        
							</div>
							<div className=" expand content col-lg-4">

							    <h1 className="title">Trancasa</h1>
								<h2>Lider en transporte</h2>

							    <p className="description">
							    	Estabelcida en 1991 se a caracterizado desde sus inicios por la inovacion en el servicio
							    	de la transportacion en la region contando con la ultima tecnologia en un mercado competitivo y en constante cambio.
							    </p>
							</div>
							</div>
						</div>
					</div>
		)
	
}

export default Grid_Expand;