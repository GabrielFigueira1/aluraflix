import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';
import useForm from '../../../../hooks/useForms';

function CadastroCategoria() {
  const [categories, setCategories] = useState(['']);

  const valoresIniciais = {
    name: '',
    description: '',
    color: '#000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://metalflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategories(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Category Register:
        {values.name}
      </h1>

      <form onSubmit={(props) => {
        props.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);
        clearForm();
      }}
      >
        <div>
          <FormField
            label="Category name: "
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />

          <div>
            <FormField
              label="Description: "
              type="textarea"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <FormField
              label="Color: "
              type="color"
              name="color"
              value={values.color}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button>
          Register
        </Button>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Return to home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
