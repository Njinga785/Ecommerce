const initialStates = {} 

const productReducer = (state = initialStates, action) => {
    switch(action.type) {
        case "ADD_PRODUCT": 
        return {
            ...state, 
           product: action.product
        }; 

        case "DELETE_PRODUCT": 
        return state.filter(({id}) => id !== action.id); 

        case "GET_PRODUCT": 
        return action.product; 

        case "CREATE_PRODUCT":
            return   state.map((product) => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        ...action.updates
                    };
                } else {
                    return product;
                }
            });

        default: 
        return state;
    }
} 

export default productReducer