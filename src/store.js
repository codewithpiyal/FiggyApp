import { createStore } from "redux";
import rootReducers from "./ReduxContainer/Reducer/reducer";



 const store= createStore(rootReducers)

 export default store;