import React from 'react';
import { useState } from 'react';

import Meal from './Meal';
import Ingredients from './Ingredients';

function MealPlanner() {

    const [meals, setMeals] = useState([]);

    const mealplan = (meals) => {
        setMeals((prev) => [...prev.filter(name => !name.includes(meals[0])), meals]);
    };

    // useEffect(() => {
    //     setMealChange(() => mealAmount);
    //     mealUpdate();
    // }, [mealAmount]);

    return (
        <div>
            <h1>Choose your meals</h1>
            
            <table>
                <tr>
                    <td>
                        <Meal spicy={true} nuts={false} gluten={false} name='Chicken Pathia' mealplan={mealplan}/>
                    </td>
                    <td>
                        <Meal spicy={true} nuts={true} gluten={false} name='Lentil Curry'  mealplan={mealplan}/>
                    </td>
                    <td>
                        <Meal spicy={true} nuts={false} gluten={false} name='Chicken Fajitas'  mealplan={mealplan}/>
                    </td>
                    <td>
                        <Meal spicy={false} nuts={false} gluten={false} name='Carnitas' mealplan={mealplan}/>
                    </td>
                    <td>
                        <Meal spicy={false} nuts={false} gluten={false} name='Lentil & bacon soup' mealplan={mealplan}/>
                    </td>
                </tr>
                <tr>

                </tr>
            </table>

            <hr></hr>
            <hr></hr>
            <h1>Planned Meals</h1>
            {meals.map((meal) => meal[1] > 0 && <p>{meal[0]} x {meal[1]}</p>)}
            
            <Ingredients meals={meals}/>

        </div>
    )
}

export default MealPlanner;