import React from 'react';
import { useState } from 'react';

import './MealPlanner.css';

import Meal from './Meal';
import Ingredients from './Ingredients';

import recipes from './data/recipes';

function MealPlanner(props) {

    const [meals, setMeals] = useState([]);
    // const [mealType, setMealType] = useState('lunch');

    // const handleDinnerClick = () => {
    //     setMealType('dinner');
    // }

    // const handleLunchClick = () => {
    //     setMealType('lunch');
    // }

    const mealplan = (meals) => {
        setMeals((prev) => [...prev.filter(name => !name.includes(meals[0])), meals]);
    };

    const plannedMeals = meals.map((meal) => meal[1] > 0 && <p>{meal[0]} x {meal[1]}</p>);

    const all_choices = Object.entries(recipes);
    // console.log(all_choices);

    const dataHandler = () => {
        // console.log(meals);
        props.passChildData(meals);
    }

    // filter choices by meal type
    const lunch_choices = [];
    for (let i = 0; i < all_choices.length; i++) {
        // console.log(all_choices[i][1][0])
        if (all_choices[i][1][0].includes('lunch')) {
            lunch_choices.push(all_choices[i])
        }
    }

    const lunch_buttons = [];
    for (let i = 0; i < lunch_choices.length; i += 3) {

        let first = '';
        let second = '';
        let third = '';

        if (lunch_choices[i]) {
            first = <td><Meal spicy={lunch_choices[i][1][0].includes('spicy')} nuts={lunch_choices[i][1][0].includes('nuts')} gluten={lunch_choices[i][1][0].includes('gluten')} name={lunch_choices[i][0]} mealplan={mealplan}/></td>
        }

        if (lunch_choices[i + 1]) {
            second = <td><Meal spicy={lunch_choices[i + 1][1][0].includes('spicy')} nuts={lunch_choices[i + 1][1][0].includes('nuts')} gluten={lunch_choices[i + 1][1][0].includes('gluten')} name={lunch_choices[i + 1][0]} mealplan={mealplan}/></td>
        }

        if (lunch_choices[i + 2]) {
            third = <td><Meal spicy={lunch_choices[i + 2][1][0].includes('spicy')} nuts={lunch_choices[i + 2][1][0].includes('nuts')} gluten={lunch_choices[i + 2][1][0].includes('gluten')} name={lunch_choices[i + 2][0]} mealplan={mealplan}/></td>
        }

        lunch_buttons.push(
            <tr>
                {first}
                {second}
                {third}
            </tr>
        );
    }

    const dinner_choices = [];
    for (let i = 0; i < all_choices.length; i++) {
        // console.log(all_choices[i][1][0])
        if (all_choices[i][1][0].includes('dinner')) {
            dinner_choices.push(all_choices[i])
        }
    }    

    const dinner_buttons = [];
    for (let i = 0; i < dinner_choices.length; i += 3) {

        let first = '';
        let second = '';
        let third = '';

        if (dinner_choices[i]) {
            first = <td><Meal spicy={dinner_choices[i][1][0].includes('spicy')} nuts={dinner_choices[i][1][0].includes('nuts')} gluten={dinner_choices[i][1][0].includes('gluten')} name={dinner_choices[i][0]} mealplan={mealplan}/></td>
        }

        if (dinner_choices[i + 1]) {
            second = <td><Meal spicy={dinner_choices[i + 1][1][0].includes('spicy')} nuts={dinner_choices[i + 1][1][0].includes('nuts')} gluten={dinner_choices[i + 1][1][0].includes('gluten')} name={dinner_choices[i + 1][0]} mealplan={mealplan}/></td>
        }

        if (dinner_choices[i + 2]) {
            third = <td><Meal spicy={dinner_choices[i + 2][1][0].includes('spicy')} nuts={dinner_choices[i + 2][1][0].includes('nuts')} gluten={dinner_choices[i + 2][1][0].includes('gluten')} name={dinner_choices[i + 2][0]} mealplan={mealplan}/></td>
        }

        dinner_buttons.push(
            <tr>
                {first}
                {second}
                {third}
            </tr>
        );
    }

    // console.log(dinner_buttons)

    return (
        <div>
            <h1>Choose your meals</h1>
            
            {/* <button onClick={handleLunchClick}>Lunch</button> <button onClick={handleDinnerClick}>Dinner</button> */}

            <h3>Lunch</h3>

            <table className='centre'>
                <tbody>
                    <tr>
                        { lunch_buttons }
                    </tr>
                </tbody>
            </table>

            

            <h3>Dinner</h3>

            <table className='centre'>
                <tbody>
                    { dinner_buttons }
                </tbody>
            </table>

            <hr></hr>

            <h1>Planned Meals</h1>

            <p># of lunches, # of dinners</p>

            { plannedMeals }
            

            <button onClick={dataHandler} height='50px' >Submit</button>
            
            {/* <Ingredients meals={meals}/> */}

        </div>
    )
}

export default MealPlanner;