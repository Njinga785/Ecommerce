
const initialState = {
    products: []
}


const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-PRODUCTS": 
            return {
                ...state,
                products: action.products
            };
        case "ADD-PRODUCT": 
            return {
                ...state,
                products: [...state.products, action.product]
            };
        default: {
            return {
                ...state
            };
        }
    }
}

export default productsReducer   