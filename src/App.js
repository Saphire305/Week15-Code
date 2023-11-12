import './App.css';
import CreateHouse from './components/CreateHouse';
import Houses from './components/Houses';

function App() {
  const url = "https://ancient-taiga-31359.herokuapp.com/api/houses"
  // const url = "#"
  return (
    <div className="App-header">
      <Houses url={url} />
      <CreateHouse url={url}/>
    </div>
  );
}

export default App;
