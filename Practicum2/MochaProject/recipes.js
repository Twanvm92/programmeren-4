/**
 * Created by twanv on 4-5-2017.
 */
// Sample recipes database
// Source: https://en.wikibooks.org/wiki/Cookbook
var recipes = [
    {
        name: 'Lasagne with bean sauce',
        category: 'Pasta',
        procedure: 'Steps for making lasagne',
        ingredients: [
            '1/2 Tbsp. olive oil',
            '1/2 small onion, minced',
            '1 400g (15. oz) can of navy beans, drained and chopped',
            '1/2 tsp. oregano',
            '240g (1 cup) tomato sauce'
        ]
    },
    {
        name: 'Calzone',
        category: 'Pizza',
        procedure: 'Steps to make calzone (pizza)',
        ingredients: [
            '1 cup (240 mL) ricotta cheese',
            '1 cup (240 mL) shredded mozzarella cheese',
            '4 ounces (115 g) any topping (such as ham, bacon, salami, pepperoni, and/or sausage) (optional)',
            '2 teaspoons (10 mL) oregano',
            '1 package pizza dough (store-bought)'
        ]
    },
    {
        name: 'Tuna Salad',
        category: 'Salad',
        procedure: [
            'Mix ingredients in a bowl',
            'Chill before serving'
        ],
        ingredients: [
            '1 can tuna',
            '1 can water chestnuts, drained and chopped',
            '½ small onion, chopped',
            '½ cup carrot, shredded',
            '150ml tomato sauce'

        ]
    }
];
module.exports = recipes;
