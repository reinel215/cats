import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../../../store/user/userActions';
import CenterContent from '../../../Atoms/Layout/CenterContent/CenterContent';
import { Card, Form, Image, Message} from 'semantic-ui-react'
import catLogo from '../../../../assets/CATS_logo.png';
import validationRegister from '../../../../utils/validationRegister'
import "./SignupForm.scss";
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';


const SigupForm = () => {


    const { formState, register, handleSubmit } = useForm();
    const history = useHistory()
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    const onSubmit = async (data) => dispatch(userActions.signup({ email: data.email, password: data.password }, () => history.push("/signin")))
    


    return (
        <CenterContent>

            <Card className="signup-card-wrapper">
                <Form onSubmit={handleSubmit(onSubmit)} loading={user.loading} error={user.error} >
                    <CenterContent>
                        <Image src={catLogo} size='small' />
                    </CenterContent>
                    <Form.Input
                        {...register("email", validationRegister({ required: true, email: true }))}
                        label="Email"
                        type="email"
                        placeholder="Email"
                        error={formState.errors.email?.message}
                    />
                    <Form.Input
                        {...register("password", validationRegister({required: true}))}
                        label="Password"
                        type="password"
                        placeholder="Password"
                        error={formState.errors.password?.message}
                    />


                    <Message 
                        error
                        header='Action Forbidden'
                        content={user.error}
                    />

                    <Form.Button type="submit" >Signup</Form.Button>

                    <Link to="/signin" > Alredy a cat lover ? Signin. Click here !</Link>

                </Form>
            </Card>

        </CenterContent>
    )
}

export default SigupForm
