import './App.css';
import Login from "./components/Authorization/Login/Login";
import {authActions} from "./components/redux/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authActions.setUserRequest())
    },[])
    const {user} = useSelector(({auth}) => auth)
    return (
        <>
            {user ?
                'Вы авторизованы'
                : <Login/>
            }
        </>
    );
}

export default App;
