const recipes = {
    "Chicken Pathia": [
        ['dinner', 4, 'indian', 'spicy'],
        ["ghee", 2, 'dairy', 'tbsp'],
        ["chicken", 3, 'meat', 'breasts'],
        ["onion", 3, "veg", 'whole'],
        ["garlic", 3, 'spices', 'cloves'],
        ["red chilli", 2, "veg", 'whole'],
        ["tomato puree", 1, 'tins', 'tbsp'],
        ["curry powder", 3, 'spices', 'tbsp'],
        ["chopped tomatoes", 1, 'tins', 'tins'],
        ["brown sugar", 0.5, 'baking', 'tsp'],
        ["lime", 0.5, 'veg', 'whole'],
        ["salt", 0.25, 'spices', 'tsp'],
        ["birds eye chillies", 2, 'veg', 'whole'],
        ["coriander", 1, 'veg', 'handful'],
        ["non green pepper", 1, 'veg', 'whole']
    ],
    "Lentil Curry": [
        ['dinner', 6, 'indian', 'spicy', 'nuts'],
        ["red lentils", 500, 'tins', 'grams'],
        ["butter", 50, 'dairy', 'grams'],
        ["garlic", 4, 'spices', 'cloves'],
        ["onion", 2, 'veg', 'whole'],
        ["non green pepper", 1, 'veg', 'whole'],
        ["ginger", 1.5, 'spices', 'tbsp'],
        ["curry powder", 2, 'spices', 'tbsp'],
        ["turmeric", 0.5, 'spices', 'tsp'],
        ["cayenne", 0.5, 'spices', 'tsp'],
        ["salt", 1.25, 'spices', 'tsp'],
        ["black pepper", 0.25, 'spices', 'tsp'],
        ["coconut milk", 1, 'tins', 'tins'],
        ["chopped tomatoes", 1, 'tins', 'tins'],
        ["coriander", 1, 'veg', 'tins'],
        ["flaked almonds", 2, 'baking', 'tbsp']
    ],
    "Chicken Fajitas": [
        ['dinner', 4, 'mexican', 'spicy', 'gluten'],
        ["chicken", 2, 'meat', 'breasts'],
        ["rapeseed oil", 1, 'condiments', 'tbsp'],
        ["non green pepper", 2, 'veg', 'whole'],
        ["red onion", 2, 'veg', 'whole'],
        ["cherry tomatoes", 6, "veg", 'whole'],
        ["coriander", 2, 'veg', 'handfuls'],
        ["greek yoghurt", 8, 'dairy', 'tbsp'],
        ["salsa", 6, 'condiments', 'tbsp'],
        ["mature cheddar", 50, 'dairy', 'grams'],
        ["tortilla", 8, 'bakery', 'whole'],
        ["cornflour", 1, 'condiments', 'tbsp'],
        ["chilli powder", 2, 'spices', 'tsp'],
        ["salt", 1, 'spices', 'tsp'],
        ["paprika", 1, 'spices', 'tsp'],
        ["brown sugar", 1, 'baking', 'tsp'],
        ["onion powder", 0.5, 'spices', 'tsp'],
        ["garlic powder", 0.25, 'spices', 'tsp'],
        ["cayenne", 0.25, 'spices', 'tsp'],
        ["ground cumin", 0.25, 'spices', 'tsp'],
        ["jalapenos", 1, 'veg', 'whole']
    ],
    "Carnitas": [
        ['dinner', 8, 'mexican'],
        ["pork shoulder", 2000, 'meat', 'grams'],
        ["salt", 2.5, 'spices', 'tsp'],
        ["black pepper", 1, 'spices', 'tsp'],
        ["onion", 1, 'veg', 'whole'],
        ["jalapeno", 1, 'veg', 'whole'],
        ["garlic", 4, 'spices', 'cloves'],
        ["orange juice", 0.75, 'drinks', 'cups'],
        ["oregano", 3, 'spices', 'tsp'],
        ["cumin", 2, 'spices', 'tsp'],
        ["olive oil", 1, "condiments", 'tbsp']
    ],
    "Lentil & bacon soup": [
        ['lunch', 6, 'misc'],
        ['olive oil', 1, 'condiments', 'tbsp'],
        ['onion', 1, 'veg', 'whole'],
        ['pancetta', 300, 'meat', 'grams'],
        ['carrots', 250, 'veg', 'grams'],
        ['cumin', 1, 'spices', 'tsp'],
        ['turmeric', 0.5, 'spices', 'tsp'],
        ['garlic', 2, 'spices', 'cloves'],
        ['chilli', 1, 'veg', 'whole'],
        ['stock cubes (veg)', 2, 'condiments', 'whole'],
        ['red lentils', 250, 'tins', 'grams']
    ],
    "Broccoli & Stilton soup": [
        ['lunch', 4, 'english'],
        ["olive oil", 0.33, 'condiments', 'tbsp'],
        ['onion', 2, 'veg', 'whole'],
        ['potato', 2, 'veg', 'whole'],
        ['stock cube (veg)', 2, 'condiments', 'whole'],
        ['broccoli', 300, 'veg', 'grams'],
        ['stilton', 100, 'dairy', 'grams']
    ],
    "Couscous Salad": [
        ['lunch', 2, 'misc', 'nuts'],
        ['wholewheat couscous', 100, 'tins', 'grams'],
        ['stock cube (veg)', 1, 'condiments', 'whole'],
        ['spring onion', 2, 'veg', 'whole'],
        ['red pepper', 1, 'veg', 'whole'],
        ['cucumber', 0.25, 'veg', 'whole'],
        ['chorizo', 50, 'meat', 'grams'],
        ['feta', 50, 'dairy', 'grams'],
        ['pine nut', 2, 'baking', 'grams']
    ],
    'Thukpa': [
        ['lunch', 6, 'indian', 'spicy'],
        ['onion', 1, 'veg', 'whole'],
        ['garlic', 2, 'spices', 'cloves'],
        ['ginger', 0.33, 'spices', 'tbsp'],
        ['cumin', 1, 'spices', 'tsp'],
        ['turmeric', 0.5, 'spices', 'tsp'],
        ['szechuan pepper', 0.25, 'spices', 'tsp'],
        ['asafoetida', 0.125, 'spices', 'tsp'],
        ['green chilli', 1, 'veg', 'whole'],
        ['chopped tomatoes', 0.5, 'tins', 'tins'],
        ['rapeseed oil', 1, 'condiments', 'tbsp'],
        ['stock cube (chicken)', 3, 'condiments', 'cubes'],
        ['chicken', 1, 'meat', 'breasts'],
        ['carrot', 100, 'veg', 'grams'],
        ['red pepper', 0.5, 'veg', 'whole'],
        ['lemon juice', 1, 'condiments', 'tbsp'],
        ['salt', 1, 'spices', 'tsp'],
        ['black pepper', 1, 'spices', 'tsp'],
        ['coriander', 1, 'veg', 'handfuls'],
        ['shiitake mushrooms', 100, 'veg', 'grams'],
        ['beansprouts', 1, 'tins', 'tins']
    ],
    'Stilton Mushrooms': [
        ['lunch', 2, 'english', 'gluten'],
        ['unsalted butter', 10, 'dairy', 'grams'],
        ['mushrooms', 225, 'veg', 'grams'],
        ['garlic', 3, 'spices', 'cloves'],
        ['double cream', 80, 'dairy', 'ml'],
        ['stilton', 225, 'dairy', 'grams'],
        ['nice bread', 1, 'bakery', 'stick']
    ],
    'Italian Sausage': [
        ['lunch', 6, 'italian', 'spicy'],
        ['pork mince', 500, 'meat', 'grams'],
        ['red wine vinegar', 1, 'condiments', 'tbsp'],
        ['dried parsley', 1, 'spices', 'tsp'],
        ['dried basil', 1, 'spices', 'tsp'],
        ['garlic powder', 1, 'spices', 'tsp'],
        ['onion powder', 1, 'spices', 'tsp'],
        ['salt', 1, 'spices', 'tsp'],
        ['black pepper', 1, 'spices', 'tsp'],
        ['paprika', 0.75, 'spices', 'tsp'],
        ['chilli flakes', 0.75, 'spices', 'tsp'],
        ['fennel', 0.25, 'spices', 'tsp'],
        ['brown sugar', 0.125, 'baking', 'tsp'],
        ['oregano', 0.125, 'spices', 'tsp'],
        ['thyme', 0.125, 'spices', 'tsp']
    ],
    'McMuffin': [
        ['lunch', 4, 'american', 'gluten'],
        ['pork mince', 500, 'meat', 'grams'],
        ['sage', 0.5, 'spices', 'tsp'],
        ['thyme', 0.5, 'spices', 'tsp'],
        ['onion powder', 1, 'spices', 'tsp'],
        ['black pepper', 0.75, 'spices', 'tsp'],
        ['salt', 0.75, 'spices', 'tsp'],
        ['brown sugar', 0.5, 'baking', 'tsp'],
        ['plastic cheese', 4, 'dairy', 'slices'],
        ['rapeseed oil', 2, 'condiments', 'tbsp'],
        ['egg', 4, 'dairy', 'whole'],
        ['muffin', 4, 'bakery', 'whole']
    ],
    'Gambas Pil Pil': [
        ['lunch', 2, 'spanish', 'spicy', 'gluten'],
        ['olive oil', 6, 'condiments', 'tbsp'],
        ['raw king prawns', 180, 'meat', 'grams'],
        ['garlic', 4, 'spices', 'grams'],
        ['red chilli', 1, 'veg', 'whole'],
        ['paprika', 0.5, 'spices', 'tsp'],
        ['flat leaf parsley', 2, 'veg', 'tbsp'],
        ['nice bread', 1, 'bakery', 'stick']
    ],
    'Bruschetta': [
        ['lunch', 4, 'italian', 'gluten'],
        ['red onion', 0.5, 'veg', 'whole'],
        ['tomato', 500, 'veg', 'grams'],
        ['garlic', 3, 'spices', 'cloves'],
        ['basil', 8, 'veg', 'leaves'],
        ['balsamic vinegar', 30, 'condiments', 'ml'],
        ['extra virgin olive oil', 80, 'condiments', 'ml'],
        ['nice bread', 1, 'bakery', 'stick']
    ],
    'Burrito': [
        ['dinner', 4, 'mexican', 'spicy'],
        ['chipotle', 1, 'condiemts', 'tsp'],
        ['chilli powder', 3, 'spices', 'tsp'],
        ['cumin', 1, 'spices', 'tsp'],
        ['salt', 0.75, 'spices', 'tsp'],
        ['oregano', 0.5, 'spices', 'tsp'],
        ['garlic powder', 0.5, 'spices', 'tsp'],
        ['black pepper', 0.25, 'spices', 'tsp'],
        ['ketchup', 0.5, 'condiments', 'cups'],
        ['pork mince', 500, 'meat', 'grams'],
        ['wholewheat tortillas', 8, 'bakery', 'whole'],
        ["red onion", 2, 'veg', 'whole'],
        ["cherry tomatoes", 6, "veg", 'whole'],
        ["coriander", 2, 'veg', 'handfuls'],
        ["greek yoghurt", 8, 'dairy', 'tbsp'],
        ["salsa", 6, 'condiments', 'tbsp'],
        ["mature cheddar", 50, 'dairy', 'grams'],
        ['lettuce', 0.25, 'veg', 'whole'],
        ['kidney beans', 0.25, 'tins', 'tins'],
        ['sweetcorn', 50, 'frozen', 'grams']
    ],
    'BBQ Brisket': [
        ['dinner', 6, 'american'],
        ['olive oil', 1, 'condiments', 'tbsp'],
        ['brown sugar', 28, 'baking', 'tsp'],
        ['paprika', 2, 'spices', 'tsp'],
        ['onion powder', 3, 'spices', 'tsp'],
        ['garlic powder', 1, 'spices', 'tsp'],
        ['cumin', 0.5, 'spices', 'tsp'],
        ['mustard powder', 2.75, 'spices', 'tsp'],
        ['salt', 1, 'spices', 'tsp'],
        ['black pepper', 2.5, 'spices', 'tsp'],
        ['garlic', 2, 'spices', 'tsp'],
        ['apple cider vinegar', 0.5, 'condiments', 'cups'],
        ['ketchup', 1.5, 'condiments', 'cups'],
        ['cayenne', 1, 'spices', 'tsp'],
        ['hendersons', 3, 'condiments', 'tsp']
    ],
    'Fish Wrap': [
        ['dinner', 2, 'misc', 'gluten'],
        ['breaded fish', 2, 'frozen', 'whole'],
        ['waffle', 2, 'frozen', 'whole'],
        ['lettuce', 0.25, 'veg', 'whole'],
        ['red onion', 0.5, 'veg', 'whole'],
        ['tartare sauce', 4, 'condiments', 'tsp'],
        ['wholewheat tortillas', 4, 'bakery', 'whole']
    ],
    'Guinness Stew': [
        ['dinner', 6, 'english', 'gluten'],
        ['olive oil', 2, 'condiments', 'tbsp'],
        ['beef chuck', 1250, 'meat', 'grams'],
        ['salt', 0.75, 'spices', 'tsp'],
        ['black pepper', 0.75, 'spices', 'tsp'],
        ['garlic', 3, 'spices', 'tsp'],
        ['onion', 2, 'veg', 'whole'],
        ['pancetta', 180, 'meat', 'grams'],
        ['flour', 3, 'baking', 'tbsp'],
        ['guinness', 440, 'drinks', 'ml'],
        ['tomato paste', 4, 'condiments', 'tbsp'],
        ['stock cube (chicken)', 1, 'condiments', 'whole'],
        ['carrot', 375, 'veg', 'grams'],
        ['celery', 2, 'veg', 'whole'],
        ['bay', 2, 'spices', 'leaves'],
        ['thyme', 1, 'spices', 'tsp']
    ],
    'Chicken Casserole': [
        ['dinner', 4, 'french', 'gluten'],
        ['chicken', 1000, 'meat', 'thighs'],
        ['flour', 50, 'baking', 'grams'],
        ['onion', 2, 'veg', 'whole'],
        ['celery', 3, 'veg', 'whole'],
        ['carrot', 500, 'veg', 'grams'],
        ['pancetta', 200, 'meat', 'grams'],
        ['stock cube (chicken)', 1, 'condiments', 'whole'],
        ['mustard seeds', 6, 'spices', 'tsp'],
        ['thyme', 2, 'spices', 'tsp'],
        ['creme fraiche', 4, 'dairy', 'tbsp'],
        ['parsley', 3, 'veg', 'tbsp']
    ],
    'Roast Potatoes': [
        ['dinner', 4, 'english'],
        ['potato', 750, 'veg', 'grams'],
        ['olive oil', 2, 'condiments', 'tbsp'],
        ['smoked paprika', 0.5, 'spices', 'tsp'],
        ['garlic powder', 0.5, 'spices', 'tsp'],
        ['salt', 0.75, 'spices', 'tsp'],
        ['black pepper', 0.25, 'spices', 'tsp']
    ],
    'Lemon & Herb Chicken': [
        ['dinner', 4, 'english'],
        ['chicken', 1500, 'meat', 'grams'],
        ['onion', 1, 'veg', 'whole'],
        ['lemon', 1, 'veg', 'whole'],
        ['butter', 50, 'dairy', 'grams'],
        ['fresh thyme', 3, 'spices', 'tsp'],
        ['fresh sage', 3, 'spices', 'tsp'],
        ['garlic powder', 3, 'spices', 'tsp'],
        ['salt', 1, 'spices', 'tsp'],
        ['black pepper', 1, 'spices', 'tsp']
    ],
    'Gravy': [
        ['dinner', 4, 'english', 'gluten'],
        ['stock cube (chicken)', 1, 'condiments', 'whole'],
        ['stock cube (beef)', 1, 'condiments', 'whole'],
        ['butter', 60, 'dairy', 'grams'],
        ['flour', 4, 'baking', 'tbsp'],
        ['onion powder', 0.5, 'spices', 'tsp'],
        ['black pepper', 0.25, 'spices', 'tsp']
    ],
    'Yorkshire Puddings': [
        ['dinner', 4, 'english', 'gluten'],
        ['flour', 140, 'baking', 'grams'],
        ['egg', 4, 'dairy', 'whole'],
        ['milk', 200, 'dairy', 'ml'],
        ['rapeseed oil', 4, 'condiments', 'tbsp']
    ],
    'Beef Stew': [
        ['dinner', 6, 'english'],
        ['beef chuck', 1400, 'meat', 'grams'],
        ['salt', 2, 'spices', 'tsp'],
        ['black pepper', 1, 'spices', 'tsp'],
        ['olive oil', 3, 'condiments', 'tbsp'],
        ['onion', 2, 'veg', 'whole'],
        ['garlic', 7, 'spices', 'cloves'],
        ['balsamic vinegar', 2, 'condiments', 'tbsp'],
        ['tomato paste', 1.5, 'condiments', 'tbsp'],
        ['merlot', 480, 'drinks', 'ml'],
        ['stock cube (beef)', 1, 'condiments', 'whole'],
        ['bay', 1, 'spices', 'leaves'],
        ['thyme', 0.5, 'spices', 'tsp'],
        ['sugar', 1.5, 'baking', 'tsp'],
        ['carrot', 500, 'veg', 'grams'],
        ['small potato', 450, 'veg', 'grams'],
        ['frsh parsley', 2, 'veg', 'tbsp']
    ],
    'Sausage Casserole': [
        ['dinner', 4, 'english', 'gluten'],
        ['rapeseed oil', 1, 'condiments', 'tbsp'],
        ['sausages', 8, 'meat', 'whole'],
        ['onion', 3, 'veg', 'whole'],
        ['flour', 2, 'baking', 'tbsp'],
        ['stock cube (beef)', 1, 'condiments', 'whole'],
        ['chutney', 3, 'condiments', 'tbsp'],
        ['hendersons', 1, 'condiments', 'tbsp'],
        ['non green pepper', 1, 'veg', 'whole'],
        ['carrot', 250, 'veg', 'grams'],
        ['baked beans', 1, 'tins', 'tins'],
        ['chorizo', 50, 'meat', 'grams'],
        ['green beans', 50, 'frozen', 'grams']
    ],
    'Butter Chicken': [
        ['dinner', 4, 'indian'],
        ['chicken', 4, 'meat', 'breasts'],
        ['curry powder', 1, 'spices', 'tbsp'],
        ['garam masala', 1, 'spices', 'tbsp'],
        ['chilli powder', 3, 'spices', 'tsp'],
        ['onion', 1, 'veg', 'whole'],
        ['garlic', 4, 'spices', 'cloves'],
        ['tomato paste', 100, 'condiments', 'ml'],
        ['natural yoghurt', 0.75, 'dairy', 'cups'],
        ['coconut milk', 1, 'tins', 'tins'],
        ['butter', 100, 'dairy', 'grams'],
        ['coriander', 1, 'veg', 'handfuls']
    ],
    'Vietnamese Pork': [
        ['dinner', 4, 'indian', 'nuts'],
        ['rapeseed oil', 1.5, 'condiments', 'tbsp'],
        ['onion', 0.5, 'veg', 'whole'],
        ['ginger', 2, 'veg', 'tsp'],
        ['garlic', 2, 'spices', 'cloves'],
        ['birds eye chilli', 1, 'veg', 'whole'],
        ['pork mince', 500, 'meat', 'grams'],
        ['brown sugar', 5, 'baking', 'tbsp'],
        ['fish sauce', 2, 'condiments', 'tbsp'],
        ['pepper', 1, 'veg', 'whole'],
        ['red onion', 1, 'veg', 'whole'],
        ['coriander', 1, 'veg', 'handfuls'],
        ['spring onion', 2, 'veg', 'whole'],
        ['cashew nuts', 25, 'baking', 'grams']
    ],
    'Sweet & Sour Chicken': [
        ['dinner', 4, 'chinese', 'nuts'],
        ['onion', 1, 'veg', 'whole'],
        ['tomato paste', 3, 'condiments', 'tbsp'],
        ['light soy sauce', 3, 'condiments', 'tbsp'],
        ['garlic', 4, 'spices', 'cloves'],
        ['ginger', 6, 'veg', 'tsp'],
        ['honey', 4, 'baking', 'tbsp'],
        ['white wine vinegar', 4, 'condiments', 'tbsp'],
        ['dark brown sugar', 2, 'baking', 'tbsp'],
        ['non green pepper', 3, 'veg', 'whole'],
        ['pineapples in juice', 435, 'tins', 'grams'],
        ['cornflour', 3, 'condiments', 'tbsp'],
        ['spring onion', 2, 'veg', 'whole'],
        ['cashew nuts', 25, 'baking', 'grams'],
        ['chicken', 700, 'meat', 'grams']
    ],
    'Chicken Tikka Paste': [
        ['dinner', 0, 'indian'],
        ['garlic', 2, 'spices', 'cloves'],
        ['red chilli', 1, 'veg', 'whole'],
        ['ginger', 2, 'veg', 'tsp'],
        ['garam masala', 2, 'spices', 'tsp'],
        ['paprika', 1, 'spices', 'tsp'],
        ['coriander', 1, 'spices', 'tsp'],
        ['cumin', 0.5, 'spices', 'tsp'],
        ['tomato paste', 1, 'condiments', 'tbsp'],
        ['coriander', 1, 'veg', 'handfuls'],
        ['rapeseed oil', 1, 'condiments', 'tbsp']
    ],
    'Chicken Tikka Curry': [
        ['dinner', 4, 'indian', 'nuts'],
        ['chicken', 700, 'meat', 'grams'],
        ['onion', 1, 'veg', 'whole'],
        ['chopped tomatoes', 1, 'tins', 'tins'],
        ['salt', 1, 'spices', 'tsp'],
        ['garlic', 3, 'spices', 'tsp'],
        ['tikka paste', 150, 'spices', 'grams'],
        ['mango chutney', 4, 'condiments', 'tbsp'],
        ['tomato paste', 3, 'condiments', 'tbsp'],
        ['coriander', 1, 'veg', 'handfuls'],
        ['garam masala', 2, 'spices', 'tsp'],
        ['creme fraiche', 100, 'dairy', 'ml']
    ],
    'Beef Curry': [
        ['dinner', 8, 'indian', 'spicy'],
        ['beef chuck', 1000, 'meat', 'grams'],
        ['ghee', 2, 'dairy', 'tbsp'],
        ['onion', 2, 'veg', 'cups'],
        ['ginger', 6, 'veg', 'tsp'],
        ['garlic', 6, 'spices', 'tsp'],
        ['yoghurt', 1, 'dairy', 'cups'],
        ['bay', 2, 'spices', 'leaves'],
        ['curry powder', 4, 'spices', 'tbsp'],
        ['cayenne', 0.5, 'spices', 'tsp'],
        ['paprika', 2, 'spices', 'tsp'],
        ['garam masala', 1, 'spices', 'tsp'],
        ['lemon juice', 2, 'condiments', 'tbsp'],
        ['salt', 0.5, 'spices', 'tsp'],
        ['black pepper', 0.5, 'spices', 'tsp'],
        ['coriander', 1, 'veg', 'handful']
    ],
    'Chicken Tikka Wrap': [
        ['dinner', 4, 'indian', 'nuts'],
        ['chicken', 3, 'meat', 'breasts'],
        ['greek yoghurt', 120, 'dairy', 'grams'],
        ['garlic', 2, 'spices', 'cloves'],
        ['lemon juice', 3, 'condiments', 'tbsp'],
        ['coriander', 1, 'spices', 'tsp'],
        ['turmeric', 0.5, 'spices', 'tsp'],
        ['cumin', 0.5, 'spices', 'tsp'],
        ['paprika', 1, 'spices', 'tsp'],
        ['mild chilli powder', 0.5, 'spices', 'tsp'],
        ['cinnamon', 0.125, 'spices', 'tsp'],
        ['salt', 0.5, 'spices', 'tsp'],
        ['black pepper', 0.5, 'spices', 'tsp'],
        ['rapeseed oil', 2, 'condiments', 'tbsp'],
        ['coriander', 1, 'veg', 'handfuls'],
        ['wholewheat tortillas', 8, 'bakery', 'whole'],
        ['tomatoes', 4, 'veg', 'whole'],
        ['lettuce', 0.25, 'veg', 'whole'],
        ['red onion', 1, 'veg', 'whole'],
        ['cucumber', 0.25, 'veg', 'whole'],
        ['greek yoghurt', 8, 'dairy', 'tbsp'],
        ['mango chutney', 4, 'condiments', 'tbsp'],
    ],
    'Onion Bhaji': [
        ['dinner', 0, 'indian', 'spicy'],
        ['onion', 2, 'veg', 'whole'],
        ['red onion', 1, 'veg', 'whole'],
        ['salt', 1, 'spices', 'tsp'],
        ['garlic', 2, 'spices', 'tsp'],
        ['ginger', 6, 'veg', 'tsp'],
        ['green chilli', 3, 'veg', 'whole'],
        ['kashmiri chilli powder', 1, 'spices', 'tsp'],
        ['rapeseed oil', 2, 'condiments', 'tbsp'],
        ['turmeric', 0.5, 'spices', 'tsp'],
        ['rice flour', 4, 'condiments', 'tbsp'],
        ['gram flour', 140, 'condiments', 'grams'],
        ['coriander', 1, 'veg', 'handfuls']
    ],
    'Raxo': [
        ['dinner', 2, 'spanish'],
        ['pork tenderloin', 680, 'meat', 'grams'],
        ['salt', 1.5, 'spices', 'tsp'],
        ['black pepper', 1, 'spices', 'tsp'],
        ['parsley', 0.5, 'veg', 'cups'],
        ['oregano', 3, 'spices', 'tsp'],
        ['paprika', 3, 'spices', 'tsp'],
        ['garlic', 4, 'spices', 'cloves'],
        ['white wine', 0.66, 'drinks', 'cups'],
        ['olive oil', 0.33, 'condiments', 'cups']
    ],
    'Korean Fried Chicken': [
        ['dinner', 4, 'korean', 'spicy', 'gluten'],
        ['chicken', 500, 'meat', 'grams'],
        ['rapeseed oil', 1, 'condiments', 'tbsp'],
        ['beansprouts', 1, 'tins', 'tins'],
        ['kimchi', 1, 'tins', 'jars'],
        ['lettuce', 0.25, 'veg', 'whole'],
        ['cucumber', 0.25, 'veg', 'whole'],
        ['wholewheat tortillas', 8, 'bakery', 'whole'],
        ['cornflour', 3, 'condiments', 'tbsp'],
        ['ketchup', 1, 'condiments', 'tbsp'],
        ['gochujang', 1, 'condiments', 'tbsp'],
        ['honey', 1, 'baking', 'tbsp'],
        ['brown sugar', 1, 'baking', 'tbsp'],
        ['light soy sauce', 0.5, 'condiments', 'tbsp'],
        ['sesame oil', 0.5, 'condiments', 'tbsp'],
        ['ginger', 1.5, 'condiments', 'tsp'],
        ['garlic', 2, 'spices', 'tsp']
    ],
    'Fries': [
        ['dinner', 0, 'belgian'],
        ['potato', 500, 'veg', 'grams'],
        ['olive oil', 1, 'condiments', 'tbsp'],
        ['garlic powder', 1.5, 'spices', 'tsp']
    ],
    'Gyros': [
        ['dinner', 4, 'greek', 'gluten'],
        ['pork tenderloin', 650, 'meat', 'grams'],
        ['garlic', 1, 'spices', 'cloves'],
        ['red onion', 1.5, 'veg', 'whole'],
        ['olive oil', 4, 'condiments', 'tbsp'],
        ['red wine vinegar', 2, 'condiments', 'tbsp'],
        ['oregano', 3, 'spices', 'tsp'],
        ['thyme', 3, 'spices', 'tsp'],
        ['rosemary', 3, 'spices', 'tsp'],
        ['honey', 0.5, 'baking', 'tbsp'],
        ['tomato', 1, 'veg', 'whole'],
        ['lettuce', 0.25, 'veg', 'whole'],
        ['greek yoghurt', 8, 'dairy', 'tbsp'],
        ['pitta', 4, 'baking', 'whole']
    ],
    'Doner': [
        ['dinner', 4, 'greek', 'spicy', 'gluten'],
        ['lamb mince', 750, 'meat', 'grams'],
        ['onion powder', 3, 'spices', 'tsp'],
        ['garlic', 3, 'spices', 'cloves'],
        ['cumin', 3, 'spices', 'tsp'],
        ['paprika', 3, 'spices', 'tsp'],
        ['oregano', 2, 'spices', 'tsp'],
        ['salt', 1, 'spices', 'tsp'],
        ['black pepper', 0.5, 'spices', 'tsp'],
        ['lettuce', 0.25, 'veg', 'whole'],
        ['cucumber', 0.25, 'veg', 'whole'],
        ['tomato', 1, 'veg', 'whole'],
        ['red onion', 1, 'veg', 'whole'],
        ['pitta', 4, 'bakery', 'whole']
    ],
    'Chilli Sauce': [
        ['dinner', 0, 'greek', 'spicy'],
        ['vinegar', 100, 'condiments', 'ml'],
        ['sugar', 50, 'baking', 'grams'],
        ['red chilli', 2, 'veg', 'whole'],
        ['ketchup', 100, 'condiments', 'ml'],
        ['hendersons', 1, 'condiments', 'tsp']
    ],
    'Bulgogi': [
        ['dinner', 2, 'korean', 'spicy', 'gluten'],
        ['sirloin steak', 450, 'meat', 'grams'],
        ['light soy sauce', 2, 'condiments', 'tbsp'],
        ['honey', 4, 'baking', 'tsp'],
        ['sesame oil', 4, 'condiments', 'tsp'],
        ['onion', 0.25, 'veg', 'whole'],
        ['ginger', 3, 'veg', 'tsp'],
        ['garlic', 4, 'spices', 'cloves'],
        ['black pepper', 0.5, 'spices', 'tsp'],
        ['mayonnaise', 4, 'condiments', 'tbsp'],
        ['baguette', 1, 'bakery', 'stick'],
        ['spring onion', 2, 'veg', 'whole'],
        ['red chilli', 1, 'veg', 'whole'],
        ['rocket', 70, 'veg', 'grams']
    ],
    'Reuben': [
        ['lunch', 2, 'american', 'gluten'],
        ['rye bread', 4, 'bakery', 'slices'],
        ['pastrami', 6, 'meat', 'slices'],
        ['sauerkraut', 8, 'tins', 'tbsp'],
        ['emmenthal', 4, 'dairy', 'slices'],
        ['french dressing', 2, 'condiments', 'tbsp']
    ],
    'Croque Monsieur': [
        ['lunch', 2, 'french', 'gluten'],
        ['unsalted butter', 0.125, 'dairy', 'cups'],
        ['flour', 0.125, 'baking', 'cups'],
        ['whole milk', 0.75, 'dairy', 'cups'],
        ['dijon', 0.125, 'condiments', 'tsp'],
        ['nutmeg', 0.125, 'spices', 'tsp'],
        ['bread', 4, 'baking', 'slices'],
        ['ham', 4, 'meat', 'slices'],
        ['emmenthal', 4, 'dairy', 'slices'],
        ['parmesan', 0.125, 'dairy', 'cups']
    ],
    'French Dressing': [
        ['lunch', 0, 'french'],
        ['dijon', 1, 'condiments', 'tsp'],
        ['white wine vinegar', 2, 'condiments', 'tbsp'],
        ['extra virgin olive oil', 6, 'condiments', 'tbsp'],
        ['sugar', 0.125, 'baking', 'tsp'],
        ['salt', 0.125, 'spices', 'tsp'],
        ['black pepper', 0.125, 'spices', 'tsp']
    ],
    'Apple Cider Dressing': [
        ['lunch', 0, 'english'],
        ['extra virgin olive oil', 0.33, 'condiments', 'cups'],
        ['apple cider vinegar', 0.25, 'condiments', 'cups'],
        ['dijon', 3, 'condiments', 'tsp'],
        ['honey', 1, 'baking', 'tbsp'],
        ['garlic', 1, 'spices', 'tsp'],
        ['salt', 0.5, 'spices', 'tsp'],
        ['black pepper', 0.5, 'spices', 'tsp']
    ],
    'Italian Dressing': [
        ['lunch', 0, 'french'],
        ['dijon', 2, 'condiments', 'tsp'],
        ['red wine vinegar', 3, 'condiments', 'tbsp'],
        ['extra virgin olive oil', 0.5, 'condiments', 'cup'],
        ['honey', 1, 'baking', 'tbsp'],
        ['salt', 0.5, 'spices', 'tsp'],
        ['black pepper', 0.25, 'spices', 'tsp'],
        ['italian seasoning', 1, 'spices', 'tsp'],
        ['garlic', 2, 'spices', 'tsp']
    ],
    'Lemon Dressing': [
        ['lunch', 0, 'french', 'spicy'],
        ['extra virgin olive oil', 0.75, 'condiments', 'cups'],
        ['white wine vinegar', 0.25, 'condiments', 'cups'],
        ['garlic powder', 1, 'spices', 'tsp'],
        ['oregano', 1, 'spices', 'tsp'],
        ['basil', 1, 'spices', 'tsp'],
        ['lemon juice', 1, 'spices', 'tsp'],
        ['onion powder', 0.5, 'spices', 'tsp'],
        ['dried chilli', 0.5, 'spices', 'tsp'],
        ['salt', 0.75, 'spices', 'tsp'],
        ['black pepper', 0.5, 'spices', 'tsp']
    ]
}

export default recipes;