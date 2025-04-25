import React from 'react';
import './Request.css'; 
import Needs from './Needs.js'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';
import supabase from '../lib/supabaseClient.js';

const Request = (props) => {
    const id = props.id;
    const title = props.title;
    const description = props.description;
    const urgency = props.urgency;
    const details = props.details;
    const needs = props.needs;
    const votes = props.votes;
    const history = useHistory();

    const handleClick = async (e) => {

        //when 'YES, I CAN HELP!' button is clicked, vote count for that request is incremented
        const {data, error} = await supabase
        .from('test_reqs')
        .select('votes')
        .eq('id',id)
        .single();

        if(error){
            console.log('Coult not fetch votes');
            return;
        }

        const newCount = (data?.votes || 0) + 1;

        const {updatedData, updateError} = await supabase
        .from('test_reqs')
        .update({votes: newCount})
        .eq('id', id);

        history.push('/sign-up', { refresh: true })
    }


    return (
        
        <div className='card'>
            {votes !== null  && <p className='num-votes'>{votes} votes</p>}
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
            
            {votes === null && <button onClick={handleClick}>Yes, I can help!</button>}
            
            <div className='tagline'>
                <p>pray.serve.give</p>
            </div> 
            
        </div>
    );
}

export default Request;