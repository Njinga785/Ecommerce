const initialState = {
    token: "",
    name: "",
    email: "",
    id: "",
    user_products: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN-IN":
            return {
                ...state,
                token: action.token,
                name: action.name,
                email: action.email,
                id: action.id
            };
        case "SIGN-OUT": 
            return {
                ...state, 
                token: "",
                name: "",
                email: "",
                id: "",
                user_products: []
            }
        case "USER-PRODUCTS":
            return {
                ...state,
                user_products: [...state.user_products, action.user_products]
            }
        default: {
            return {
                ...state
            }
        }
    }
}

export default userReducer