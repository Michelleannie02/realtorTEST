import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectAllListings, fetchListings} from './ListingsSlice';

const ListingsList = () =>
{
    const listings = useSelector(selectAllListings);
    const dispatch = useDispatch();

    const listingsStatus = useSelector(state => state.listings.status);
    const error = useSelector(state => state.listings.error);

    useEffect(() =>
    {
        if(listingsStatus === 'idle')
        {
            dispatch(fetchListings());
        }
    }, [listingsStatus, dispatch]);

    let content;

    switch(listingsStatus)
    {
        case 'loading':
            content = <p>laddar...</p>;
            break;
        case 'succeeded':
            content = <div>
                {JSON.stringify(listings)}
            </div>;
            break;
        case 'failed':
            content = <p>{error}</p>;
            break;
        default:
            break;
    }

    return (
        <div>{content}</div>
    );
};

export default ListingsList;