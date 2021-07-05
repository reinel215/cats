import firebaseDB from '../../config/Firebase/firebase.config';



export const registerUser = async ({ email, password }) =>{
    const response = await firebaseDB.auth().createUserWithEmailAndPassword(email, password);
    return response.user;
}




export const signinUser = async ({email, password}) => {

    const response = await firebaseDB.auth().signInWithEmailAndPassword(email, password);
    return response.user;

}




export const signoutUser = async () => {

    const response = await firebaseDB.auth().signOut();
    return response;

}




export const getUserCats = async (uid) => {

    const catsCollection = firebaseDB.firestore().collection("cats")

    const usercats = await catsCollection.where("user", "==", uid).get();

    const cats = []

    usercats.forEach(doc => {
        let newCat = {
            data : doc.data(),
            id: doc.id
        }
        
        cats.push(newCat);
    
    })

    return cats;

}