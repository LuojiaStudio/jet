/**
 * Created by Jsceoz on 2017/1/22.
 */
import React from 'react'
import NewsCard from './NewsCard'
import './news-list.css'

class NewsList extends React.Component {
    render() {
        return (
            <div className="news-list">
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
        )
    }
}

export default NewsList;