import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 className="recipe-head">{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.image}>Calories - {calories.toFixed(2)}</p>
            <img src={image} alt={title} />
        </div>
    )
}

export default Recipe
