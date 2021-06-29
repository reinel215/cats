import firebaseDB from '../../config/Firebase/firebase.config';



export const registerUser = async ({ email, password }) =>{
    const response = await firebaseDB.auth().createUserWithEmailAndPassword(email, password);
    return response.user;
}




export const signinUser = async ({email, password}) => {

    const response = await firebaseDB.auth().signInWithEmailAndPassword(email, password);
    return response.user;

}