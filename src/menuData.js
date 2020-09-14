import pizzaImg1 from './img/food-images/pizza-image-1.png'
import pizzaImg2 from './img/food-images/pizza-image-2.png'
import pizzaImg3 from './img/food-images/pizza-image-3.png'
import appImg1 from './img/food-images/app-image-1.png'
import appImg2 from './img/food-images/app-image-2.png'
import appImg3 from './img/food-images/app-image-3.png'
import saladImg1 from './img/food-images/salad-image-1.png'
import saladImg2 from './img/food-images/salad-image-2.png'
import saladImg3 from './img/food-images/salad-image-3.png'
import sandwichImg1 from './img/food-images/sandwich-image-1.png'
import sandwichImg2 from './img/food-images/sandwich-image-2.png'
import sandwichImg3 from './img/food-images/sandwich-image-3.png'
import dessertImg1 from './img/food-images/dessert-image-1.png'
import dessertImg2 from './img/food-images/dessert-image-2.png'
import dessertImg3 from './img/food-images/dessert-image-3.png'

const menuData = [
    {
        id: 1,
        category: 'Pizzas',
        description: 'Crust, sauce, and toppings.  So simple, yet so many tasty combinations.',
        imageUrl: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        items: [
            {
                id: 101,
                name: 'Create Your Own',
                description: 'Order your pizza just how you like it - topped with your favorite ingredients and cooked just the way you want',
                imageUrl: pizzaImg1,
                quantity: 1,
                currentSize: 'large',
                currentPrice: null,
                availableSizes: [
                    { size: 'small', price: 8.99 },
                    { size: 'medium', price: 11.99 },
                    { size: 'large', price: 14.99 },
                    { size: 'extra-large', price: 17.99 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normal' },
                    cheese: { include: true, split: 'whole', amount: 'normal' },
                    toppings: []
                },
            },
            {
                id: 102,
                name: 'Cheese',
                description: 'Mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: pizzaImg2,
                quantity: 1,
                currentSize: 'large',
                currentPrice: null,
                availableSizes: [
                    { size: 'small', price: 8.99 },
                    { size: 'medium', price: 11.99 },
                    { size: 'large', price: 14.99 },
                    { size: 'extra-large', price: 17.99 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normal' },
                    cheese: { include: true, split: 'whole', amount: 'normal' },
                    toppings: []
                },
            },
            {
                id: 103,
                name: 'Pepperoni',
                description: 'Pepperoni slices on top of mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: pizzaImg3,
                quantity: 1,
                currentSize: 'large',
                currentPrice: null,
                availableSizes: [
                    { size: 'small', price: 9.49 },
                    { size: 'medium', price: 12.49 },
                    { size: 'large', price: 15.49 },
                    { size: 'extra-large', price: 18.49 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normal' },
                    cheese: { include: true, split: 'whole', amount: 'normal' },
                    toppings: [
                        {
                            name: 'pepperoni',
                            include: true,
                            split: 'whole',
                            amount: 'normal'
                        }
                    ]
                },
            },
            {
                id: 104,
                name: 'Sausage',
                description: 'Lean sausage on top of mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: pizzaImg1,
                quantity: 1,
                currentSize: 'large',
                currentPrice: null,
                availableSizes: [
                    { size: 'small', price: 9.49 },
                    { size: 'medium', price: 12.49 },
                    { size: 'large', price: 15.49 },
                    { size: 'extra-large', price: 18.49 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normal' },
                    cheese: { include: true, split: 'whole', amount: 'normal' },
                    toppings: [
                        {
                            name: 'sausage',
                            include: true,
                            split: 'whole',
                            amount: 'normal'
                        }
                    ]
                },
            },
            {
                id: 105,
                name: 'Veggie',
                description: 'Mushrooms, black olives, and green peppers on top of mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: pizzaImg2,
                quantity: 1,
                currentSize: 'large',
                currentPrice: null,
                availableSizes: [
                    { size: 'small', price: 9.99 },
                    { size: 'medium', price: 12.99 },
                    { size: 'large', price: 15.99 },
                    { size: 'extra-large', price: 18.99 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normal' },
                    cheese: { include: true, split: 'whole', amount: 'normal' },
                    toppings: [
                        {
                            name: 'mushrooms',
                            include: true,
                            split: 'whole',
                            amount: 'normal'
                        },
                        {
                            name: 'black olives',
                            include: true,
                            split: 'whole',
                            amount: 'normal'
                        },
                        {
                            name: 'green peppers',
                            include: true,
                            split: 'whole',
                            amount: 'normal'
                        }
                    ]
                },
            },
            {
                id: 106,
                name: 'Hawaiian',
                description: 'Pineapple and ham on top of mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: pizzaImg3,
                quantity: 1,
                currentSize: 'large',
                currentPrice: null,
                availableSizes: [
                    { size: 'small', price: 9.99 },
                    { size: 'medium', price: 12.99 },
                    { size: 'large', price: 15.99 },
                    { size: 'extra-large', price: 18.99 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normal' },
                    cheese: { include: true, split: 'whole', amount: 'normal' },
                    toppings: [
                        {
                            name: 'pineapple',
                            include: true,
                            split: 'whole',
                            amount: 'normal'
                        },
                        {
                            name: 'ham',
                            include: true,
                            split: 'whole',
                            amount: 'normal'
                        }
                    ]
                },
            },
        ]
    },
    {
        id: 2,
        category: 'Appetizers',
        description: 'A delicious way to start your meal.',
        imageUrl: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        items: [
            {
                id: 201,
                name: 'Bread Sticks',
                description: 'Toasted and topped with seasonings. Comes with marinara dipping sauce.',
                quantity: 1,
                imageUrl: appImg1,
                currentPrice: 9.99
            },
            {
                id: 202,
                name: 'Mozzerella Sticks',
                description: 'Fried mozzerella cheese, with a marinera dipping sauce.',
                quantity: 1,
                imageUrl: appImg2,
                currentPrice: 9.99
            },
            {
                id: 203,
                name: 'Bruschetta',
                description: 'Grilled bread topped with olive oil, fresh tomatoes and basil.',
                quantity: 1,
                imageUrl: appImg3,
                currentPrice: 9.99
            },
            {
                id: 204,
                name: 'Boneless Wings',
                description: 'Fried breast-meat chicken, dipped in buffalo sauce.  Comes with ranch dressing and celery sticks.',
                quantity: 1,
                imageUrl: appImg1,
                currentPrice: 9.99
            },
        ]
    },
    {
        id: 3,
        category: 'Salads',
        description: 'Made to order with garden-fresh ingredients.',
        imageUrl: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        items: [
            {
                id: 301,
                name: 'House Salad',
                description: 'Our own signature salad, with romaine lettuce, croutons, tomatoes, cucumbers, cheddar chese and our house dressing.',
                quantity: 1,
                imageUrl: saladImg3,
                currentSize: 'large',
                currentPrice: null,
                availableSizes: [
                    { size: 'small', price: 6.99 },
                    { size: 'large', price: 12.99 },
                ],
                specialInstructions: '',
            },
            {
                id: 302,
                name: 'Caesar Salad',
                description: 'Romaine lettuce and croutons, topped with caesar dressing adn parmesan cheese.',
                quantity: 1,
                imageUrl: saladImg2,
                currentSize: 'large',
                currentPrice: null,
                availableSizes: [
                    { size: 'small', price: 6.99 },
                    { size: 'large', price: 12.99 },
                ],
                specialInstructions: '',
            },
            // {
            //     id: 303,
            //     name: 'Cobb Salad',
            //     description: 'Romaine lettuce, tomato, crisp bacon, hard-boiled egg, blue cheese, and avocado with a red-wine vinaigrette.',
            //     quantity: 1,
            //     imageUrl: saladImg3,
            //     currentSize: 'large',
            //     currentPrice: null,
            //     availableSizes: [
            //         { size: 'small', price: 6.99 },
            //         { size: 'large', price: 12.99 },
            //     ],
            //     specialInstructions: '',
            // },
        ]
    },
    {
        id: 4,
        category: 'Sandwiches',
        description: 'For when you want something hardy to eat that isn\'t pizza.',
        imageUrl: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        items: [
            {
                id: 401,
                name: 'Cheese Burger',
                description: 'A juicy 1/3lb patty with lettuce, tomato and cheddar cheese on a brioche bun.',
                quantity: 1,
                imageUrl: sandwichImg1,
                currentPrice: 9.99,
                specialInstructions: '',
            },
            {
                id: 402,
                name: 'BLT Club',
                description: 'Bacon, lettuce, tomato and mayo on wheat toast.',
                quantity: 1,
                imageUrl: sandwichImg2,
                currentPrice: 7.99,
                specialInstructions: '',
            },
            {
                id: 403,
                name: 'Grilled Cheese',
                description: 'A blend of cheddar and mozzarella cheese, melted between two slices of italian bread.',
                quantity: 1,
                imageUrl: sandwichImg3,
                currentPrice: 6.99,
                specialInstructions: '',
            },
        ]
    },
    {
        id: 5,
        category: 'Desserts',
        description: 'A delicious post-dinner treat.',
        imageUrl: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        items: [
            {
                id: 501,
                name: 'Chocolate Cupcake',
                description: 'Fresh from the bakery, with tons of frosting!',
                quantity: 1,
                imageUrl: dessertImg1,
                currentPrice: 3.99,
                specialInstructions: '',
            },
            {
                id: 502,
                name: 'Tiramisu',
                description: 'Our delicious take on the classic coffee-flavored cake.',
                quantity: 1,
                imageUrl: dessertImg2,
                currentPrice: 7.99,
                specialInstructions: '',
            },
            {
                id: 503,
                name: 'Brownie Sundae',
                description: 'Rich vanilla bean ice cream on a warm chocolate brownie, topped with fudge and a cherry',
                quantity: 1,
                imageUrl: dessertImg3,
                currentPrice: 7.99,
                specialInstructions: '',
            },
        ]
    },
]

export default menuData;