import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home.Component';
import Skills from '../Pages/Skills/Skills.component';
import Portfolio from '../Pages/Portfolio/Portfolio.Component';
import Contact from '../Pages/Contact/Contact.Component';

function AppRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />

                <Route path='/Skills' component={Skills} />

                <Route path='/Portfolio' component={Portfolio} />

                <Route path='/Contact' component={Contact} />
            </Switch>
        </div>
    )
}

export default AppRouter;