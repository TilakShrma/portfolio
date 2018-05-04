import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
const Landing = ()  => {
	return(
		<div>
			<Grid className="landing-grid">
				<Row>
					<Col md={12} lg={12}>
						<img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
						alt="avatar"
						className="avatar-img" />
						<div className="banner">
							<h1>Full Stack Web Developer</h1>
							<p>
								HTML/CSS | Bootstrap | ES6 | Java | React | Node | Express | MongoDB | PostgreSQL
							</p>
							<div className="social-links">

								<a href="https://www.linkedin.com/in/tilak-sharma-085805129/" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" area-hidden="true" />
								</a>

								<a href="https://github.com/TilakShrma" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" area-hidden="true" />
								</a>

								<a href="https://twitter.com/sharmaTilak97" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-twitter-square" area-hidden="true" />
								</a>
								<a href="https://www.instagram.com/tilaksharma97/" rel="noopener noreferrer" target="_blank">
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