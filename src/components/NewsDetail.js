/**
 * Created by Jsceoz on 2017/1/22.
 */
import React from 'react'
import Paper from 'material-ui/Paper'
import NewsPage from './NewsPage'
import './news-detail.css'

class NewsDetail extends React.Component {
    render() {
        return (
            <div className="news-detail">
                <div className="news-detail-top-block"></div>
                <NewsPage/>
            </div>
        )
    }
}

export default NewsDetail;