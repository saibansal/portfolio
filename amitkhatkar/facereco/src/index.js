import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import Login from './pages/login';
import Dashboard from './pages/dashboard';
 
const Links = () =>{
    return(
        <ul>
            <li><Link to="/"> Login </Link></li>
            <li><Link to="/Dashboard"> Dashbaord</Link></li>
        </ul>
    )
}

const App = () => {
    return (
        <section>   
             <Router>
             {/* <Links /> */}
                 <Route exact path='/' component={Login} />
                 <Route exact path='/Dashboard' component={Dashboard} />
             </Router>
            
        </section>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

