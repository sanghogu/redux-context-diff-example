import React, {useContext, useEffect} from "react";
import {Context} from "./ContextMode";

export default function THead() {

    const context = useContext(Context);

    function checkedOnChange(e: React.ChangeEvent<HTMLInputElement>, index: number){
        const val = e.currentTarget.checked;
        context.setTHead?.(prevState => {
            const temp = [...prevState];
            temp[index].checked = val;
            return temp;
        });
    }

    return <thead>
    {
        context.tHead?.map((value, index) => <tr key={index}>
            <td>
                <input type={'checkbox'} checked={value.checked} onChange={(e) => checkedOnChange(e, index)}/>
            </td>
            <td>
                {value.name}
            </td>
        </tr>)
    }
    </thead>
}