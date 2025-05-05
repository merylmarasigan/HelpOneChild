import './App.css';
import Request from './components/Request';
import Bar from './components/Bar';
import SignUp from './components/SignUp';
import Results from './components/Results';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react';
import supabase from './lib/supabaseClient';


function App() {
  const [requests, setRequests] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldRefetch, setShouldRefetch] = useState(0);

  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  let date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  // let date = '2025-05-11';

  if(date < '2025-05-06'){
    date = '2025-05-06'
  }
  if(date > '2025-05-08'){
    date = '2025-05-08'
  }
  
  // Function to trigger a refetch
  const triggerRefetch = () => {
    setShouldRefetch(prevValue => prevValue + 1);
  };

  useEffect(() => {
    const fetchRequests = async () => {

      
      setLoading(true);
      try {
        const {data, error} = await supabase.from('care_reqs').select().eq('date', date).order('id');

        if (error) {
          setError('Could not fetch data');
          setRequests(null);
          console.log(error);
        } else if (data) {
          setRequests(data);
          setError(null);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [shouldRefetch, date]); // This will trigger a refetch when shouldRefetch changes
  
  return (
    <Router>
      <div className="App container">
        <Bar/>
        <div className='content'>
          <Switch>
            <Route path='/sign-up'>
              <SignUp onNavigateBack={triggerRefetch} />
            </Route>
            
            <Route exact path="/">
               {loading ? (
                <p>Loading requests...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : requests && requests.length > 0 ? (
                requests.map((r,idx) => (
                  <Request 
                    key={idx} 
                    id={r.id} 
                    title={r.title} 
                    description={r.description} 
                    urgency={r.urgency} 
                    details={r.details}
                    needs={r.needs}
                    needs_cost = {r.total_needs_cost}
                    votes = {null}
                  />
                ))
              ) : (
                <p>No requests found.</p>
              )}
            </Route>

            <Route path='/analytics'>
              <Results/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;