import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {client} from '../../api/client';

const initialState = {
    listings: [],
    status: 'idle',
    error: null
};

export const fetchListings = createAsyncThunk('listings/fetchListings', async () =>
{
    const response = await client.get(`https://localhost:44382/api/listings`, []);
    return response;
});

export const ListingsSlice = createSlice({
    name: "listings",
    initialState, 
    reducers: {},
    extraReducers: {
        [fetchListings.pending]: (state, action) =>
        {
            state.status = 'loading';
        },
        [fetchListings.fulfilled]: (state, action) =>
        {
            state.listings = [];
            state.status = 'succeeded';
            state.listings = state.listings.concat(action.payload);
        },
        [fetchListings.rejected]: (state, action) =>
        {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});

export default ListingsSlice.reducer;

export const selectAllListings = state => state.listings.listings;