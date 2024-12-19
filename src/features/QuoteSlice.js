import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getQuotes =createAsyncThunk("quote/getQuotes",async ( )=>{
 const res = await fetch('https://dummyjson.com/quotes');
 const data =await res.json();
 return data.quotes;
})

 const quoteSlice = createSlice({
    name:"quote",
    initialState:{
        quotes:[],
    },
    reducers:{
        getQuote:(state,action) =>{
          
        },
    },
    extraReducers:(builder) => {
        builder.addCase(getQuotes.pending,(state,action) =>{
     console.log("loading");
     
        })
        .addCase(getQuotes.fulfilled,(state,action) => {
            state.quotes= action.payload;
        })
        .addCase(getQuotes.rejected,(state,action) =>{
            console.log("req page reject");
            
        })
    },
 });

 export const {getQuote} =quoteSlice.actions;
 export const quoteReducer =quoteSlice.reducer;