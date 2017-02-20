/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';
import NewsCard from './NewsCard'
import Loading from './Loading';


class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news_arr: [],
            current_tag: null,
            next_page: null,
            loading: false
        };

        this.getMore = this.getMore.bind(this);
        this.loading = this.loading.bind(this);
        this.fetchNews = this.fetchNews.bind(this);
        this.setSideBarMaxHeight = this.setSideBarMaxHeight.bind(this)
    }

    componentWillMount() {
        this.getNewsList(this.props.tag)
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.getNewsList(nextProps.tag);
    }

    fetchNews(url) {
        let self = this;
        fetch(url).then(function (response) {
            response.json().then(function (data) {
                self.setState({
                    news_arr: data.results,
                    next_page: data.next,
                    loading:false
                });
                self.setSideBarMaxHeight();
            })
        })
    }

    getNewsList(tag) {
        this.loading();
        if (tag) {
            this.setState({current_tag: tag});
            this.fetchNews(window.the_url + "/news/article/?tags=" + tag)
        }
        else {
            this.setState({current_tag: null});
            this.fetchNews(window.the_url + "/news/article/")
        }
    }

    getMore() {
        this.loading();
        let self = this;
        let old_news_arr = this.state.news_arr;
        fetch(this.state.next_page).then(function (response) {
            response.json().then(function (data) {
                let news_arr = old_news_arr.concat(data.results);
                self.setState({
                    news_arr: news_arr,
                    next_page: data.next,
                    loading:false
                });
                self.setSideBarMaxHeight()
            })
        })
    }

    loading() {
        this.setState({
            loading: true
        })
    }

    setSideBarMaxHeight() {
        document.getElementById("js_side_bar").style.maxHeight = document.getElementById("js_news_list").offsetHeight + "px";
    }

    render() {
        return (
            <div className="news-list-wrapper">
                <div className="news-list" id="js_news_list">
                    {
                        this.state.news_arr.map(news => (
                            <NewsCard
                                id={news.id}
                                title={news.title}
                                cover={news.cover}
                                tags={news.tags_str}
                                issue_time={news.humaniza_create_time}
                                view_num={news.view_number}
                            />
                        ))
                    }
                </div>
                <Loading open={this.state.loading}/>
                <div className="news-list-action">
                    <div className="news-list-btn" onClick={this.getMore}>加载更多</div>
                    <div className="news-list-btn">回到顶部</div>
                </div>

            </div>
        )
    }
}

NewsList.protoTypes = {
    tag: React.PropTypes.array
};

export default NewsList;