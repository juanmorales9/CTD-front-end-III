import Greeting from './components/Greeting';
import './App.css';


function App() {
  const user = {
    firstName: 'Turma',
    lastName: '03'
  };

  return (
    <div className="App">
      <Greeting user={user} />
      <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </p>
    </div>
  );
}

export default App;
