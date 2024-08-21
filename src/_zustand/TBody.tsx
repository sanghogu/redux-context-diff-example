import React, {useContext, useEffect} from "react";
import {useTBodyStore} from "./stateHouse";

type DATA = {
    checked: boolean,
    name: string
}

export default function TBody() {

    // @ts-ignore
    const [tBodyData, checkChange] = useTBodyStore(state=>[state.data as DATA[], state.onCheckedChange]);

    return <tbody>

    {
        tBodyData.map((value, index) => <tr key={index}>
            <td>
                <input type={'checkbox'} checked={value.checked} onChange={event => checkChange(index, event.currentTarget.checked)}/>
            </td>
            <td>
                {value.name}
            </td>
        </tr>)
    }
    </tbody>
}