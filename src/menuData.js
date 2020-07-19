const menuData = [
    {
        category: 'Pizzas',
        description: 'Crust, sauce, and toppings.  So simple, yet so many tasty combinations.',
        items: [
            {
                name: 'Create Your Own',
                description: 'Order your pizza just how you like it - topped with your favorite ingredients and cooked just the way you want',
                size: 'large',
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
                size: 'large',
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
                size: 'large',
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
                size: 'large',
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
                size: 'large',
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
                size: 'large',
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
        items: [
            {
                name: 'Mozzerella Sticks',
                description: 'Fried mozzerella cheese, with a marinera dipping sauce.'
            },
            {
                name: 'Boneless Wings',
                description: 'Fried breast-meat chicken, dipped in buffalo sauce.  Comes with ranch dressing and celery sricks.'
            },
        ]
    }
]

export default menuData;