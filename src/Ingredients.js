import recipes from './data/recipes';


function Ingredients(props) {

    function getIngredients(meals, category) {

        let ingredients = []

        // loop through meals
        for (let i = 0; i < meals.length; i++) {
            let meal = meals[i][0];
            let meal_amount = meals[i][1];

            // loop through meal ingredients
            for (let m = 1; m < recipes[meal].length; m++) {

                let ingredient = recipes[meal][m][0];
                let ingredient_amount = recipes[meal][m][1];
                let ingredient_category = recipes[meal][m][2];
                let ingredient_unit = recipes[meal][m][3];
                // add ingredients to ingredients list

                // if ingredient already exists, add the amount to the existing amount

                // map just the names
                let ingredient_names = ingredients.map(x => x[0]);

                // see if map contains new ingredient
                if (ingredient_names.includes(ingredient) === true && category === ingredient_category) {
                    let current_ingredient = ingredients.filter(x => x[0] === ingredient);
                    // filter ingredients to match ingredient and update amount?
                    current_ingredient[0][1] += (ingredient_amount * meal_amount);
                }
                else if (category === ingredient_category) {
                    // else add a new ingredient and amount
                    ingredients.push([ingredient, ingredient_amount * meal_amount, ingredient_unit])
                }
            }
        }

        return (ingredients).map( (ingredient) => {
            return (
                <p>{ingredient[1] > 0 && ingredient[0] + ' x ' + ingredient[1] + ' ' + ingredient[2]}</p>
            )
        })
    }

    return (
        <div>
            <h1>Ingredients</h1>
            <h2>Fruit & Vegetables</h2>
            {getIngredients(props.meals, 'veg')}
            <h2>Meat</h2>
            {getIngredients(props.meals, 'meat')}
            <h2>Spices</h2>
            {getIngredients(props.meals, 'spices')}
            <h2>Dairy</h2>
            {getIngredients(props.meals, 'dairy')}
            <h2>Bakery</h2>
            {getIngredients(props.meals, 'bakery')}
            <h2>Baking</h2>
            {getIngredients(props.meals, 'baking')}
            <h2>Condiments</h2>
            {getIngredients(props.meals, 'condiments')}
            <h2>Tins</h2>
            {getIngredients(props.meals, 'tins')}
            <h2>Frozen</h2>
            {getIngredients(props.meals, 'frozen')}
            <h2>Drinks</h2>
            {getIngredients(props.meals, 'drinks')}
            {/* <table>
                <tr>
                    <th>
                        <h2>Fruit & Vegetables</h2>
                    </th>
                    <th>
                        <h2>Meat</h2>
                    </th>
                    <th>
                        <h2>Bakery</h2>
                    </th>
                </tr>
                <tr>
                    <td>
                        {getIngredients(props.meals, 'veg')}
                    </td>
                    <td>
                        {getIngredients(props.meals, 'meat')}
                    </td>
                    <td>
                        {getIngredients(props.meals, 'bakery')}
                    </td>
                </tr>
                <tr>
                    <th>
                        <h2>Dairy</h2>
                    </th>
                    <th>
                        <h2>Spices</h2>
                    </th>
                    <th>
                        <h2>Baking</h2>
                    </th>
                </tr>
                <tr>
                    <td>
                        {getIngredients(props.meals, 'dairy')}
                    </td>
                    <td>
                        {getIngredients(props.meals, 'spices')}
                    </td>
                    <td>
                        {getIngredients(props.meals, 'baking')}
                    </td>
                </tr>
                <tr>
                    <th>
                        <h2>Condiments</h2>
                    </th>
                    <th>
                        <h2>Frozen</h2>
                    </th>
                    <th>
                        <h2>Alcohol</h2>
                    </th>
                </tr>
                <tr>
                    <td>
                        {getIngredients(props.meals, 'condiments')}
                    </td>
                    <td>
                        {getIngredients(props.meals, 'frozen')}
                    </td>
                    <td>
                        {getIngredients(props.meals, 'alcohol')}
                    </td>
                </tr>
            </table> */}
        </div>
    )
}

export default Ingredients;