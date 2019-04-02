import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import ProfilePicture from './profile_pic.jpeg';

const Landing = ()  => {
	return(
		<div>
			<Grid className="landing-grid">
				<Row>
					<Col md={12} lg={12}>
						<img src={ProfilePicture}
						alt="avatar"
						className="avatar-img" />
						<div className="banner">
							<h1>Software Engineer</h1>
							<p>
								HTML/CSS | Bootstrap | ES6 | Java | React | Angular | Node | Express | PostgreSQL
							</p>
							<div className="social-links">

								<a href="https://www.linkedin.com/in/tilak-sharma-085805129/" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" area-hidden="true" />
								</a>

								<a href="https://github.com/TilakShrma" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" area-hidden="true" />
								</a>

								<a href="https://www.instagram.com/__tilaksharma/" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-instagram" area-hidden="true" />
								</a>
							</div>
						</div>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}

export default Landing;