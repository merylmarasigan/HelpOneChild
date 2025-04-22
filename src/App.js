import './App.css';
// import RequestCard from'./components/RequestCard'
import Request from './components/Request';
import Bar from './components/Bar';
// import requests from './data/request';
function App() {
  return (
    <div className="App container">
      <Bar/>
      <Request/>
      <Request />
      {/* {requests.map((req) => {
        return <Request req = {req} title={req.title} description={req.description} urgency={req.description} details={req.details} needs={req.needs}/>
      })} */}
    </div>
  );
}

export default App;