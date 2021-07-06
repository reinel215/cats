import React from 'react'
import CatCard from '../Organism/Cats/CatCard/CatCard';
import { Card, Button, Grid } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import * as userActions from '../../store/user/userActions';
import { useHistory } from 'react-router';
import { ReactComponent as GatoIcon } from '../../assets/gatoIcon2.svg'
import CenterContent from '../Atoms/Layout/CenterContent/CenterContent';
import "./Cat.scss";
import useGetCats from '../../hooks/useGetCats';
import CatList from '../Organism/Cats/CatList/CatList';


const Cat = () => {

    const cats = useGetCats();
    const dispatch = useDispatch()
    const history = useHistory();


    return (

        <>
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

                        <CatList cats={cats} />

                    </Grid>
                </Grid.Row>
            </Grid>
        </>
    )
}




export default Cat;