import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';


const Aboutme = ()  => {
	return(
		<div>
			<Grid className="about-grid">
				<Row>
					<Col md={12} className="text">
						<p>
							Hello, I am Tilak Sharma, currently working as Software Developer at aricent. I love to code, learn new technologies and develope technical skills and other than that i love to play outdoor sports like cricket, badminton. I believe in turning dreams into reality through continous efforts and hardwork. I am looking for new opportunities in the form on Full stack developer or Software Development Engineer in a reputed organization.
							<br/>
							Giving a brief about my skills, i have enough knowledge
							of HTML5 ,CSS3 and ES6. Also, i have worked with frameworks like Bootstrap4, ReactJS, Express. Coming to Backend i have worked with Java, NodeJS with PostgreSQL as database. You can find all my projetcs <a href="https://www.google.com/"  rel="noopener noreferrer" target="_blank">here</a>.
						</p>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}

export default Aboutme;