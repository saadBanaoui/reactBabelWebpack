import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/About' component={About}/>
                </Switch>
            </main>
        )
    }
}