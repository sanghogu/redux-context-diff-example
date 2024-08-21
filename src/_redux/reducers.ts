import {initTbodyData, initTheadData} from "../data";

const initialState = {
    tHead: initTheadData,
    tBody: initTbodyData
};

type CHECKBOX_ACTION = {type:"THEAD_CHECKBOX"|"TBODY_CHECKBOX", payload: {index: number, checked: boolean}}
type DATA_ADD_ACTION = {type:"THEAD_ADD"|"TBODY_ADD"}

export function rootReducer(state = initialState, action: CHECKBOX_ACTION|DATA_ADD_ACTION) {
    console.log(action)
    switch (action.type) {
        case 'THEAD_CHECKBOX': {
            const newState = {...state};
            newState.tHead = [...newState.tHead]
            newState.tHead[action.payload.index].checked = action.payload.checked;
            return newState;
        }
        case 'TBODY_CHECKBOX': {
            const newState = {...state};
            newState.tBody = [...newState.tBody]
            newState.tBody[action.payload.index].checked = action.payload.checked;
            console.log(newState);
            return newState;
        }
        case "THEAD_ADD":
            return state;
        case "TBODY_ADD":
            return state;
        default:
            return state;
    }
}