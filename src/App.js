import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Seasons from './routes/Seasons'
import Gallery from './routes/Gallery'
import Homepage from './Views/Homepage'
import Houses from './routes/Houses';
import Characters from './routes/Characters';
import './App.css';
import Lore from './routes/Lore';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route  path="/seasons" exact component={Seasons} />
        <Route  path="/characters" exact component={Characters} />
        <Route  path="/houses" exact component={Houses} />
        <Route  path="/lore" exact component={Lore} />
        <Route  path="/gallery" exact component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;
