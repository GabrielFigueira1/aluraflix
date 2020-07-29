import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/home';
import CadastroVideo from './components/pages/cadastro/video' 
import CadastroCategoria from './components/pages/cadastro/categoria' 
import { Switch, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={() => (<div>Erro 404</div>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
