/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';



class NewsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags_str: ''
        };
    }

    componentWillMount() {

    }

    render() {
        return (
            <a
                href={"#/news/"+ this.props.id}
                className="news-card"
            >
                <div
                    className="news-card-media"
                    id="js_news_card_media"
                    style={{backgroundImage: 'url("' + this.props.cover + '")',}}
                ></div>
                <h2 className="news-card-title">{this.props.title}</h2>
                <p className="news-card-tags">{this.props.tags}</p>
                <div className="news-card-info">
                    <span><i className="fa fa-calendar"/>{this.props.issue_time}前</span>
                    <span><i className="fa fa-eye"/>{this.props.view_num}阅读</span>
                </div>
            </a>
        )
    }
}

NewsCard.protoTypes = {
    cover: React.PropTypes.string,
    title: React.PropTypes.string,
    tags: React.PropTypes.array,
    issue_time: React.PropTypes.string,
    view_num: React.PropTypes.number
};

export default NewsCard;