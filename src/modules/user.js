// 초기값
const initialState = {
    accessToken: false,
    refreshToken: false,
    login: false,
    data: false,
};

// 저장값 변경
function setUserData(state = initialState, action) {
    switch(action.type) {
        case "user/SET_USER_TOKEN":
            return {
                ...state,
                accessToken: action.userToken.accessToken,
                refreshToken: action.userToken.refreshToken,
                login: true,
            };
        case "user/SET_USER_DATA":
            return {
                ...state,
                data: action.userData,
            };
        case "user/RESET_USER_DATA":
            return initialState;
        default:
            return state;
    }
}

export default setUserData;