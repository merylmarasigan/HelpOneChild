import React from 'react';
import './Request.css'; // We'll create this CSS file next
import Needs from './Needs.js'

const Request = (props) => {
    const id = props.id;
    const title = props.title;
    const description = props.description;
    const urgency = props.urgency;
    const details = props.details;
    const needs = props.needs;


    return (
        <div className='card'>
            <div className='request-top'>
                <p className='request-time'>⚠️ Within 7-10 days</p>
                <p className='urgency'>{urgency} Request</p>
            </div>
            <h2>{title}</h2>
            <hr/>
            <div>
                <p>{description}</p>
            </div>

            
            <div className='details'>
                <p><strong>Request</strong>: #{id}</p>
                <p><strong>Children Served</strong>: {details.children_served}</p>
                <p><strong>Adults Served</strong>: {details.adults_served}</p>
                <p><strong>Tier {details.tier}</strong>: Physical needs</p>
                <p><strong>Agency</strong>: {details.agency}</p>
                <p><strong>Location</strong>: {details.location}</p>
                <p><strong>County</strong>: {details.county}</p>
            </div>
            <hr/>

            <Needs needs ={needs} total_cost = {props.needs_cost}/>
            
            <button>Yes, I can help!</button>
            <div className='tagline'>
                <p>pray.serve.give</p>
            </div> 
            
        </div>
    );
}

export default Request;