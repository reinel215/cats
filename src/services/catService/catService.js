import API from '../../config/API/API';
import FIREBASE_API from '../../config/API/FIREBASE_API';



export const getCat = async () => {

    const response = await API.get("/cat?json=true");
    return response.data;

}




export const saveCat = async (cat_url) => {

    let cat = {
        url : cat_url
    }
    console.log(cat_url);
    const response = await FIREBASE_API.post("cat.json", cat );
    console.log(response);
    return response.data;

}