import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType {
    token: string;
    name: string;
}

const initialState: UserType = {
    token: "token",
    name: "name"
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state: UserType, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setName: (state: UserType, action: PayloadAction<string>) => {
            state.name = action.payload;
        }
    }
});

export const { setToken, setName } = userSlice.actions;

export default userSlice.reducer