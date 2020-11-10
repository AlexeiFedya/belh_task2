const authorizatReducer = (state = {auth: false}, action) => {

    switch (action.type) {
        case 'LOGOUT':
            return {
                auth: false
            };
            case 'LOGIN':
            return {
                auth: true
            };
    
    
        default:
            return state;
    }
};

export default authorizatReducer;