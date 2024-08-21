
import {initTbodyData, initTheadData} from "../data";
import { atom } from 'jotai'

export const tHead = atom(initTheadData)

export const tBody = atom(initTbodyData);