import React from 'react';
import PageDefault from '../../../PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria(){
  return(
    <PageDefault>
      <h1>Category Register</h1>
      <Link to="/">
        Return to home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;