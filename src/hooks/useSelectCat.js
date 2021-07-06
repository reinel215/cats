import { useState } from "react";

const useSelectCat = () => {


    const [expand, setExpand] = useState(false);
    const [currentCatURL, setCurrentCatURL] = useState(null);

    const showCat = (catUrl) => {

        setExpand(true);
        setCurrentCatURL(catUrl);

    }

    const hiddeCat = () => {
        setExpand(false)
    }


    return {
        expand,
        currentCatURL,
        showCat,
        hiddeCat
    }

}




export default useSelectCat;