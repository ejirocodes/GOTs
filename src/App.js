import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Seasons from './routes/Seasons'
import Gallery from './routes/Gallery'
import Homepage from './Views/Homepage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route  path="/seasons" exact component={Seasons} />
        <Route  path="/gallery" exact component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;
