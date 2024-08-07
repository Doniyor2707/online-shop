import { configureStore } from "@reduxjs/toolkit";
import counter from "./services/counter";

const store = configureStore({
    reducer: {
        counter, 
    },
}); 

export default store
