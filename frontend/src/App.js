import React , { useState, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import Listchar from './components/Listchar/Listchar';
import Singlecharacter from './components/Singlecharacter/Singlecharacter';
import { getCharacters } from './actions/characters';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters(paging));
  }, [dispatch]);

  const [paging, setPaging] = useState(1);

  const nxtpg = () => {
      console.log(paging)
      setPaging(paging+1);
      console.log(paging)
      dispatch(getCharacters(paging));
  }
  const prvpg = () => {
      console.log(paging)
      setPaging(paging-1);
      console.log(paging)
      dispatch(getCharacters(paging));
  }




  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Listchar} />
        <Route path="/character/:id" component={Singlecharacter} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
