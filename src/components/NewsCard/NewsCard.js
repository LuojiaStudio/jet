/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';

class NewsCard extends React.Component {
    render() {
        return (
            <div className="news-card">
                <div className="news-card-media"></div>
                <h2 className="news-card-title">新闻标题新闻标题</h2>
                <p className="news-card-tags">校园/评论</p>
                <div className="news-card-info">
                    <span><i className="fa fa-calendar"></i>5小时前</span>
                    <span><i className="fa fa-eye"></i>16阅读</span>
                </div>
            </div>
        )
    }
}

export default NewsCard;