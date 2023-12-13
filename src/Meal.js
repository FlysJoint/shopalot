import React from 'react';
import { useState, useEffect } from 'react';

import nut from './images/nut.png';
import chilli from './images/chilli.png';
import gluten from './images/gluten.png';
import plate from './images/plate.jpg';

function Meal(props) {

    const [mealAmount, setMealAmount] = useState(0);
    const [mealChange, setMealChange] = useState();

    const nuts = <img src={nut} className="nut_icon" alt="contains nuts" width="19" height="20"/>
    const spicy = <img src={chilli} className="chilli_icon" alt="spicy" width="20" height="20"/>
    const glutenfree = <img src={gluten} className="gluten_icon" alt="contains gluten" width="20" height="20"/>
    const default_plate = <img src={plate} className="default_image" alt="default plate" width="100" height="100" />

    useEffect(() => {
        setMealChange(() => mealAmount);
        mealUpdate();
    }, [mealAmount]);

    const handleUpClick = () => {
        setMealAmount((prevAmount) => prevAmount + 1);
    }

    const handleDownClick = () => {
        setMealAmount((prevAmount) => prevAmount > 0 ? prevAmount - 1 : prevAmount);
    }

    const handleResetClick = () => {
        setMealAmount(0);
    }

    function mealUpdate() {
            props.mealplan([props.name, mealAmount]);
    }

    return (
        <div>
            {default_plate}
            <p>{props.nuts && nuts}{props.spicy && spicy}{props.gluten && glutenfree}{props.name} x {mealChange} </p>
            <button onClick={handleUpClick}>+</button>
            <button onClick={handleDownClick}>-</button>
            <button onClick={handleResetClick}>Reset</button>
            <br></br>
        </div>
    )
}

export default Meal;