/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';
import NewsCard from '../NewsCard/NewsCard'

class NewsList extends React.Component {
    render() {
        return (
            <div className="news-list">
                <NewsCard
                    title="新闻新闻"
                    cover="http://oss.whusu.com.cn//news_pic/1479365274000.jpg"
                    tags={['校园', '评论']}
                    issue_time="5小时前"
                    view_num={16}
                />
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
        )
    }
}

export default NewsList;