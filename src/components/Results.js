import React from 'react'
import { useState, useEffect } from 'react';
import supabase from '../lib/supabaseClient.js';
import './Results.css'
import Request from './Request.js';

const Results = () => {

    const [ranking, setRanking] = useState([]);
    const [day, setDay] = useState('0');


    useEffect(() => {
        const dates= {"1":"2025-05-06", "2": "2025-05-07", "3": "2025-05-08"}

        const fetchResults = async() => {

            let data, error;
            if (day === '0'){
                const result = await supabase.from('care_reqs').select().order('votes', {ascending: false});
                data = result.data;
                error = result.error;
            }else{
                const result = await supabase.from('care_reqs').select().eq('date', dates[day]).order('votes', {ascending: false});
                data = result.data;
                error = result.error;
            }

            if(error){
                console.log(error);
            }

            if(data){
                setRanking(data);
                console.log('data gathered!: ', data)

            }
        }

        fetchResults();

        // Set up real-time subscription that will rerender component whenever data change is detected
        const channel = supabase
            .channel('table-db-changes')
            .on('postgres_changes', { 
                event: 'UPDATE', 
                schema: 'public', 
                table: 'care_reqs' 
            }, () => {
                console.log('Change detected at:', new Date().toTimeString());
                fetchResults();
            })
            .subscribe();

        // Clean up subscription when component unmounts
        return () => {
            supabase.removeChannel(channel);
        };
    },[day])

    const handleReqDownload = () => {
        const downloadCR = async () => {
            try {
                // Show loading state if desired
                // setIsLoading(true);
                
                // Fetch data from Supabase
                const { data, error } = await supabase
                  .from('care_reqs')
                  .select('*');
                
                if (error) {
                  console.error('Error fetching data:', error);
                  alert('Failed to fetch data from database');
                  return;
                }
                
                if (!data || data.length === 0) {
                  alert('No data to export');
                  return;
                }
                
                // Convert to CSV
                const headers = Object.keys(data[0]);
                
                // Create CSV header row
                let csvContent = headers.join(',') + '\n';
                
                // Add data rows
                data.forEach(row => {
                  const values = headers.map(header => {
                    const value = row[header];
                    // Handle special cases (arrays, objects, null values)
                    if (value === null) return '';
                    if (typeof value === 'object') return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
                    if (typeof value === 'string') return `"${value.replace(/"/g, '""')}"`;
                    return value;
                  });
                  csvContent += values.join(',') + '\n';
                });
                
                // Create download link
                const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                
                // Set download attributes
                link.setAttribute('href', url);
                link.setAttribute('download', 'CareRequests.csv');
                link.style.visibility = 'hidden';
                
                // Append to document, click, and remove
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Clean up
                URL.revokeObjectURL(url);
                
                // Hide loading state if used
                // setIsLoading(false);
            } catch (err) {
            console.error('Error generating CSV:', err);
            alert('Failed to generate CSV file');
            // setIsLoading(false);
            }
        }
        downloadCR();
    }

    const handleRegisteredUsersDownload = () => {
        const downloadRU = async () => {
            try {
                // Show loading state if desired
                // setIsLoading(true);
                
                // Fetch data from Supabase
                const { data, error } = await supabase
                  .from('users')
                  .select('*');
                
                if (error) {
                  console.error('Error fetching data:', error);
                  alert('Failed to fetch data from database');
                  return;
                }
                
                if (!data || data.length === 0) {
                  alert('No data to export');
                  return;
                }
                
                // Convert to CSV
                const headers = Object.keys(data[0]);
                
                // Create CSV header row
                let csvContent = headers.join(',') + '\n';
                
                // Add data rows
                data.forEach(row => {
                  const values = headers.map(header => {
                    const value = row[header];
                    // Handle special cases (arrays, objects, null values)
                    if (value === null) return '';
                    if (typeof value === 'object') return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
                    if (typeof value === 'string') return `"${value.replace(/"/g, '""')}"`;
                    return value;
                  });
                  csvContent += values.join(',') + '\n';
                });
                
                // Create download link
                const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                
                // Set download attributes
                link.setAttribute('href', url);
                link.setAttribute('download', 'RegisteredUsers.csv');
                link.style.visibility = 'hidden';
                
                // Append to document, click, and remove
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Clean up
                URL.revokeObjectURL(url);
                
                // Hide loading state if used
                // setIsLoading(false);
            } catch (err) {
            console.error('Error generating CSV:', err);
            alert('Failed to generate CSV file');
            // setIsLoading(false);
            }
        }
        downloadRU();
    }

     
    return (
        <div>
            <h1>Analytics</h1>
            <hr/>

            <div className='drop-down'> 
                 <label htmlFor='dates' className='day-label'>Day:</label>
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
                ranking.length > 0 && ranking.map((r,idx) => (
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

            {ranking.length === 0 && <p>No data to display</p>}

            <div className='download-btns'>
                <button onClick={handleReqDownload}>Download CareRequests.csv</button>
                <button onClick={handleRegisteredUsersDownload}>Download RegisteredUsers.csv</button>
            </div>
            


        </div>
    );
}

export default Results;