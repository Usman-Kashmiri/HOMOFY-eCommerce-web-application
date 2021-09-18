import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Admin from '../containers/Admin';
import Home from '../containers/Home';
import SignInUp from '../containers/SignInUp';
import Dashboard from '../containers/Dashboard';
import Cart from '../containers/Cart';
import UserPanel from '../containers/UserPanel';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path= '/' component = {Home}></Route>
                <Route exact path= '/signinup' component = {SignInUp}></Route>
                <Route exact path="/signin" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/userPanel" component={UserPanel} />
                {/* <Route exact path="/deleteProduct" component={DeleteProduct} /> */}
                {/* <Route exact path="/user/:id" component={Home} /> */}
            </Switch>
        </Router>
        // <Router>
        //     <Switch>
        //         <Route exact path="/" component={Login} />
        //         <Route exact path="/signup" component={Signup} />
        //         <Route exact path="/user/:id" component={Home} />
        //     </Switch>
        // </Router>
    )
}

export default AppRouter;