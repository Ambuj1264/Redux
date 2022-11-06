import { configureStore } from "@reduxjs/toolkit";
import changeNumber from "./reducers/index";

const store=configureStore({
    reducer:{changeNumber}
})
export default store