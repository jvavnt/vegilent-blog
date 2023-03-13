import { Likebtn } from "../constant"
const initialState = {
    cardItems: []
}
export default function cardItems(state = initialState, action) {

    switch (action.type) {
        case Likebtn:
            return {
                ...state,
                cardItems: action.data
            }
            break;
            default:
            return state
    }
}