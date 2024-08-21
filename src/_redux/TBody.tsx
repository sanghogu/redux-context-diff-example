import React, {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function TBody() {

    // @ts-ignore
    const tBodyData:DATA[] = useSelector(state=>state.tBody);
    const dispatch = useDispatch();

    function checkedOnChange(e: React.ChangeEvent<HTMLInputElement>, index: number){
        const val = e.currentTarget.checked;
        dispatch({type: "TBODY_CHECKBOX", payload: {index, checked: val}})
    }

    return <tbody>

    {
        tBodyData.map((value, index) => <tr key={index}>
            <td>
                <input type={'checkbox'} checked={value.checked} onChange={event => checkedOnChange(event, index)}/>
            </td>
            <td>
                {value.name}
            </td>
        </tr>)
    }
    </tbody>
}