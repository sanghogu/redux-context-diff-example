import React, {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

type DATA = {
    checked: boolean,
    name: string
}

let count = 0;
export default function THead() {

    // @ts-ignore
    const tHeadData:DATA[] = useSelector(state=>state.tHead);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("THead Effect")
    }, []);
    console.log(count++);

    function checkedOnChange(e: React.ChangeEvent<HTMLInputElement>, index: number){
        const val = e.currentTarget.checked;
        dispatch({type: "THEAD_CHECKBOX", payload: {index, checked: val}})
    }

    return <thead>
    {
        tHeadData.map((value, index) => <tr key={index}>
            <td>
                <input type={'checkbox'} checked={value.checked} onChange={event => checkedOnChange(event, index)}/>
            </td>
            <td>
                {value.name}
            </td>
        </tr>)
    }
    </thead>
}