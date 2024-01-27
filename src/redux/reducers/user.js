import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {

    user:null,
    loggedIn:false,
    AuthToken : null,

  },
  reducers: {
    loginUser : (state,action) => {
        state.user = action.payload.user;
        state.loggedIn = true;
        state.AuthToken = action.payload.AuthToken;
    },

    logoutUser : (state) => {
        state.user = null;
        state.loggedIn = false;
        state.AuthToken = null;
    },
    UpdateUser : (state,action) =>{
      state.user = action.payload.user
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginUser,logoutUser,UpdateUser } = user.actions

export default user.reducer