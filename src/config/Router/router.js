import React from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import { Home, About, Login } from '../Containers';

function PublicRoute({ component: Component, authed, ...rest }) {
return (
<Route
{...rest}
render={(props) => authed === false
? <Component {...props} />
: <Redirect to='/home' />}
/>
)
}

function PrivateRoute({ component: Component, authed, ...rest }) {
return (
<Route
{...rest}
render={(props) => authed === true
? <Component {...props} />
: <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
/>
)
}



class BasicRouter extends React.Component {

componentDidMount(){
firebase.auth().onAuthStateChanged(function(user) {
if (user) {

} else {

}
});
}
render() {
return (
<Router>
<PublicRoute authed={true} exact path="/" component={Login} />
<PrivateRoute authed={true} path="/home" component={Home} />
</Router>
)
}
}

export default BasicRouter