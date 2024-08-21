import React, {useContext, useEffect} from "react";
import {tHead} from "./state";
import {useAtom} from "jotai";


export default function THead() {

    const [head, setHead] = useAtom(tHead);
    function checkedOnChange(e: React.ChangeEvent<HTMLInputElement>, index: number){
        const val = e.currentTarget.checked;
        setHead(prevState => {
            const temp = [...prevState];
            temp[index] = {...temp[index], checked: val}
            return temp;
        });
    }

    return <thead>
    {
        head.map((value, index) => <tr key={index}>
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