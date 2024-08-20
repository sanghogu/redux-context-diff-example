import React, {useContext, useEffect} from "react";
import {Context} from "./ContextMode";

export default function TBody() {

    const context = useContext(Context);

    useEffect(() => {
        console.log("TBody Effect")
    }, []);

    function checkedOnChange(e: React.ChangeEvent<HTMLInputElement>, index: number){
        const val = e.currentTarget.checked;
        context.setTBody?.(prevState => {
            const temp = [...prevState];
            temp[index].checked = val;
            return temp;
        });
    }

    return <tbody>

    {
        context.tBody?.map((value, index) => <tr key={index}>
            <td>
                <input type={'checkbox'} checked={value.checked} onChange={(e) => checkedOnChange(e, index)}/>
            </td>
            <td>
                {value.name}
            </td>
        </tr>)
    }
    </tbody>
}