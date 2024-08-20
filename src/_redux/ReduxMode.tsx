
import { createStore } from 'redux';
import {rootReducer} from './reducers';
import {Provider, useSelector} from "react-redux";
import Table from "./Table"; // rootReducer는 모든 reducer를 합친 reducer입니다.



const store = createStore(rootReducer);


export default function ReduxMode() {

    return <Provider store={store} >
        <div style={{border: "1px solid #ccc"}}>
            REDUX MODE
        </div>
        <Table/>
    </Provider>
}