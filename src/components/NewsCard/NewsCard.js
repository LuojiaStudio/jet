/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './NewsCard.css';

class NewsCard extends React.Component {
    render() {
        return (
            <Card className="news-card">
                <div className="card-img-wrapper">

                </div>
                <h3 className="card-title">冬至大如年，元宵解乡愁</h3>
                <span className="news-card-tags">校园/评论</span>
                <div className="news-info-wrapper">
                    <span>5分钟前</span>
                    <span>16阅读</span>
                </div>
            </Card>
        )
    }
}

export default NewsCard;