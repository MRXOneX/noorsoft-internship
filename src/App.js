import './App.css';
import Login from "./components/Authorization/Login/Login";
import firebase from 'firebase'
import {setUserRequest} from "./components/redux/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(setUserRequest({
                    id: user.uid,
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL
                }))
            } else {
                dispatch(setUserRequest(null))
            }
        });
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
