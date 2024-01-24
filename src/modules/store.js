// 초기값
const initialState = {
    popup: false,
};

// 저장값 변경
function setStore(state = initialState, action) {
    switch(action.type) {
        case "store/SET_POPUP_STATE":
            return {
                ...state,
                popup: action.popup,
            };
        default:
            return state;
    }
}

export default setStore;