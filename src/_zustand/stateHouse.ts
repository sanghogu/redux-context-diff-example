import {create} from "zustand";
import {initTbodyData, initTheadData} from "../data";

export const useTHeadStore = create((set) => ({
    data: initTheadData,
    onCheckedChange: (index:number, val: boolean) => set((state: any) => {
        if(state.data[index]) {
            const newState = {...state};
            newState.data = [...newState.data]
            newState.data[index] = {...newState.data[index]}
            newState.data[index].checked = val;
            return newState;
        }
        return state;
    })
}))

export const useTBodyStore = create((set) => ({
    data: initTbodyData,
    onCheckedChange: (index:number, val: boolean) => set((state: any) => {
        if(state.data[index]) {
            const newState = {...state};
            newState.data = [...newState.data]
            newState.data[index] = {...newState.data[index]}
            newState.data[index].checked = val;
            return newState;
        }
        return state;
    })
}))