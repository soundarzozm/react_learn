import React from 'react';
import NewsItem from './news_list_item.js';

const newsList = (props) => {

    const news = props.news.map((item)=>(
        <NewsItem item={item}  key={item.id}/>
    ))

    return(
        <>
            {news}
            {props.children}
        </>
    )
}

export default newsList;