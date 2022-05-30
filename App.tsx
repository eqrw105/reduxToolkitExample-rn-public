import { configureStore } from "@reduxjs/toolkit"
import user from "./src/reducers/user";
import App from "./src/App";
import React from "react";
import { Provider } from "react-redux";

const store = configureStore({
    reducer: {
        user
    }
});

const Root: React.FC = () => {
    return (
        <Provider store={store} >
            <App />
        </Provider>
    );
};

export default Root;