import {atom} from "recoil";
import {initTbodyData, initTheadData} from "../data";

export const tHead = atom({
    key: 'tHead', // unique ID (with respect to other atoms/selectors)
    default: initTheadData, // default value (aka initial value)
});

export const tBody = atom({
    key: 'tBody', // unique ID (with respect to other atoms/selectors)
    default: initTbodyData, // default value (aka initial value)
});