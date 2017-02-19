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
        this.generateTagsStr = this.generateTagsStr.bind(this);
    }

    componentDidMount() {
        this.generateTagsStr()
    }

    generateTagsStr() {
        let tags_str = '';
        let self = this;
        for ( let i = 0; i < this.props.tags.length; i++ ) {
            fetch("http://127.0.0.1:8000/news/tag/" + this.props.tags[i] +"/").then(function (response) {
                response.json().then(function (data) {
                    console.log(data);
                    tags_str += ( data.name + '/' );

                })
            })
        }
        // tags_str = tags_str.slice(0, tags_str.length - 1);
        // this.setState({
        //     tags_str: tags_str
        //})
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
                    style={{
                        backgroundImage: 'url("' + this.props.cover + '")',
                        transition: "all 1s"
                    }}
                ></div>
                <h2 className="news-card-title">{this.props.title}</h2>
                <p className="news-card-tags">{this.props.tags}</p>
                <div className="news-card-info">
                    <span><i className="fa fa-calendar"></i>{this.props.issue_time}前</span>
                    <span><i className="fa fa-eye"></i>{this.props.view_num}阅读</span>
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