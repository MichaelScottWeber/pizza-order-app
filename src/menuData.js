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
                imageUrl: 'https://images.unsplash.com/photo-1509403491765-9fb9d773ca6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                quantity: 1,
                currentSize: 'large',
                availableSizes: [
                    { size: 'small', price: 8.99 },
                    { size: 'medium', price: 11.99 },
                    { size: 'large', price: 14.99 },
                    { size: 'extra-large', price: 17.99 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normail' },
                    cheese: { include: true, split: 'whole', amount: 'normal' },
                    toppings: []
                },
            },
            {
                id: 102,
                name: 'Cheese',
                description: 'Mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: 'https://images.unsplash.com/photo-1583990504911-89fcd98d0c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                quantity: 1,
                currentSize: 'large',
                availableSizes: [
                    { size: 'small', price: 8.99 },
                    { size: 'medium', price: 11.99 },
                    { size: 'large', price: 14.99 },
                    { size: 'extra-large', price: 17.99 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normail' },
                    cheese: { include: true, split: 'whole', amount: 'normal' },
                    toppings: []
                },
            },
            {
                id: 103,
                name: 'Pepperoni',
                description: 'Pepperoni slices on top of mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: 'https://images.unsplash.com/photo-1591484506290-803ed645eb54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                quantity: 1,
                currentSize: 'large',
                availableSizes: [
                    { size: 'small', price: 9.49 },
                    { size: 'medium', price: 12.49 },
                    { size: 'large', price: 15.49 },
                    { size: 'extra-large', price: 18.49 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normail' },
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
                imageUrl: 'https://images.unsplash.com/photo-1590083745251-4fdb0b285c6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                quantity: 1,
                currentSize: 'large',
                availableSizes: [
                    { size: 'small', price: 9.49 },
                    { size: 'medium', price: 12.49 },
                    { size: 'large', price: 15.49 },
                    { size: 'extra-large', price: 18.49 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normail' },
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
                imageUrl: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                quantity: 1,
                currentSize: 'large',
                availableSizes: [
                    { size: 'small', price: 9.99 },
                    { size: 'medium', price: 12.99 },
                    { size: 'large', price: 15.99 },
                    { size: 'extra-large', price: 18.99 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normail' },
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
                imageUrl: 'https://images.unsplash.com/photo-1527133256227-fc3549f55332?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                quantity: 1,
                currentSize: 'large',
                availableSizes: [
                    { size: 'small', price: 9.99 },
                    { size: 'medium', price: 12.99 },
                    { size: 'large', price: 15.99 },
                    { size: 'extra-large', price: 18.99 },
                ],
                specialInstructions: '',
                ingredients: {
                    crust: 'thin',
                    sauce: { type: 'tomato', amount: 'normail' },
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
                name: 'Mozzerella Sticks',
                description: 'Fried mozzerella cheese, with a marinera dipping sauce.',
                quantity: 1,
                imageUrl: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                price: 9.99
            },
            {
                id: 202,
                name: 'Boneless Wings',
                description: 'Fried breast-meat chicken, dipped in buffalo sauce.  Comes with ranch dressing and celery sricks.',
                quantity: 1,
                imageUrl: 'https://images.unsplash.com/photo-1571162437205-8889ff2fee26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                price: 9.99
            },
        ]
    }
]

export default menuData;