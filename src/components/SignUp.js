import React, { useState } from 'react'
import './SignUp.css'
import { Link, useHistory } from 'react-router-dom';
import supabase from '../lib/supabaseClient';
import SignUpConfirmation from './SignUpConfirmation';


const SignUp = ({ onNavigateBack }) => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [formError, setFormError] = useState(false);
    const [signedUp, setSignedUp] = useState(false);

    const handleSignUp = async (e) => {
        console.log(`name:${name} email:${email}`)
        e.preventDefault()

        if(name === '' || email === ''){
            console.log(`INVALID SIGN UP! name: ${name} email:${email}`)
            setFormError('Please fill in all fields correctly!');
            return;
        }

        const {data, error} = await supabase
        .from('users')
        .insert([{email, name}])
        .select()

        if(error){
            console.log(error);

            if (error.message === 'duplicate key value violates unique constraint "test_user_pkey"'){
                setFormError('Email is already in our system');
               
            }

            setName('');
            setEmail('');
            
        }

        if(data){
            console.log(`data: ${data}`)
            setFormError(false);
            setTimeout( () =>{
                setSignedUp(true);}
            , 250)
            console.log(data);
            setTimeout(function() {
                history.push('/', { refresh: true })
                onNavigateBack();
            }, 1000);
        }

    }



    return(
    <div className='sign-up container'>
       { signedUp === false && <div className='inner'>
            <h1>Learn How to Meet Other CarePortal Requets!</h1>
            <hr></hr>
            <form className='form'>
            <div className='name-input'>
                <label>Name:</label>
                <input
                    type='text'
                    placeholder="Jane Doe"
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                    value={name}
                />
            </div>

            <div className='email-input'>
                <label>Email:</label>
                <input 
                    type='text'
                    placeholder="janedoe@email.com"
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                    value={email}/>
            </div>

            {formError && <p>{formError}</p>}
            <div className='btns'>
              
                <button onClick={handleSignUp}>Sign Up</button>
                <Link to='/' onClick={onNavigateBack}  style={{ textDecorationColor: '#ff6700' }}>
                    <button className='skip-btn'>Skip</button>
                </Link>
            </div>
            </form>

            
        </div>}

        {signedUp === true && <SignUpConfirmation/>}
    </div>);
}
export default SignUp