import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Category Register</h1>

      <form>

        <label>
          Category name:
          <input
            type="text"
          />
        </label>

        <button>
          Register
        </button>
      </form>


      <Link to="/">
        Return to home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;