
import Table from "./Table";
import {atom, RecoilRoot} from "recoil";
import RecoilizeDebugger from 'recoilize';



export default function RecoilMode() {

    return <RecoilRoot>
        <RecoilizeDebugger/>
        <div style={{border: "1px solid #ccc"}}>
            Recoil MODE
            <Table/>
        </div>
    </RecoilRoot>
}