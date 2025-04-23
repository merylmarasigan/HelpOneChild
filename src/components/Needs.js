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
                <p>(Estimated Value: ${props.total_cost})</p>
            </div>

            <ul>
                {needs.map((n) => {
                    return <li>{n.item} ({n.quantity} out of {n.quantity} still needed) </li>
                })}
            {/* <li>Infant Car Seat (1 out of 1 still needed)</li>
            <li>Single Stroller (1 out of 1 still needed)</li> */}
            </ul>
        </div>
    );
}

export default Needs;