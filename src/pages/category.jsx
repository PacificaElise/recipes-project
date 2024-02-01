import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <div className='category-head'>
        <h2>{name}</h2>
        <button
          className='btn'
          onClick={() => navigate(-1)}
        >
          &#8592;
        </button>
      </div>

      {!meals.length ? (
        <Preloader />
      ) : (
        meals.map((meal) => (
          <MealList
            key={meal.idMeal}
            meals={meals}
          />
        ))
      )}
    </>
  );
}
