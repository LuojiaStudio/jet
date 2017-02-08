/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';
import NewsCard from '../NewsCard/NewsCard'
import './NewsList.css';


class NewsList extends React.Component {
    render() {
        return (
            <div className="news-list">
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
        )
    }
}

export default NewsList;