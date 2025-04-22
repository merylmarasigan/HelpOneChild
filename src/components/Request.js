import React from 'react';
import './Request.css'; // We'll create this CSS file next
import Needs from './Needs.js'

const Request = (props) => {
    // const name = props.title;
    // const description = props.description;
    // const urgency = props.urgency;
    // const details = props.details;
    // const needs = props.needs;


    return (
        <div className='card'>
            <div className='request-top'>
                <p className='request-time'>⚠️ Within 7-10 days</p>
                <p className='urgency'>Normal Request</p>
            </div>
            <h2>Support an Expecting Mom and Her Unborn Baby</h2>
            <hr/>
            <div>
                <p>
                    Young woman is getting ready for her baby's arrival and is very low income.
                Items do not have to be brand new, but in good condition would be wonderful and so gratefully appreciated. 
                This will help her feel excited and "ready" as best she can in the coming weeks. 
                Items needed are: Car seat, Stroller baby carrier.
                </p>
            </div>

            
            <div className='details'>
                <p><strong>Request</strong>: #223410</p>
                <p><strong>Children Served</strong>: 1</p>
                <p><strong>Adults Served</strong>: 0</p>
                <p><strong>Tier 1</strong>: Physical needs</p>
                <p><strong>Agency</strong>: Turntable</p>
                <p><strong>Location</strong>: San Francisco, CA, 94124</p>
                <p><strong>County</strong>: San Francisco</p>
            </div>
            <hr/>

            <Needs/>
            
            <button>Yes, I can help!</button>
            <div className='tagline'>
                <p>pray.serve.give</p>
            </div> 
            
        </div>
    );
}

export default Request;