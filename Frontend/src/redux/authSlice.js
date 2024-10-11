import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        user:null
    },
    reducers : {
        loginRequest(state) {

        },
        setLoading : (state,action) =>{
            state.loading = action.payload;
        },
        setUser:(state,action)=>{
            state.user = action.payload
        }
    
    }
});

export const {setLoading} = authSlice.actions;
export const {setUser} = authSlice.actions;
export default authSlice.reducer;