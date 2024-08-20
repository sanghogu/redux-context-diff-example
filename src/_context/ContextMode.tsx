import {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";
import Table from "./Table";
import {initTheadData, initTbodyData, createData} from "../data";

type DATA = {
    checked: boolean,
    name: string
}
type ContextType = {
    tHead?: DATA[],
    setTHead?: Dispatch<SetStateAction<DATA[]>>,
    tBody?: DATA[]
    setTBody?: Dispatch<SetStateAction<DATA[]>>,
}

export const Context = createContext<ContextType>({});

export default function ContextMode() {

    const [tHead, setTHead] = useState(initTheadData);
    const [tBody, setTBody] = useState(initTbodyData);

    const value = {
        tHead,
        tBody,
        setTHead,
        setTBody
    }

    function addTHead(){
        const newData = createData(5);
        setTHead(prevState => {
            const temp = [...prevState]
            temp.push(...newData);
            return temp;
        });
    }

    function addTBody(){
        const newData = createData(5);
        setTBody(prevState => {
            const temp = [...prevState]
            temp.push(...newData);
            return temp;
        });
    }

    useEffect(() => {
        console.log("ContextMode Effect")
    }, []);

    return <div style={{border: "1px solid #ccc"}}>
        Context Mode
        <button onClick={addTHead}>
            THEAD ADD
        </button>
        <button onClick={addTBody}>
            TBODY ADD
        </button>
        <Context.Provider value={value}>
            <Table/>
        </Context.Provider>
    </div>
}