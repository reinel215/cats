import React, { useEffect, useState } from 'react'
import CatCard from '../Organism/Cats/CatCard/CatCard';
import { Card, Button, Grid, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/user/userActions';
import * as catActions from '../../store/cat/catActions';
import { useHistory } from 'react-router';
import { ReactComponent as GatoIcon } from '../../assets/gatoIcon2.svg'
import CenterContent from '../Atoms/Layout/CenterContent/CenterContent';
import FullScreenImage from '../Atoms/FullScreenImage/FullScreenImage';
import ImageWithIcons from '../Molecules/ImageWithIcons/ImageWithIcons';
import "./Cat.scss";
const Cat = () => {

    const [expand, setExpand] = useState(false);
    const [currentCatURL, setCurrentCatURL] = useState(null);

    const dispatch = useDispatch()
    const history = useHistory();
    const user = useSelector(state => state.user);
    const cat = useSelector(state => state.cat)

    useEffect(() => {
        dispatch(userActions.getCats(user.user.uid))
    }, [dispatch, user.user.uid])


    const setCatAndExpand = (catUrl) => {

        setExpand(true);
        setCurrentCatURL(catUrl);

    }


    const deleteCat = (catUid) => {
        dispatch( catActions.removeCatFromUser(catUid, user.user.uid) );
    } 


    return (

        <>
            <FullScreenImage imageURL={currentCatURL} onCompress={() => setExpand(false)} open={expand} />
            <Grid>
                <Grid.Row>

                    <Grid.Column computer={12} tablet={12} mobile={1} ></Grid.Column>
                    <Grid.Column computer={4} tablet={4} mobile={15} >
                        <Card style={{ padding: 5 }} >

                            <Grid >
                                <Grid.Column width="8">
                                    <CenterContent>
                                        <GatoIcon style={{ cursor: "pointer" }} />
                                    </CenterContent>
                                </Grid.Column>

                                <Grid.Column width="8" >
                                    <CenterContent>
                                        <Button id="signout-button" className="signout-button" onClick={() => dispatch(userActions.signout(() => history.push("/")))} >Signout</Button>
                                    </CenterContent>
                                </Grid.Column>
                            </Grid>
                        </Card>
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row>
                    <CatCard />
                </Grid.Row>


                <Grid.Row>
                    <Grid columns="3" stackable style={{ display: "flex" }} >
                        {
                            user.cats?.map((cat, index) => (
                                <Grid.Column key={index}>
                                    <CenterContent>
                                        <div style={{ width: "100%", height: "100%", maxHeight: 350, maxWidth: 350, minHeight:150, minWidth:150 }} >
                                            <ImageWithIcons imageURL={cat.data.url} >
                                                <Icon inverted color='green' onClick={() => setCatAndExpand(cat.data.url)} name="expand" circular link />
                                                <Icon inverted color="red" onClick={() => deleteCat(cat.id)} name="trash" circular link />
                                            </ImageWithIcons>
                                        </div>
                                    </CenterContent>
                                </Grid.Column>
                            ))
                        }
                    </Grid>
                </Grid.Row>
            </Grid>
        </>
    )
}




export default Cat;