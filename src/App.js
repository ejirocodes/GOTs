import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Seasons from './routes/Seasons'
import Gallery from './routes/Gallery'
import Navbar from './Components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route  path="/seasons" exact component={Seasons} />
        <Route  path="/gallery" exact component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;
