import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props) => {


    const user = useSelector( state => state.user );


    return (
        <>
        {
            user.user ?
            <Route {...props} />
            :
            <Redirect to="/signin"/>
        }
        </>
    )
}

export default PrivateRoute
