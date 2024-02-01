import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      <div className='category-head'>
        <h3>{recipe?.strCategory}</h3>
        <button
          className='btn'
          onClick={() => navigate(-1)}
        >
          &#8592;
        </button>
      </div>
      {!recipe ? (
        <Preloader />
      ) : (
        <>
          <div className='recipe'>
            <img
              src={recipe?.strMealThumb}
              alt={recipe?.strMeal}
            />
            <h3>{recipe?.strMeal}</h3>
            <h5>{recipe?.strArea}</h5>
            <p className='instructions'>{recipe?.strInstructions}</p>
            <table className='centred highlight'>
              <thead>
                <tr>
                  <td>
                    <th>Ingredient</th>
                  </td>
                  <td>
                    <th>Measure</th>
                  </td>
                </tr>
              </thead>

              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes('Ingredient') && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
            <iframe
              src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                -11
              )}`}
              title={recipe?.strMeal}
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </>
      )}
    </>
  );
}

export { Recipe };
