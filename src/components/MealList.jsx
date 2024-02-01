import React from 'react';
import Meal from './Meal';

function MealList({ meals }) {
  return (
    <div>
      <div className='list'>
        {meals.map((meal) => (
          <Meal
            key={meal.idMeal}
            {...meal}
          />
        ))}
      </div>
    </div>
  );
}

export { MealList };
