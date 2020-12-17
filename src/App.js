import logo from './logo.svg';
import './App.css';
import SignUp from './component/SignUp'
import Dashboard from './component/Dashboard'
import Login from './component/Login'
import PrivateRoute from './component/PrivateRoute'
import ForgetPassword from './component/ForgetPassword'
import Uppdate from './component/Uppdate'

import {Container} from 'reactstrap'
import {AuthProvider} from './context/AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
      
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute  path="/uppdate" component={Uppdate} />
        <Route exact path="/signup" component ={SignUp} />
        <Route exact path="/forgerPassword" component ={ForgetPassword} />
        <Route exact path="/login" component ={Login} />
      </Switch>
    </AuthProvider>
    </Router>
  );
}

export default App;
