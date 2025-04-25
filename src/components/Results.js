import React from 'react'
import { useState, useEffect } from 'react';
import supabase from '../lib/supabaseClient.js';
import './Results.css'
import Request from './Request.js';

const Results = () => {

    const [ranking, setRanking] = useState([]);
    const [day, setDay] = useState('0');


    useEffect(() => {

        const fetchResults = async() => {

            let data, error;
            if (day === '0'){
                const result = await supabase.from('test_reqs').select().order('votes', {ascending: false});
                data = result.data;
                error = result.error;
            }else{
                const result = await supabase.from('test_reqs').select().eq('day', day).order('votes', {ascending: false});
                data = result.data;
                error = result.error;
            }

            if(error){
                console.log(error);
            }

            if(data){
                setRanking(data);
            }
        }

        fetchResults();
    },[day,])
     
    return (
        <div>
            <h1>Analytics</h1>
            <hr/>

            <div className='drop-down'> 
                 <label for='dates' className='day-label'>Day:</label>
                <select
                    name="day"
                    id="dates"
                    onChange={(e) => { setDay(e.target.value);}}
                >
                    <option value="0">All</option>
                    <option value="1">Day 1</option>
                    <option value="2">Day 2</option>
                    <option value="3">Day 3</option>
                </select>

                
            </div>
           
            {
                ranking.map((r,idx) => (
                    <Request 
                      key={idx} 
                      id={r.id} 
                      title={r.title} 
                      description={r.description} 
                      urgency={r.urgency} 
                      details={r.details}
                      needs={r.needs}
                      needs_cost = {r.total_needs_cost}
                      votes = {r.votes}
                    />
                  ))
            }

           


        </div>
    );
}

export default Results;