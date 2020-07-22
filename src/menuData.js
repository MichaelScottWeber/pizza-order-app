const menuData = [
    {
        category: 'Pizzas',
        description: 'Crust, sauce, and toppings.  So simple, yet so many tasty combinations.',
        imageUrl: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        items: [
            {
                name: 'Create Your Own',
                description: 'Order your pizza just how you like it - topped with your favorite ingredients and cooked just the way you want',
                imageUrl: 'https://images.unsplash.com/photo-1509403491765-9fb9d773ca6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                size: 'large',
                price: {
                    S: 8.99,
                    M: 11.99,
                    L: 14.99,
                    XL: 17.99
                },
                specialInstructions: '',
                ingredients: [
                    { crust: 'thin' },
                    { sauce: {
                        type: 'vine-ripened tomato',
                        amount: 'normal'
                    }},
                    { cheese: {
                        include: true,
                        split: 'whole',
                        amount: 'normal'
                    }},
                    { toppings: [] }
                ]
            },
            {
                name: 'Cheese',
                description: 'Mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: 'https://images.unsplash.com/photo-1583990504911-89fcd98d0c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                size: 'large',
                price: {
                    S: 8.99,
                    M: 11.99,
                    L: 14.99,
                    XL: 17.99
                },
                specialInstructions: '',
                ingredients: [
                    { crust: 'thin' },
                    { sauce: {
                        type: 'vine-ripened tomato',
                        amount: 'normal'
                    }},
                    { cheese: {
                        include: true,
                        split: 'whole',
                        amount: 'normal'
                    }},
                    { toppings: [] }
                ]
            },
            {
                name: 'Pepperoni',
                description: 'Pepperoni slices on top of mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: 'https://images.unsplash.com/photo-1591484506290-803ed645eb54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                size: 'large',
                price: {
                    S: 9.49,
                    M: 12.49,
                    L: 15.49,
                    XL: 18.49
                },
                specialInstructions: '',
                ingredients: [
                    { crust: 'thin' },
                    { sauce: {
                        type: 'vine-ripened tomato',
                        amount: 'normal'
                    }},
                    { cheese: {
                        include: true,
                        split: 'whole',
                        amount: 'normal'
                    }},
                    { toppings: [
                        {
                            name: 'pepperoni',
                            include: true,
                            split: 'whole',
                            amount: 'normal'
                        }
                    ]}
                ]
            },
            {
                name: 'Sausage',
                description: 'Lean sausage on top of mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: 'https://images.unsplash.com/photo-1590083745251-4fdb0b285c6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                size: 'large',
                price: {
                    S: 9.49,
                    M: 12.49,
                    L: 15.49,
                    XL: 18.49
                },
                specialInstructions: '',
                ingredients: [
                    { crust: 'thin' },
                    { sauce: {
                        type: 'vine-ripened tomato',
                        amount: 'normal'
                    }},
                    { cheese: {
                        include: true,
                        split: 'whole',
                        amount: 'normal'
                    }},
                
                    { toppings: [
                        {
                            name: 'sausage',
                            include: true,
                            split: 'whole',
                            amount: 'normal'
                        }
                    ]}
                ]
            },
            {
                name: 'Veggie',
                description: 'Mushrooms, black olives, and green peppers on top of mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                size: 'large',
                price: {
                    S: 9.99,
                    M: 12.99,
                    L: 15.99,
                    XL: 18.99
                },
                specialInstructions: '',
                ingredients: [
                    { crust: 'thin' },
                    { sauce: {
                        type: 'vine-ripened tomato',
                        amount: 'normal'
                    }},
                    { cheese: {
                        include: true,
                        split: 'whole',
                        amount: 'normal'
                    }},
                    { toppings: [
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
                    ]}
                ]
            },
            {
                name: 'Hawaiian',
                description: 'Pineapple and ham on top of mozzarella cheese and vine-ripened tomato sauce on your choice of crust',
                imageUrl: 'https://images.unsplash.com/photo-1527133256227-fc3549f55332?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                size: 'large',
                price: {
                    S: 9.99,
                    M: 12.99,
                    L: 15.99,
                    XL: 18.99
                },
                specialInstructions: '',
                ingredients: [
                    { crust: 'thin' },
                    { sauce: {
                        type: 'vine-ripened tomato',
                        amount: 'normal'
                    }},
                    { cheese: {
                        include: true,
                        split: 'whole',
                        amount: 'normal'
                    }},
                    { toppings: [
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
                    ]}
                ]
            },
        ]
    },
    {
        category: 'Appetizers',
        description: 'A delicious way to start your meal.',
        imageUrl: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        items: [
            {
                name: 'Mozzerella Sticks',
                description: 'Fried mozzerella cheese, with a marinera dipping sauce.',
                imageUrl: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                price: 9.99
            },
            {
                name: 'Boneless Wings',
                description: 'Fried breast-meat chicken, dipped in buffalo sauce.  Comes with ranch dressing and celery sricks.',
                imageUrl: 'https://images.unsplash.com/photo-1571162437205-8889ff2fee26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                price: 9.99
            },
        ]
    }
]

export default menuData;