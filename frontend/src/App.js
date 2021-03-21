import React  from 'react';
import Listchar from './components/Listchar/Listchar';
import Auth from './components/Auth/Auth';
import Singlecharacter from './components/Singlecharacter/Singlecharacter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/auth" exact component={Auth} />
        <Route path="/" exact component={Listchar} />
        <Route path="/character/:id" component={Singlecharacter} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
