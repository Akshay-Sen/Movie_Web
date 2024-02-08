import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Switchtab from '../../../components/switchTabs/Switchtab'
import useFetch from '../../../hooks/useFetch';
import Carousle from '../../../components/carousle/Carousle';

const TopRated = () => {

    const [endpoint,setEndpoint] = useState("movie");

    const {data,loading} = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) =>{
        setEndpoint(tab=== "Movies" ? "movie" : "tv");
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <Switchtab data={["Movies","Tv Shows"]} onTabChange ={onTabChange} />
            </ContentWrapper>
            <Carousle data = {data?.results} loading = {loading} endpoint ={endpoint} />
        </div>
    )
}

export default TopRated
