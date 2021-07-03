import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import firebaseApp from "../config/Firebase/firebase.config";
import * as userActions from '../store/user/userActions';

const useSearchUser = () => {
    const [searchingUser, setSearchingUser] = useState(true);

    const dispatch = useDispatch();
  
    useEffect(() => {
  
      firebaseApp.auth().onAuthStateChanged((user) => {
        dispatch(userActions.setUser(user))
        setSearchingUser(false)
      })
  
    }, [dispatch]);

    return searchingUser;

}


export default useSearchUser;