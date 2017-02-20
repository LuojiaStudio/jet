/**
 * Created by Jsceoz on 2017/2/16.
 */
import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import Loading from './Loading';

class NewsDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.getNewsDetail = this.getNewsDetail.bind(this)
    }

    componentWillMount() {
        document.body.scrollTop = 0;
    }

    componentDidMount() {
        this.getNewsDetail();
    }

    getNewsDetail() {
        this.setState({
            loading: true
        });
        let self = this;
        fetch(window.the_url + "/news/article/" + this.props.params.id + "/").then(function (response) {
            response.json().then(function (data) {
                self.setState({
                    title: data.title,
                    tags_str: data.tags_str,
                    author: data.author,
                    photographer: data.photographer,
                    create_time: data.create_time.slice(0,10),
                    like_number: data.like_number,
                    view_number: data.view_number,
                    content: data.content,
                    loading: false
                })
            })
        })
    }

    render() {
        let content = this.state.content;
        return (
            <div className="news-detail-page">
                <TopBar/>
                <main className="news-detail-container">
                    <div className="news-detail-paper">
                        <div className="news-detail-header">
                            <div className="news-detail-tags">{this.state.tags_str}</div>
                            <h2 className="news-detail-title">{this.state.title}</h2>
                            <div className="news-detail-info">
                                <span>发布日期：{this.state.create_time}</span>
                                <span>作者：{this.state.author}</span>
                                <span>摄影：{this.state.photographer}</span>
                            </div>
                        </div>

                        <div className="news-detail-content" dangerouslySetInnerHTML={{__html: content}}>

                        </div>

                        <div className="news-detail-action">
                        </div>
                    </div>
                </main>
                <Footer/>
                <Loading open={this.state.loading}/>
            </div>
        )
    }
}

export default NewsDetailPage;