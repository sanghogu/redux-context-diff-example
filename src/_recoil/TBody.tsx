import React from "react";
import {useRecoilState} from "recoil";
import {tBody} from "./state";

export default function TBody() {

    const [body, setBody] = useRecoilState(tBody);

    function checkedOnChange(e: React.ChangeEvent<HTMLInputElement>, index: number){
        const val = e.currentTarget.checked;
        setBody(prevState => {
            const temp = [...prevState];
            temp[index] = {...temp[index], checked: val}
            return temp;
        });
    }

    return <tbody>
    {
        body.map((value, index) => <tr key={index}>
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