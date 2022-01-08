import React from 'react'
import {NavLink} from 'react-router-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
const Router = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/market">About</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    )
}

export default Router
