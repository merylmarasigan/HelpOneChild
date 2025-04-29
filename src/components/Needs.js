import React from 'react';
import './Needs.css'
const Needs = (props) => {
    const needs = props.needs;
    // const total_needs_cost = props.total_needs_cost;

    if (!needs) {
        return (
          <div className='needs'>
            <div className='needs-header'>
              <h3>Needs</h3>
              <p>(No needs data available)</p>
            </div>
          </div>
        );
      }
    return (
        <div className='needs'>
            <div className='needs-header'>
                <h3>Needs</h3>
                
            </div>

            <ul>
                {needs.map((n, idx) => {
                    return <li key={idx}>{n}</li>
                })}
            </ul>
        </div>
    );
}

export default Needs;