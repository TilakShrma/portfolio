import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './Landing';
import Aboutme from './AboutMe';
import Resume from './Resume';
import Projects from './Projects';

const Main = () => (
	<Switch>
		 {/*<Route exact path="/" component={LandingPage} />*/}
		<Route exact path="/portfolio" component={LandingPage}/>
		<Route path="/aboutme" component={Aboutme} />
		<Route path ="/resume" component={Resume} />
		<Route path="/projects" component={Projects} />
	</Switch>
)

export default Main;
