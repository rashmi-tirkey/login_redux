

let loginState = {
    username: "",
    isLogin: false,
}

const loggedReducer = (state = loginState, action) => {
    switch (action.type) {
        case "Login":
            loginState = {...loginState,
                username: action.payload.username,
                isLogin: action.payload.isLogin,
            }
            return loginState;
       
        case "Logout":
            loginState = {...loginState,isLogin: action.payload.isLogin}
            return loginState;

        default:
            return state;
    }
}

export default loggedReducer;
