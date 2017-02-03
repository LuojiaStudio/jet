/**
 * Created by Jsceoz on 2017/1/22.
 */
import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import './news-card.css'

const title_style = {
    fontSize: 16,
}

class NewsCard extends React.Component {
    render() {
        return (
            <Card className="news-card">
                <CardMedia className="news-card-media">
                    <img src="http://oss.whusu.com.cn/news_pic/1483274904000.jpg?x-oss-process=style/votestyle" alt=""/>
                </CardMedia>
                <div className="news-text-wrapper">
                    <h4 className="news-title">
                        传递温暖，共享年味
                    </h4>
                    <p className="news-tag">校园/遥感</p>
                    <span className="news-bottom-info news-time">5小时前</span>
                    <span className="news-bottom-info news-view">阅读 50</span>
                    <span className="news-bottom-info news-like">赞 20</span>
                </div>
            </Card>
        )
    }
}

export default NewsCard;