import {useDispatch, useSelector} from "react-redux";

import {Route, Switch} from "react-router-dom";

import {useEffect} from "react";

import Registration from "./components/Authorization/Registration/Registation";

import Login from "./components/Authorization/Login/Login";

import {authActions} from "./redux/actions/authActions";

import './App.css';


function App() {
    useEffect(() => {
        dispatch(authActions.setUserRequest())
    },[])
    const dispatch = useDispatch()
    const {user} = useSelector(({auth}) => auth)
    return (
        <Switch>
            <Route path='/login' render={() => <Login user={user}/>}/>
            <Route path='/registration' render={() => <Registration user={user}/>}/>
            <Route exact path='/' render={() => 'вы авторизованы'}/>
        </Switch>
    );
}

export default App;
