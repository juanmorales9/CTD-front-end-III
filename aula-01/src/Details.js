import './App.css';

let details = [{
    name: 'Eduardo',
    age: 30
}];


function Details() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>{details.name}</h2>
                <h2>{details.age}</h2>
            </header>
        </div>
    );
}

export default Details;