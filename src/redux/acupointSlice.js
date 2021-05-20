import { createSlice } from '@reduxjs/toolkit';

// const apiEndpoint = apiUrl.url + "/acupunctures";


const initialState = {
  nav: 'Profile',
  acupagelink: '',
  acupointlinkload : false
};

export const acupointSlice = createSlice({
  name: 'acupoint',
  initialState,
  reducers: {
    activeNav : ( state, action )=>{
        state.nav = action.payload;
    },
    acuPageLink : ( state, action )=>{
        state.acupagelink = action.payload;
        state.acupointlinkload = true;
    }
  },

});

export const { 
    activeNav,
    acuPageLink,
} = acupointSlice.actions;


export const selectAcuPoint = (state) => state.acupoint;


export default acupointSlice.reducer;
