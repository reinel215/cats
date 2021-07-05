import API from '../../config/API/API';
import firebaseDB from '../../config/Firebase/firebase.config';



export const getCat = async () => {

    const response = await API.get("/cat?json=true");
    return response.data;

}




export const saveCat = async (cat_url, uid) => {

    const catsCollection = firebaseDB.firestore().collection("cats")


    const response = await catsCollection.add({
        url: cat_url,
        user: uid
    })

    return response.id
}



export const deleteCat = async (catUid) => {

    const catsCollection = firebaseDB.firestore().collection("cats")

    const deleteResponse = await catsCollection.doc(catUid).delete()

    console.log(deleteResponse)

    return deleteResponse;
}