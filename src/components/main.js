import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './Landing';
import Aboutme from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/portfolio" component{LandingPage}>
		<Route path="/aboutme" component={Aboutme} />
		<Route path="/projects" component={Projects} />
		<Route path="/contact" component={Contact} />
	</Switch>
)

export default Main;
