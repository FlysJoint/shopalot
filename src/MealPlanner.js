import React from 'react';
import { useState } from 'react';

import Meal from './Meal';
import Ingredients from './Ingredients';

import recipes from './data/recipes';

function MealPlanner() {

    const [meals, setMeals] = useState([]);

    const mealplan = (meals) => {
        setMeals((prev) => [...prev.filter(name => !name.includes(meals[0])), meals]);
    };

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
                </tr>
                <tr>
                    <td>
                        <Meal spicy={false} nuts={false} gluten={false} name='Carnitas' mealplan={mealplan}/>
                    </td>
                    <td>
                        <Meal spicy={false} nuts={false} gluten={false} name='Lentil & bacon soup' mealplan={mealplan}/>
                    </td>
                    <td>
                        <Meal spicy={false} nuts={false} gluten={false} name='Broccoli & Stilton soup' mealplan={mealplan}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Meal spicy={false} nuts={false} gluten={true} name='McMuffin' mealplan={mealplan}/>
                    </td>
                    <td>
                        <Meal spicy={true} nuts={false} gluten={true} name='Gambas Pil Pil' mealplan={mealplan}/>
                    </td>
                    <td>
                        <Meal spicy={false} nuts={false} gluten={true} name='Bruschetta' mealplan={mealplan}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Meal spicy={true} nuts={false} gluten={false} name='Italian Sausage' mealplan={mealplan}/>
                    </td>
                    <td>
                        <Meal spicy={false} nuts={false} gluten={true} name='Stilton Mushrooms' mealplan={mealplan}/>
                    </td>
                    <td>
                        <Meal spicy={true} nuts={false} gluten={false} name='Thukpa' mealplan={mealplan}/>
                    </td>
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