import authorizatReducer from './auth'



const reducer = (state , action) => {

    console.log(action.type)

    return {
        auth: authorizatReducer(state, action),
    }
}

export default reducer;  