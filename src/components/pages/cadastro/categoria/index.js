import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';

function CadastroCategoria() {
  const [categories, setCategories] = useState(['']);

  const valoresIniciais = {
    name: '',
    description: '',
    color: '#000',
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChange(props) {
    setValue(props.target.getAttribute('name'),
      props.target.value);
  }

  return (
    <PageDefault>
      <h1>Category Register: {values.name}</h1>

      <form onSubmit={(props) => {
        props.preventDefault();
        setCategories([
          ...categories,
          values
        ]);
        setValues(valoresIniciais);
      }
      }>
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

        <button>
          Register
        </button>
      </form>

      <ul>
        {categories.map((category, key) => {
          return (
            <li key={`${category}${key}`}>
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Return to home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;