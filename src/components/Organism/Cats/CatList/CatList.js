import React from 'react';
import { Grid,Icon } from 'semantic-ui-react';
import CenterContent from '../../../Atoms/Layout/CenterContent/CenterContent';
import ImageWithIcons from '../../../Molecules/ImageWithIcons/ImageWithIcons';
import useSelectCat from '../../../../hooks/useSelectCat';
import useDeleteCat from '../../../../hooks/useDeleteCat';
import FullScreenImage from '../../../Atoms/FullScreenImage/FullScreenImage';

const CatList = ({ cats = [] }) => {


    const {expand, currentCatURL, showCat, hiddeCat} = useSelectCat();
    const deleteCat = useDeleteCat();


    return (
        <>
            <FullScreenImage imageURL={currentCatURL} onCompress={hiddeCat} open={expand} />

            {
                cats?.map((cat, index) => (
                    <Grid.Column key={index}>
                        <CenterContent>
                            <div style={{ width: "100%", height: "100%", maxHeight: 350, maxWidth: 350, minHeight: 150, minWidth: 150 }} >
                                <ImageWithIcons imageURL={cat.data.url} >
                                    <Icon inverted color='green' onClick={() => showCat(cat.data.url)} name="expand" circular link />
                                    <Icon inverted color="red" onClick={() => deleteCat(cat.id)} name="trash" circular link />
                                </ImageWithIcons>
                            </div>
                        </CenterContent>
                    </Grid.Column>
                ))
            }
        </>
    )
}

export default CatList
