import React from 'react'

const Recipes = props => (
  <div className="container">
  <div className="row">
  { props.recipes.map((recipe) =>{
    return (
      <div className="col-md-4">
        <div className="recipes__box">
        <img
          className="recipes__box-img"
          src={recipe.image_url}
          alt={recipe.title}/>
        <div className="recipe__text">
          <p> { recipe.title} </p>


        </div>
      </div>
     </div>
  );
  }) }
  </div>

  </div>
);

export default Recipes;
