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
        for ( let i = 0; i < this.props.tags.length; i++ ) {
            tags_str += this.props.tags[i] + '/'
        }
        tags_str = tags_str.slice(0, tags_str.length - 1);
        this.setState({
            tags_str: tags_str


        })
    }

    render() {
        return (
            <div
                className="news-card"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
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
                <p className="news-card-tags">{this.state.tags_str}</p>
                <div className="news-card-info">
                    <span><i className="fa fa-calendar"></i>{this.props.issue_time}前</span>
                    <span><i className="fa fa-eye"></i>{this.props.view_num}阅读</span>
                </div>
            </div>
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