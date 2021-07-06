import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from '../store/user/userActions';

const useGetCats = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);


    useEffect(() => {
        dispatch(userActions.getCats(user.user.uid))
    }, [dispatch, user.user.uid])


    return user.cats
}



export default useGetCats;