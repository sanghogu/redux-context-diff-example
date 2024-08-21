
import Table from "./Table";
import {DevTools} from "jotai-devtools";
import 'jotai-devtools/styles.css'

export default function JotaiMode() {

    return <div>
        <DevTools/>
        <div>
            <div style={{border: "1px solid #ccc"}}>
                Jotai MODE
                <Table/>
            </div>
        </div>
    </div>
}