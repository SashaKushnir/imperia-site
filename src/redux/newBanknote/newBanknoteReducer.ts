import { ActionsTypes } from "../store";
import { newBanknoteActions } from "./newBanknoteActions";

let initialState = {
    menus: [
        {
            id: 10,
            menu_category: {
                id: 22,
                name: "Bar",
                description: "some text or null"
            },

            product_categories: [
                {
                    id: 122,
                    name: "Cold drinks",
                    description: "some text or null",
                    products: [
                        {
                            id: 55,
                            name: "Lemonade",
                            description: "Cool and bitter lemonade.",
                            price: "10000",
                            weight: "500",

                            menu_id: 10,
                            category_id: 122
                        },
                        {
                            id: 56,
                            name: "Mojito",
                            description: "Lemon and lime paradise.",
                            price: "12500",
                            weight: "200",

                            menu_id: 10,
                            category_id: 122
                        }
                    ]
                }
            ]
        },
        {
            id: 11,
            menu_category: {
                id: 23,
                name: "Kitchen",
                description: "some text or null"
            },

            product_categories: [
                {
                    id: 126,
                    name: "Breakfast",
                    description: "some text or null",
                    products: [
                        {
                            id: 55,
                            name: "Waffles",
                            description: "Waffles with honey and blueberries",
                            price: "21000",
                            weight: "300",

                            menu_id: 11,
                            category_id: 126
                        },
                        {
                            id: 56,
                            name: "Mojito",
                            description: "Lemon and lime paradise.",
                            price: "12500",
                            weight: "200",

                            menu_id: 10,
                            category_id: 122
                        }
                    ]
                }
            ]
        }
    ],

    response_status: true,
    response_error: null
}
export type MenuItem = typeof initialState.menus[0]
type NewBanknote = {
    menus: Array<typeof initialState.menus[0]>
    response_status : boolean
    response_error: string | null
}

export const newBanknoteReducer = (newBanknote:NewBanknote = initialState, action : ActionsTypes<typeof newBanknoteActions>) : NewBanknote => {

    switch (action.type) {

        default:
            return newBanknote
    }
}

// Thunk