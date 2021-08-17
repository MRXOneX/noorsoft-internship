import {useDispatch, useSelector} from "react-redux";

import {useEffect} from "react";


import Login from "./components/Authorization/Login/Login";

import {authActions} from "./redux/actions/authActions";

import './App.css';
import Registration from "./components/Authorization/Registration/Registation";


function App() {
    useEffect(() => {
        dispatch(authActions.setUserRequest())
    },[])
    const dispatch = useDispatch()
    const {user} = useSelector(({auth}) => auth)
    return (
        <>
            {user ?
                'Вы авторизованы'
                : <Registration />
            }
        </>
    );
}

export default App;
