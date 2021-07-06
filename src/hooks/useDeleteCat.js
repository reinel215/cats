import { useSelector, useDispatch } from "react-redux";
import * as catActions from '../store/cat/catActions';

const useDeleteCat = () => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const deleteCat = (catUid) => {
        dispatch(catActions.removeCatFromUser(catUid, user.user.uid));
    }


    return deleteCat

}



export default useDeleteCat;