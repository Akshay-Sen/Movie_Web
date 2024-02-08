import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Switchtab from '../../../components/switchTabs/Switchtab'
import useFetch from '../../../hooks/useFetch';
import Carousle from '../../../components/carousle/Carousle';

const Trending = () => {

    const [endpoint,setEndpoint] = useState("day");

    const {data,loading} = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) =>{
        setEndpoint(tab=== "Day" ? "day" : "week");
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <Switchtab data={["Day","Week"]} onTabChange ={onTabChange} />
            </ContentWrapper>
            <Carousle data = {data?.results} loading = {loading} />
        </div>
    )
}

export default Trending
