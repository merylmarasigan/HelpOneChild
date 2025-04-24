import './App.css';
// import RequestCard from'./components/RequestCard'
import Request from './components/Request';
import Bar from './components/Bar';
import SignUp from './components/SignUp';
import SignUpConfirmation from './components/SignUpConfirmation';
// import requests from './data/request';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react';
import supabase from './lib/supabaseClient';


function App() {
  const [requests, setRequests] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldRefetch, setShouldRefetch] = useState(0);
  
  // Function to trigger a refetch
  const triggerRefetch = () => {
    setShouldRefetch(prevValue => prevValue + 1);
  };

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      try {
        const {data, error} = await supabase
          .from('test_reqs')
          .select()
          .order('id');

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
  }, [shouldRefetch]); // This will trigger a refetch when shouldRefetch changes
  
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
                  />
                ))
              ) : (
                <p>No requests found.</p>
              )}
            </Route>

            <Route path='/sign-up-confirmation'>
              <SignUpConfirmation/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;