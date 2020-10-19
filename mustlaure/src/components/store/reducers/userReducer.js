const initialStates = {
    
user: null
    
} 

const userReducer = (state = initialStates, action) => {
    switch(action.type) {
        case "ADD_USER": 
        return {
            ...state, 
           user: action.user
        }; 

        case "DELETE_USER": 
        return state.filter(({id}) => id !== action.id); 

        case "GET_USER": 
        return action.user; 

        default: 
        return state;
    }
} 

export default userReducer