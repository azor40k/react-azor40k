import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from '../Components/Home';
import Mode from '../Components/Mode';
import Game from '../Components/Game';
import NotFound from '../Components/NotFound';


const Routing = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/app" component={Mode}/>
            <Route exact path="/app/quizz" component={Game}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </Router>
);

export default Routing;