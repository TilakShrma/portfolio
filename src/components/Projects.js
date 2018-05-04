import React from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';

const Projects = ()  => {
	return(
		<div>
			<Grid className="project-grid">
				<Row className="project-row">
					<Col>
						<div className="card">
							<img src="https://bennettfeely.com/gradients/img/gradient.jpg" alt="avatar" width="250px" height="250px" />
							<div className="card-footer">
								<h3>Background Generator</h3>
								<p>CSS gradient background generator.</p>
								<Button bsStyle="info" href="https://github.com/TilakShrma/robo-friends">View on Github</Button>
							</div>
						</div>
					</Col>

					<Col>
						<div className="card">
							<img src="https://robohash.org/T8" alt="avatar" width="250px" style={{backgroundColor : 'black'}}/>
							<div className="card-footer" style={{marginBottom: '0px'}}>
								<h3>RoboFriends App</h3>
								<p>Interactive web app created using reactJS.</p>
								<Button bsStyle="info" className="git" href="https://github.com/TilakShrma/robo-friends">View on Github</Button>
							</div>
						</div>
					</Col>

					{/*<Col>
						<div className="card">
							<img src="https://www.shareicon.net/download/2016/07/05/791214_man_512x512.png	" alt="avatar" width="250px" />
							<div className="card-footer">
								<h3>Background Generator</h3>
								<p>A simple web app made using HTML5 and CSS3 to generate gradient background.</p>
								<Button bsStyle="info">View on Github</Button>
							</div>
						</div>
					</Col>*/}

				</Row>
			</Grid>
		</div>
	);
}

export default Projects;