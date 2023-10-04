import React from 'react'
import logo from './logo.png';
import './App.css';
import Card from './components/card';

function App() {
  return (
    
    <div className='app'>

      <div className='logo'>

        <img src={logo} className="App-logo" alt="logo" />
        <h3> &nbsp; Weather App</h3>
            
      </div>

      <div className='inp'>

        <div className='inp-contents'>

          <input type="text" class="form-control" placeholder="Enter a city"/>
          <button type="button" class="btn btn-primary btn-add-city">Add City</button>

        </div>


      </div>

      <div className='card-container'>

          <Card/>
      </div>


      
    <footer>
      <div className="container">
        <p>&copy; 2023 Fidenz Technologies</p>
      </div>
    </footer>


    </div>




    
  );
}

export default App;
