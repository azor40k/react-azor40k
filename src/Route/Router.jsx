import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Card from '../components/Card';
import HeaderEffect from '../components/HeaderEffect';

const Routing = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/app" component={Mode} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
);

export default Routing;