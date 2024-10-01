import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
    },
    reducers : {
        loginRequest(state) {

        },
        setLoading : (state,action) =>{
            state.loading = action.payload;
        }
    
    }
});

export const {setLoading} = authSlice.actions;
export default authSlice.reducer;