import React from 'react'
import Bar from './Bar';
import './SignUp.css'

const SignUp = () => {
    return(
    <div className='sign-up container'>
    
       <div className='inner'>
             <Bar/>
             <h1>Sign Up For News and Updates!</h1>
             <hr></hr>
             <form className='form'>
                <div className='name-input'>
                    <label>Name:</label>
                    <input type='text'/>
                </div>

                <div className='email-input'>
                    <label>Email:</label>
                    <input type='text'/>
                </div>

                <button>Sign Up</button>
                <button className='skip-btn'>Skip</button>

                
             </form>
        </div>
       
    </div>);
}

export default SignUp