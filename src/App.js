import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Seasons from './routes/Seasons'
import Gallery from './routes/Gallery'
import Homepage from './Views/Homepage'
import Houses from './routes/Houses';
import Characters from './routes/Characters';
import Lore from './routes/Lore';
import NotFound404 from './routes/NotFound404';
import './App.css';

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
        <Route  path="*" exact component={NotFound404} />
      </Switch>
    </div>
  );
}

export default App;
