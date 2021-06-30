import React, { useState, useEffect } from 'react';
import { Card, Image, Button, Grid, Icon } from 'semantic-ui-react'
import FullScreenImage from '../../../Atoms/FullScreenImage/FullScreenImage';
import { useDispatch, useSelector } from 'react-redux';
import * as catActions from '../../../../store/cat/catActions';
import { API_URL } from '../../../../config/API/API_URL';
import CenterContent from '../../../Atoms/Layout/CenterContent/CenterContent';
import './CatCard.scss';


const CatCard = () => {


    const [expand, setExpand] = useState(false);
    const cat = useSelector(state => state.cat);
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();


    useEffect(() => dispatch(catActions.setCat()) , [dispatch]);


    return (

        <React.Fragment>

            <FullScreenImage open={expand} imageURL={API_URL + cat.cat.url} onCompress={() => setExpand(false)} />


            <CenterContent>


                <Card className="cat-card-wrapper">

                    {
                        cat.cat.url ?
                            <div className="image-wrapper" >
                                <Image src={API_URL + cat.cat.url} wrapped ui={false} />
                                <Icon className="expand-icon" onClick={() => setExpand(true)} name="expand" link />
                            </div>
                            :
                            <div style={{ width: 300, height: 300 }} ></div>
                    }


                    <Card.Content>
                        <Card.Header>Hemos encontrado un gato para ti!</Card.Header>
                        <Card.Meta>
                            <span className='date'>subido el 2015</span>
                        </Card.Meta>

                    </Card.Content>


                    <Card.Content extra>


                        <Grid stackable columns={2}>
                            <Grid.Row  >

                                <Grid.Column>
                                    <Button
                                        onClick={() => dispatch(catActions.setCat())}
                                        color="purple"
                                        className="primary-buttom"
                                        disabled={cat.loading}
                                    >
                                        Buscar otro gato
                                    </Button>
                                </Grid.Column>

                                <Grid.Column>

                                    <Button
                                        color="purple"
                                        className="primary-buttom"
                                        disabled={cat.loading}
                                        onClick={() => dispatch(catActions.saveCat(cat.cat.url, user.user.uid))}
                                    >
                                        Guardar gato
                                    </Button>

                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                    </Card.Content>
                </Card>

            </CenterContent>
        </React.Fragment>


    )
}



export default CatCard;