/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';
import NewsCard from './NewsCard'

class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news_arr: [],
        }
    }

    componentWillMount() {
        if (this.props.tag) {
            this.getNewsList(this.props.tag)
        }
        else {
            this.getNewsList(null)
        }

    }

    componentWillUpdate() {
        this.componentWillMount()
    }

    getNewsList(tag) {
        let self = this;
        if (tag) {
            fetch("http://127.0.0.1:8000/news/article/?tags=" + tag).then(function (response) {
                response.json().then(function (data) {
                    console.log(data);
                    self.setState({
                        news_arr: data.results
                    })
                })
            })
        }
        else {
            fetch("http://127.0.0.1:8000/news/article/").then(function (response) {
                response.json().then(function (data) {
                    console.log(data);
                    self.setState({
                        news_arr: data.results
                    })
                })
            })
        }
    }

    render() {
        return (
            <div className="news-list">
                {
                    this.state.news_arr.map(news => (
                        <NewsCard
                            title={news.title}
                            cover={news.cover}
                            tags={news.tags}
                            issue_time={news.humaniza_create_time}
                            view_num={news.view_num}
                        />
                    ))
                }
            </div>
        )
    }
}

NewsList.protoTypes = {
    tags: React.PropTypes.array
};

export default NewsList;