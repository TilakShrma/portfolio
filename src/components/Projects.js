import React from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import Brain from './brain.png'

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
								<Button bsStyle="info" href="https://github.com/TilakShrma/gradient-generator">View on Github</Button>
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

					<Col>
						<div className="card">
							<img src={Brain} alt="avatar" width="250px"/>
							<div className="card-footer" style={{marginBottom: '0px'}}>
								<h3>Smartbrain App</h3>
								<p>A Face recognition app built using ReacJS and NodeJs.</p>
								<Button bsStyle="info" className="git" href="https://github.com/TilakShrma/smartBrain">View on Github</Button>
							</div>
						</div>
					</Col>

				</Row>
			</Grid>
		</div>
	);
}

export default Projects;