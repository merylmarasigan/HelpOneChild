import React from 'react';
import './Needs.css'
const Needs = () => {
    return (
        <div className='needs'>
            <div className='needs-header'>
                <h3>Needs</h3>
                <p>(Estimated Value: $235)</p>
            </div>

            <ul>
            <li>Infant Car Seat (1 out of 1 still needed)</li>
            <li>Single Stroller (1 out of 1 still needed)</li>
            </ul>
        </div>
    );
}

export default Needs;