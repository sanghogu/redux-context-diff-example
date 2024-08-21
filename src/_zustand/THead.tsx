import React, {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTBodyStore, useTHeadStore} from "./stateHouse";

type DATA = {
    checked: boolean,
    name: string
}

export default function THead() {

    // @ts-ignore
    const tHeadData:DATA[] = useTHeadStore(state=>state.data);
    // @ts-ignore
    const checkChange = useTHeadStore(state=>state.onCheckedChange);

    return <thead>
    {
        tHeadData.map((value, index) => <tr key={index}>
            <td>
                <input type={'checkbox'} checked={value.checked} onChange={event => checkChange(index, event.currentTarget.checked)}/>
            </td>
            <td>
                {value.name}
            </td>
        </tr>)
    }
    </thead>
}