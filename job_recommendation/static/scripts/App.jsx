// App.jsx
import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./Home.jsx";
import ListView from "./ListView.jsx"


const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/jobs' component={ListView}/>
		</Switch>
	</main>
)

export default class App extends React.Component {
    render()
	{
		return (<Main />)
    }

}
