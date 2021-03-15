import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './Header';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = 'd5452681';
  const APP_KEY = '24af4e3453867f4af030b5c8780e8dcc'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
    console.log(recipes)
  })

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <Header />
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' placeholder='Search recipe here' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
