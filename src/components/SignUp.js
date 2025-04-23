import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
    <div className='sign-up container'>
    
       <div className='inner'>
             <h1>Sign Up For News and Updates!</h1>
             <hr></hr>
             <form className='form'>
                <div className='name-input'>
                    <label>Name:</label>
                    <input type='text' placeholder="Jane Doe"/>
                </div>

                {/* <div className='name-input'>
                    <label>Last Name:</label>
                    <input type='text'/>
                </div> */}

                <div className='email-input'>
                    <label>Email:</label>
                    <input type='text' placeholder="janedoe@email.com"/>
                </div>

                <div className='btns'>
                    <button>Sign Up</button>
                    <Link to='/' style={{textDecorationColor:'#ff8c00'}}><button className='skip-btn'>Skip</button></Link>
                </div>
                
             </form>
        </div>
       
    </div>);
}

export default SignUp