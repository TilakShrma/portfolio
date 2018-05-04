import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import Particles from 'react-particles-js';

const Aboutme = ()  => {
	return(
		<div>
			<Grid className="about-grid">
				<Row>
					<Col md={12} className="text">
						<p>
							Hello, I am Tilak Sharma, a 4th year computer science student. I love to code and play outdoor sports. 
							My short term goal is to learn new technologies which can help me gettting a job offer as 
							a Software Developer | Javascript Developer | Full Stack Developer  and my long term 
							goal is to set up a learning ground where i can share my knowledge and experience with other people. I believe in learning efficiently and effectively i.e not wasting time 
							in technologies that are outdated (but i do respect these! :)) and focusing more on technologies that can proove me to be a step ahead of others. 
							<br/>
							As a web developer, I love to turn imaginations into reality. Giving a brief about my skills, i have enough knowledge
							of HTML5 ,CSS3 and ES6. Also, i have worked with frameworks like Bootstrap4, ReactJS, Express. Coming to Backend i have worked with Java, NodeJS with 
							databases like MongoDB and PostgreSQL. You can find all my projetcs <a href="https://www.google.com/"  rel="noopener noreferrer" target="_blank">here</a>.
						</p>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}

export default Aboutme;