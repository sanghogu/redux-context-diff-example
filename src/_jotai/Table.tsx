import THead from "./THead";
import TBody from "./TBody";
import PureFooter from "./PureFooter";

export default function Table() {

    return <table>
        <colgroup>
            <col width={"50%"}/>
            <col width={"50%"}/>
        </colgroup>
        <THead/>
        <TBody/>
        <PureFooter/>
    </table>
}