import React from 'react';
import {Grid,Row,Col,Table,Button} from 'react-bootstrap';
import {ProfilePicture} from './profile_pic.jpeg';
import {ResumeFile} from './resume-tilaksharma.docx';

const Resume = () => {
	return(
		<Grid className="resume-grid">
			<Row className="resume-row">
				<Col md={3}>	
					<div className="resume-sidebar">
						<img src={ProfilePicture} style={{width:'190px'}} alt="profile"/>
						<h1>Tilak sharma</h1>
						<h3>Software Engineer</h3>
						<i className="fa fa-phone-square fa-2x" area-hidden="true"/>
						<br/>
						<p className="social">+91-9560729936</p>
						<br/>
						<i className="fa fa-envelope fa-2x" area-hidden="true"/>
						<br/>
						<p className="social">tilak.sharma.mail@gmail.com</p>
						<br />
						<Button href={ResumeFile} download bsStyle="danger" style={{color : 'white', borderRadius : '50px', width : '75%'}}>Download Resume</Button>
					</div>
				</Col>
				<Col md={9}>
					<div>
						<h1 className="resume-heading">Education</h1>
						<div className="resume-row">
							<h2>2014-18</h2>
							<div>
								<h2>Bharati Vidyapeeth's College Of Engineering</h2>
								<h4>B.Tech Computer Science and Engineering</h4>
								<p>Percentage : 71%</p>
							</div>
						</div>
						<div className="resume-row">
							<h2>2013-14</h2>
							<div>
								<h2>Arwachin Bharati Bhawan Sr. Sec. School</h2>
								<h4>Class 12th</h4>
								<p>Percentage : 86%</p>
							</div>
						</div>
						<div className="resume-row">
							<h2>2011-12</h2>
							<div>
								<h2>Victor Public School</h2>
								<h4>Class 10th</h4>
								<p>CGPA : 8.6</p>
							</div>
						</div>
						<hr style={{borderBottom : '1px solid red'}}/>
						<h1 className="resume-heading">Skills</h1>
						<Table style={{marginTop: '20px'}} striped>
							<tbody>
								<tr>
									<th>Client side technologies</th>
									<td>Html5, CSS3, JQuery, ES6,  JSON, AJAX, Bootstrap </td>
								</tr>
								<tr>
									<th>Frameworks</th>
									<td>NodeJS, ReactJS, ExpressJS</td>
								</tr>
								<tr>
									<th>Server Side technologies</th>
									<td>Servlet, JSP, EL, JSTL, Custom Tags, EJB 3.x</td>
								</tr>
								<tr>
									<th>MVC Frameworks</th>
									<td>Struts 2.x</td>
								</tr>
								<tr>
									<th>Logging Frameworks</th>
									<td>Log4j</td>
								</tr>
								<tr>
									<th>Design patterns</th>
									<td>Singleton, DTO, DAO, Adapter, Factory Pattern, MVC, Intercepting Filter, Front Controller. </td>
								</tr>
								<tr>
									<th>Desktop Applications</th>
									<td>Swing, AWT</td>
								</tr>
								<tr>
									<th>Databases</th>
									<td>MongoDB, PostgreSQL</td>
								</tr>
							</tbody>
						</Table>
						<hr style={{borderBottom : '1px solid red'}}/>
						<h1 className="resume-heading">Courses and Certifications</h1>
						<ul className="skills-link">
							<li><a href="https://www.coursera.org/account/accomplishments/certificate/KGFG3L5MEHQ8" rel="noopener noreferrer" target="_blank">
							Programming Foundations with JavaScript, HTML and CSS by Duke University on Coursera.</a></li>
							<li>The Complete Web Developer in 2018: Zero to Mastery</li>
						</ul>
						<hr style={{borderBottom : '1px solid red'}}/>
						<h1 className="resume-heading">Additional Experiences</h1>
						<ul style={{marginTop: '20px'}}>
							<li>Participated in workshop on Parallel Computing using CUDA</li>
							<li>Participated in workshop Python by Computers Society of India.</li>
							<li>Event manager executive at BVCOE NSS.</li>
							<li>Head Event manager at BVCOE Alumni Meet.</li>
						</ul>
					</div>
				</Col>
			</Row>
		</Grid>
	);
}

export default Resume;

