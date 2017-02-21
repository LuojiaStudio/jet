/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';
import NewsCard from './NewsCard'
import Loading from './Loading';
import Notification from './Notification'


class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news_arr: [],
            current_tag: null,
            next_page: null,
            loading: false,
            is_notification_open: false,
            notification: '',
            search_query: ""
        };

        this.getMore = this.getMore.bind(this);
        this.loading = this.loading.bind(this);
        this.fetchNews = this.fetchNews.bind(this);
        this.setSideBarMaxHeight = this.setSideBarMaxHeight.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.notification = this.notification.bind(this)
    }

    componentWillMount() {
        this.getNewsList(this.props.tag)
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.getNewsList(nextProps.tag, nextProps.search);
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

    getNewsList(tag, search) {
        this.loading();
        if (tag) {
            this.setState({current_tag: tag});
            this.fetchNews(window.the_url + "/news/article/?tags=" + tag)
        }
        else if (search){
            this.setState({current_tag: null});
            this.fetchNews(window.the_url + "/news/article/?search=" + search)
        }
        else {
            this.setState({current_tag: null});
            this.fetchNews(window.the_url + "/news/article/")
        }
    }

    getMore() {
        if (this.state.next_page == null) {
            this.notification("没有了");
            return
        }
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

    backToTop() {
        document.body.scrollTop = 0
    }

    showSearchInput() {
        if (document.getElementById("js_search_wrapper").style.display === "block") {
            document.getElementById("js_search_wrapper").style.display = "none"
        }
        else {
            document.getElementById("js_search_wrapper").style.display = "block"
        }

    }

    handleSearchInputChange(e) {
        this.setState({
            search_query: e.target.value
        })
    }

    notification(msg) {
        this.setState({
            notification: msg,
            is_notification_open: true
        })
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
                    <div className="news-list-btn" onClick={this.showSearchInput}><i className="fa fa-search"/></div>
                    <div className="news-list-btn" onClick={this.backToTop}><i className="fa fa-angle-up"/></div>
                    <div className="news-list-btn" onClick={this.getMore}><i className="fa fa-angle-down"/></div>
                </div>
                <div className="search-wrapper" id="js_search_wrapper">
                    <input type="text" placeholder="搜索" onChange={this.handleSearchInputChange}/>
                    <a href={"#/search/" + this.state.search_query}><i className="fa fa-search"/></a>
                </div>
                <Notification
                    open={this.state.is_notification_open}
                    message={this.state.notification}
                />

            </div>
        )
    }
}

NewsList.protoTypes = {
    tag: React.PropTypes.array
};

export default NewsList;