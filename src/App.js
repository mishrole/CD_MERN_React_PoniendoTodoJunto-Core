import './App.css';
import PersonCard from './components/PersonCard';
import { people } from './data/people';

function App() {

  return (
    <div className="App">
      <div className="card-list">
      {
        people.map( person => 
          <PersonCard key={`people-${person.firstName}`} firstName={ person.firstName } lastName={ person.lastName } age={ person.age } hairColor={ person.hairColor }/>
        )
      }
      </div>
    </div>
  );

}

export default App;
