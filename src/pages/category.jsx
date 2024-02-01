import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <h2>{name}</h2>
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
